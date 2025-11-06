console.clear();

// ==================== IMPORTS ====================
const mensagem = require("./bordao");
const dataBase = require("./Database");
const bcrypt = require("bcrypt");
const notificacao_login_html = require("./telas_html_email/notificacao_login_html");
const notificacao_cadastro = require("./telas_html_email/notificacao_cadastro");
const notificacao_varificacao = require("./telas_html_email/notificacao_veficacao");
const notificacao_alteracao_dinamica = require("./telas_html_email/notificacao_alteracao_dinamica");
const enviarEmail = require("./EnviarEmail");
const requestip = require("request-ip");
const localizacao = require("geoip-lite");
const UAParser = require("ua-parser-js");
const jwt = require("jsonwebtoken");  


// ==================== ROTAS DE AUTENTICAÇÃO ====================

/**
 * ROTA: POST /login
 *
 * Descrição: Autentica um usuário no sistema
 *
 * Body esperado (JSON):
 * {
 *   "email": "usuario@email.com",     // Obrigatório
 *   "senha": "suasenha123"             // Obrigatório
 * }
 *
 * Respostas:
 * - 200: Login autorizado com dados do usuário
 * - 400: Dados faltando, usuário não encontrado ou senha inválida
 * - 500: Erro no servidor
 *
 * Ações executadas:
 * 1. Valida se email e senha foram enviados
 * 2. Busca usuário no banco de dados
 * 3. Compara a senha fornecida com o hash armazenado
 * 4. Envia email de notificação de login
 * 5. Retorna dados do usuário autenticado
 */
const Login = async (req, res) => {
  const data = req.body;
  const parser = new UAParser(req.headers["user-agent"]);
  const agent = parser.getResult();
  const ip = requestip.getClientIp(req);
  const loc = localizacao.lookup(ip);

  console.log("User-Agent completo:", req.headers["user-agent"]);
  console.log("Navegador detectado:", agent.browser);
  console.log("OS detectado:", agent.os);
  console.log("Device detectado:", agent.device);

  try {
    // Validação de dados obrigatórios

    // Busca usuário no banco de dados
    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length === 0) {
      return res.status(400).json({
        mensagem: "Usuário não encontrado",
      });
    }

    const usuario = ress[0];

    // Validação da senha
    const senhaValida = await bcrypt.compare(data.senha, usuario.passwordHash);

    if (!senhaValida) {
      return res.status(400).json({
        mensagem: "Senha inválida",   
      });
    }

    // Preparar HTML do email de notificação
    const html = notificacao_login_html({
      cidade: loc ? loc.city : null,
      estado: loc ? loc.region : null,
      pais: loc ? loc.country : null,
      ip: ip,
      hora: new Date(),
      dispositivo: agent.device.type || "desconhecido",
      Navegador: `${agent.browser.name} ${agent.browser.version}`,
      sistema: `${agent.os.name} ${agent.os.version}`,
      logo: "https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg",
    });

    // Enviar email de notificação de login
    enviarEmail({
      email: data.email,
      html: html,
      subject: "Novo login detectado - CodePonto",
      text: "Detectamos um novo acesso à sua conta",
    });

    // Retornar sucesso com dados do usuário
    return res.status(200).json({
      mensagem: "Login autorizado",
      user: {
        id: usuario.id,
        nome: usuario.name,
        email: usuario.email,
        tipo: usuario.role,
        dataCriacao: usuario.createdAt,
        token: jwt.sign(
          { id: usuario.id },
          "6df92c5e98b2ce822b28f9796b744af2",
          {
            expiresIn: "7d",
          }
        ),
      },
    });
  } catch (err) {
    console.error("Erro no login:", err);
    return res.status(500).json({
      mensagem: "Erro ao processar login",
      erro: err.message,
    });
  }
};

/**
 * ROTA: POST /cadastro
 *
 * Descrição: Registra um novo usuário no sistema
 *
 * Body esperado (JSON):
 * {
 *   "nome": "João Silva",              // Obrigatório
 *   "email": "usuario@email.com",      // Obrigatório
 *   "senha": "senhaSegura123"          // Obrigatório
 * }
 *
 * Respostas:
 * - 201: Cadastrado com sucesso
 * - 400: Dados faltando ou usuário já cadastrado
 * - 500: Erro no servidor
 *
 * Ações executadas:
 * 1. Valida se email e senha foram enviados
 * 2. Verifica se o email já está cadastrado
 * 3. Criptografa a senha usando bcrypt
 * 4. Insere novo usuário no banco de dados
 * 5. Envia email de boas-vindas
 */
const Cadastro = async (req, res) => {
  try {
    const data = req.body;

    // 1️⃣ Verificar se usuário já existe
    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length > 0) {
      return res.status(400).json({
        mensagem: "Este email já está cadastrado",
      });
    }

    // 2️⃣ Criptografar senha
    const senhaHash = await bcrypt.hash(data.senha, 10);

    // 3️⃣ Inserir novo usuário
    const insertQuery = `
      INSERT INTO users (name, email, passwordHash, role, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, NOW(), NOW())
    `;

    const novoUsuario = await dataBase.query(insertQuery, [
      data.nome,
      data.email,
      senhaHash,
      "client",
    ]);

    const novoUserId = novoUsuario.insertId; // PEGA O ID DO NOVO USUÁRIO

    // 4️⃣ Enviar email de boas-vindas
    const html = notificacao_cadastro({
      dataCadastro: new Date(),
      email: data.email,
      nome: data.nome,
      logo: "https://i.pinimg.com/1200x/ee/e3/4d/eee34d5c97348b6e3d6ed4744fc88119.jpg",
    });

    enviarEmail({
      email: data.email,
      html: html,
      subject: "Bem-vindo à CodePonto!",
      text: "Seu cadastro foi realizado com sucesso",
    });


    // 🌟 5️⃣ VERIFICAR OU CRIAR CONVERSA AUTOMÁTICA COM ADMIN (ID 16)
    const ADMIN_ID = 16;

    const rows = await dataBase.query(
      `SELECT conversa_id 
       FROM participantes_conversa 
       WHERE user_id = ? 
       AND conversa_id IN (
            SELECT conversa_id 
            FROM participantes_conversa 
            WHERE user_id = ?
       )
       LIMIT 1`,
      [ADMIN_ID, novoUserId]
    );

    let conversa_id;

    if (rows.length > 0) {
      // Conversa já existe
      conversa_id = rows[0].conversa_id;
    } else {
      // Criar nova conversa
      const novaConversa = await dataBase.query(
        `INSERT INTO conversas (criado_em) VALUES (NOW())`
      );

      conversa_id = novaConversa.insertId;

      // Inserir participantes
      await dataBase.query(
        `INSERT INTO participantes_conversa (conversa_id, user_id) VALUES (?, ?), (?, ?)`,
        [conversa_id, ADMIN_ID, conversa_id, novoUserId]
      );
    }

    // 6️⃣ ENVIAR MENSAGEM AUTOMÁTICA NA CONVERSA
    const mensagem_boas_vindas = `Olá ${data.nome}! Seja bem-vindo(a) à CodePonto. Qualquer dúvida estou aqui para ajudar! 😊`;

    await dataBase.query(
      `INSERT INTO mensagens (conversa_id, user_id, texto, criado_em) VALUES (?, ?, ?, NOW())`,
      [conversa_id, ADMIN_ID, mensagem_boas_vindas]
    );

    // ✅ FINALIZA RESPOSTA
    return res.status(201).json({
      mensagem: "Cadastrado com sucesso!",
      conversa_id,
    });

  } catch (err) {
    console.error("Erro no cadastro:", err);
    return res.status(500).json({
      mensagem: "Erro ao processar cadastro",
      erro: err.message,
    });
  }
};

// ==================== ROTAS DE ALTERAÇÃO DE DADOS ====================

/**
 * ROTA: POST /alterar-email
 *
 * Descrição: Inicia o processo de alteração de email (envia código de verificação)
 *
 * Body esperado (JSON):
 * {
 *   "id": 123,                         // Obrigatório - ID do usuário
 *   "nome": "João Silva",              // Obrigatório - Nome do usuário
 *   "email": "email_atual@email.com",  // Obrigatório - Email atual
 *   "novo_email": "novo@email.com"     // Obrigatório - Novo email desejado
 * }
 *
 * Respostas:
 * - 200: Código de verificação enviado com sucesso
 * - 400: Email já cadastrado ou erro no processo
 * - 500: Erro no servidor
 *
 * Ações executadas:
 * 1. Verifica se o usuário existe
 * 2. Verifica se o novo email já está em uso
 * 3. Gera código de verificação de 5 dígitos
 * 4. Armazena código no banco com validade de 15 minutos
 * 5. Envia email com código de verificação
 *
 * Observação: Após receber o código, use a rota /validar-email
 */
const alterar_email = async (req, res) => {
  const data = req.body;

  try {
    // ✅ VERIFICAR SE O USUÁRIO EXISTE (CORRIGIDO)
    const usuarioExiste = await dataBase.query(
      "SELECT * FROM users WHERE id = ?",
      [data.id]
    );

    if (usuarioExiste.length === 0) {
      return res.status(400).json({
        mensagem: "Usuário não encontrado",
      });
    }

    // Gerar código de verificação aleatório (5 dígitos)
    let codigo = Math.floor(Math.random() * 100000);
    const dataExpiracao = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos

    // Preparar HTML do email de verificação
    const html = notificacao_varificacao({
      codigoVerificacao: codigo,
      dataExpiracao: dataExpiracao,
      logo: "https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg",
      nome: data.nome,
      novoValor: data.novo_email,
      tipoAlteracao: "email",
    });

    // Inserir código de verificação no banco de dados
    const confirmar = await dataBase.query(
      "INSERT INTO verification_codes (userId, code, type, expiresAt) VALUES (?, ?, ?, ?)",
      [data.id, codigo, "alterar_email", dataExpiracao]
    );

    // Enviar email com código de verificação
    enviarEmail({
      email: data.email,
      html: html,
      subject: "Código de Verificação - Alteração de Email",
      text: "Use o código para confirmar a alteração do seu email",
    });

    return res.status(200).json({
      mensagem: "Código de alteração de email enviado com sucesso",
      expiraEm: "15 minutos",
    });
  } catch (err) {
    console.error("Erro ao solicitar alteração de email:", err);
    return res.status(400).json({
      mensagem: "Erro ao processar solicitação",
      erro: err.message,
    });
  }
};

/**
 * ROTA: POST /validar-email
 *
 * Descrição: Valida o código de verificação e confirma a alteração do email
 *
 * Body esperado (JSON):
 * {
 *   "id": 123,                         // Obrigatório - ID do usuário
 *   "email": "email_atual@email.com",  // Obrigatório - Email atual
 *   "novo_email": "novo@email.com",    // Obrigatório - Novo email
 *   "codigo": "12345"                  // Obrigatório - Código recebido por email
 * }
 *
 * Respostas:
 * - 200: Email alterado com sucesso
 * - 400: Código inválido, expirado ou não encontrado
 * - 500: Erro no servidor
 *
 * Ações executadas:
 * 1. Busca código de verificação no banco
 * 2. Valida se o código está correto
 * 3. Verifica se o código não expirou
 * 4. Atualiza o email no banco de dados
 * 5. Envia email de confirmação da alteração
 * 6. Remove o código usado do banco
 */
const Validar_email = async (req, res) => {
  const parser = new UAParser(req.headers["user-agent"]);
  const agent = parser.getResult();
  const ip = requestip.getClientIp(req);
  const loc = localizacao.lookup(ip);
  const data = req.body;

  try {
    // Buscar código de verificação
    const ress = await dataBase.query(
      "SELECT * FROM verification_codes WHERE userId = ?",
      [data.id]
    );

    if (ress.length === 0) {
      return res.status(400).json({
        mensagem: "Nenhum código de verificação encontrado para este usuário",
      });
    }

    const usuario = ress[0];

    // Validar código
    if (usuario.code != data.codigo) {
      return res.status(400).json({
        mensagem: "Código de verificação inválido",
      });
    }

    // Verificar expiração
    if (new Date() > usuario.expiresAt) {
      console.log(usuario.expiresAt);
      return res.status(400).json({
        mensagem: "Código de verificação expirado. Solicite um novo código.",
      });
    }

    // Atualizar email no banco de dados
    const mudarEmail = await dataBase.query(
      "UPDATE users SET email = ? WHERE id = ?",
      [data.novo_email, data.id]
    );

    // Preparar HTML do email de confirmação
    const html = notificacao_alteracao_dinamica({
      cidade: loc ? loc.city : null,
      estado: loc ? loc.region : null,
      pais: loc ? loc.country : null,
      ip: ip,
      hora: new Date(),
      dispositivo: agent.device.type || "desconhecido",
      navegador: `${agent.browser.name} ${agent.browser.version}`,
      sistema: `${agent.os.name} ${agent.os.version}`,
      logo: "https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg",
      tipoAlteracao: "email",
      valorAntigo: data.email,
      valorNovo: data.novo_email,
    });

    // Enviar email de confirmação (para o email ANTIGO)
    enviarEmail({
      email: data.email,
      html: html,
      subject: "Alteração de email concluida",
      text: "Você acabou de alterar seu email",
    });

    // Remover código de verificação usado
    const apagar_codigo = await dataBase.query(
      "DELETE FROM verification_codes WHERE userId = ?",
      [data.id]
    );

    return res.status(200).json({
      mensagem: "Alteração de email bem sucedida",
    });
  } catch (err) {
    console.error("Erro ao validar alteração de email:", err);
    return res.status(400).json({
      mensagem: "Erro ao processar validação",
      erro: err.message,
    });
  }
};

/**
 * ROTA: POST /alterar-senha
 *
 * Descrição: Altera a senha do usuário
 *
 * Body esperado (JSON):
 * {
 *   "id": 123,                         // Obrigatório - ID do usuário
 *   "senha": "senhaAtual123",          // Obrigatório - Senha atual
 *   "nova_senha": "novaSenha456"       // Obrigatório - Nova senha
 * }
 *
 * Respostas:
 * - 200: Senha alterada com sucesso
 * - 400: Senha atual inválida ou dados faltando
 * - 500: Erro no servidor
 *
 * Ações executadas:
 * 1. Busca usuário no banco de dados
 * 2. Valida se a senha atual está correta
 * 3. Criptografa a nova senha
 * 4. Atualiza a senha no banco de dados
 * 5. Envia email de notificação da alteração
 */
const Alterar_senha = async (req, res) => {
  const parser = new UAParser(req.headers["user-agent"]);
  const agent = parser.getResult();
  const ip = requestip.getClientIp(req);
  const loc = localizacao.lookup(ip);
  const data = req.body;

  try {
    // Buscar usuário no banco de dados
    const ress = await dataBase.query("SELECT * FROM users WHERE id = ?", [
      data.id,
    ]);

    if (ress.length === 0) {
      return res.status(400).json({
        mensagem: "Usuário não encontrado",
      });
    }

    const usuario = ress[0];

    // Validar senha atual
    const senhaValida = await bcrypt.compare(data.senha, usuario.passwordHash);

    if (!senhaValida) {
      return res.status(400).json({
        mensagem: "Senha atual inválida",
      });
    }

    // Criptografar nova senha
    const senhaHash = await bcrypt.hash(data.nova_senha, 10);

    // Atualizar senha no banco de dados
    const trocar = await dataBase.query(
      "UPDATE users SET passwordHash = ? WHERE id = ?",
      [senhaHash, usuario.id]
    );

    // Preparar HTML do email de notificação
    const html = notificacao_alteracao_dinamica({
      cidade: loc ? loc.city : null,
      estado: loc ? loc.region : null,
      pais: loc ? loc.country : null,
      ip: ip,
      hora: new Date(),
      dispositivo: agent.device.type || "desconhecido",
      navegador: `${agent.browser.name} ${agent.browser.version}`,
      sistema: `${agent.os.name} ${agent.os.version}`,
      logo: "https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg",
      tipoAlteracao: "senha",
    });

    // Enviar email de notificação
    enviarEmail({
      email: usuario.email,
      html: html,
      subject: "Alteração de senha bem sucessedida",
      text: "Alteração de senha",
    });

    return res.status(200).json({
      mensagem: "Alteração de senha bem sucessedida",
    });
  } catch (err) {
    console.error("Erro ao alterar senha:", err);
    return res.status(500).json({
      mensagem: "Erro ao processar alteração de senha",
      erro: err.message,
    });
  }
};

/**
 * ROTA: POST /recuperar_senha (ou similar)
 *
 * DESCRIÇÃO: Inicia o processo de recuperação de senha gerando um código de verificação
 * e enviando por email para o usuário.
 *
 * BODY OBRIGATÓRIO:
 * {
 *   "id": number,          // ID do usuário
 *   "nome": string,        // Nome do usuário
 *   "email": string,       // Email do usuário
 *   "nova_senha": string   // Nova senha que será definida após validação
 * }
 *
 * FLUXO:
 * 1. Valida se todos os campos obrigatórios foram enviados
 * 2. Gera um código aleatório de 6 dígitos
 * 3. Salva o código no banco com validade de 15 minutos
 * 4. Envia email com código de verificação
 * 5. Retorna sucesso
 *
 * RESPOSTAS:
 * - 200: Código enviado com sucesso
 * - 400: Campos obrigatórios faltando ou erro no processo
 */
const recuperar_senha = async (req, res) => {
  try {
    const data = req.body;
    // Valida se todos os campos obrigatórios foram enviados

    // Gera um código aleatório de até 6 dígitos (0 a 99999)
    const codigo = Math.floor(Math.random() * 100000);

    // Insere o código no banco com validade de 15 minutos
    const ress = await dataBase.query(
      "INSERT INTO verification_codes (userId, code, type, expiresAt) VALUES (?, ?, ?, ?)",
      [
        data.id,
        codigo,
        "recuperar_senha",
        new Date(Date.now() + 15 * 60 * 1000),
      ]
    );

    // Monta o HTML do email com o código de verificação
    const html = notificacao_varificacao({
      codigoVerificacao: codigo,
      dataExpiracao: new Date(Date.now() + 15 * 60 * 1000),
      logo: "exemple",
      nome: data.nome,
      tipoAlteracao: "senha",
    });

    // Envia o email com o código de verificação
    enviarEmail({
      email: data.email,
      html: html,
      subject: "Codigo de redifição de senha",
      text: "Você esta redefinindo sua senha",
    });

    return res
      .status(200)
      .json({ mensagem: "Codigo de redifinição de senha enviado " });
  } catch (err) {
    return res.status(400).json({ mensagem: `Ocorreu um erro ${err}` });
  }
};

/**
 * ROTA: put /validar_senha (ou similar)
 *
 * DESCRIÇÃO: Valida o código de verificação enviado por email e efetiva a troca de senha.
 *
 * BODY OBRIGATÓRIO:
 * {
 *   "id": number,          // ID do usuário
 *   "nome": string,        // Nome do usuário
 *   "email": string,       // Email do usuário
 *   "nova_senha": string,  // Nova senha a ser definida
 *   "codigo": string       // Código de 6 dígitos recebido por email
 * }
 *
 * FLUXO:
 * 1. Captura informações do dispositivo/navegador/localização do usuário
 * 2. Valida se todos os campos obrigatórios foram enviados
 * 3. Busca o código de verificação no banco de dados
 * 4. Valida se o código existe, está correto e não expirou
 * 5. Atualiza a senha no banco (com hash bcrypt)
 * 6. Envia email de notificação sobre a alteração
 * 7. Remove o código usado do banco de dados
 * 8. Retorna sucesso
 *
 * RESPOSTAS:
 * - 200: Senha alterada com sucesso
 * - 400: Campos faltando, código inválido/expirado ou erro no processo
 */
const validar_senha = async (req, res) => {
  try {
    // Captura informações do user-agent (navegador, SO, dispositivo)
    const parser = new UAParser(req.headers["user-agent"]);
    const agent = parser.getResult();

    // Captura o IP do cliente
    const ip = requestip.getClientIp(req);

    // Obtém localização baseada no IP (cidade, estado, país)
    const loc = localizacao.lookup(ip);

    const data = req.body;

    // Busca o código de verificação do usuário no banco
    const ress = await dataBase.query(
      "SELECT * FROM verification_codes WHERE userId = ?",
      [data.id]
    );
    const usuario = ress[0];

    // Verifica se existe algum código de verificação para este usuário
    if (ress.length === 0) {
      return res
        .status(400)
        .json({ mensagem: "Codigo de veficacão invalido ou expirado" });
    }

    // Compara o código enviado com o código armazenado no banco
    if (data.codigo != usuario.code) {
      return res
        .status(400)
        .json({ mensagem: "Codigo de verificação invalido" });
    }

    // Verifica se o código ainda está dentro do prazo de validade (15 minutos)
    if (new Date(Date.now()) > usuario.expiresAt) {
      return res
        .status(400)
        .json({ mensagem: "Codigo de verificação expirado" });
    }

    // Cria o hash da nova senha usando bcrypt (fator de custo 10)
    const senhaHash = await bcrypt.hash(data.nova_senha, 10);

    // Atualiza a senha no banco de dados
    const mudarSenha = await dataBase.query(
      "UPDATE users SET passwordHash = ? WHERE id = ?",
      [senhaHash, data.id]
    );

    // Monta o HTML de notificação com dados do dispositivo e localização
    const html = notificacao_alteracao_dinamica({
      cidade: loc ? loc.city : null,
      estado: loc ? loc.region : null,
      pais: loc ? loc.country : null,
      ip: ip,
      hora: new Date(),
      dispositivo: agent.device.type || "desconhecido",
      navegador: `${agent.browser.name} ${agent.browser.version}`,
      sistema: `${agent.os.name} ${agent.os.version}`,
      logo: "https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg",
      tipoAlteracao: "senha",
    });

    // Envia email notificando sobre a alteração de senha bem-sucedida
    enviarEmail({
      email: data.email,
      html: html,
      subject: "Alteração de senha concluida",
      text: "Alteração de senha",
    });

    // Remove o código de verificação usado do banco de dados
    const apagar_codigo = dataBase.query(
      "DELETE FROM verification_codes WHERE userId = ?",
      [data.id]
    );

    return res.status(200).json({ mensagem: "Senha recuperada com sucesso " });
  } catch (err) {
    return res.status(400).json({ mensagem: `Ocorreu um erro ${err}` });
  }
};

const Buscar_Portfolios = async (req, res) => {
  const ress = await dataBase.query(
    'SELECT * FROM users WHERE role = "developer" '
  );
  if (ress.length > 0) {
    const desenvolver = ress.map((use) => {
      return {
        id:use.id,
        nome: use.name,
        fotoPerfil: use.fotoPerfil,
        fotoFundo:use.fotoFundo,
        sobre: use.sobreMim,
        projetos: use.projetos,
        tecnologias: use.tecnologias,
        verificado: use.verified ? true : false,
        descricaoPerfil: use.descricaoPerfil, // Ex: "Agência de desenvolvimento web especializada..."
        categoria: use.categoria, // Ex: "Full Stack", "Frontend", "Backend"
        tipoAtuacao: use.tipoAtuacao, // Ex: "Freelancer", "Agência", "Equipe"
        segmento: use.segmento, // Ex: "Soluções Web", "UI/UX e Aplicações Web"
        cidade: use.cidade, // Ex: "São Paulo", "Porto Alegre"
        estado: use.estado,
      };
    });

    return res
      .status(200)
      .json({ mensagem: "Usuarios encontrados", usuarios: desenvolver });
  } else {
    return res
      .status(400)
      .json({ mensagem: "Nem um desenvolvedor encontrado" });
  }
};

const Buscar_tecnologia = async (req, res) => {
  const data = req.query;
  const ress = await dataBase.query(
    `SELECT * FROM users WHERE tecnologias LIKE ? AND role = 'developer'`,
    [`%${data.tecnologia}%`]
  );
  if (ress.length > 0) {
    const desenvolver = ress.map((use) => {
      return {
        id:use.id,
        nome: use.name,
        fotoPerfil: use.fotoPerfil,
        fotoFundo:use.fotoFundo,
        sobre: use.sobreMim,
        projetos: use.projetos,
        tecnologias: use.tecnologias,
        verificado: use.verified ? true : false,
        descricaoPerfil: use.descricaoPerfil, // Ex: "Agência de desenvolvimento web especializada..."
        categoria: use.categoria, // Ex: "Full Stack", "Frontend", "Backend"
        tipoAtuacao: use.tipoAtuacao, // Ex: "Freelancer", "Agência", "Equipe"
        segmento: use.segmento, // Ex: "Soluções Web", "UI/UX e Aplicações Web"
        cidade: use.cidade, // Ex: "São Paulo", "Porto Alegre"
        estado: use.estado,
      };
    });
    return res
      .status(200)
      .json({ mensagem: "Usuarios encontrados", usuarios: desenvolver });
  } else {
    return res
      .status(400)
      .json({
        mensagem: "Nem um desenvolvedor encontrado com essa tecnologia",
      });
  }
};


const buscarId= async (req,res)=>{
  const data = req.query
 const ress = await dataBase.query(
  'SELECT * FROM users WHERE id = ? AND role = "developer"',
  [data.id]
);
  if(ress.length > 0 ){
    const desenvolver = ress.map((use)=>{
      return {
        id:use.id,
        nome: use.name,
        fotoPerfil: use.fotoPerfil,
        fotoFundo:use.fotoFundo,
        sobre: use.sobreMim,
        projetos: use.projetos,
        tecnologias: use.tecnologias,
        verificado: use.verified ? true : false,
        descricaoPerfil: use.descricaoPerfil, // Ex: "Agência de desenvolvimento web especializada..."
        categoria: use.categoria, // Ex: "Full Stack", "Frontend", "Backend"
        tipoAtuacao: use.tipoAtuacao, // Ex: "Freelancer", "Agência", "Equipe"
        segmento: use.segmento, // Ex: "Soluções Web", "UI/UX e Aplicações Web"
        cidade: use.cidade, // Ex: "São Paulo", "Porto Alegre"
        estado: use.estado,
      }
    })
    return res.status(200).json({mensagem:'Usuario encontrado com sucesso',usuarios:desenvolver})
  }else{
    return res.status(400).json({mensagem:'usuario nao encontrado'})
  }
}
const path = require('path');
const { text } = require("stream/consumers");
const enviarImagens = async (req, res) => {
  const arquivos = req.files; // req.files para array
  let { produtoId } = req.query; // extrai o produtoId do query

  if (!arquivos || arquivos.length === 0) {
    return res.status(400).json({ mensagem: 'Nenhum arquivo foi enviado' });
  }

  if (!produtoId) {
    return res.status(400).json({ mensagem: 'O ID do produto é obrigatório' });
  }

  // Se produtoId for array, pega apenas o primeiro valor
  if (Array.isArray(produtoId)) {
    produtoId = produtoId[0];
  }

  // Limite de 5 arquivos
  if (arquivos.length > 5) {
    return res.status(400).json({ mensagem: 'Você só pode enviar até 5 arquivos' });
  }

  const values = arquivos.map(file => [
    produtoId,       // agora sempre um valor único
    file.filename,   // nome do arquivo salvo no servidor
    file.mimetype,   // tipo do arquivo
  ]);

  console.log(values);

  try {
    await dataBase.query(
      "INSERT INTO imagens_produto (produto_id, caminho, tipo) VALUES ?",
      [values]
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ mensagem: 'Erro ao salvar arquivos no banco', erro: err });
  }

  return res.status(200).json({ mensagem: 'Produto enviado', values });
};


const Buscar_projetos_user = async (req,res)=>{
  const data = req.query
  const ress = await dataBase.query('SELECT * FROM produtos WHERE user_id = ?',[data.id])
  if(!data.id){
    return res.status(400).json({mensagem:'Id do usuario obrigatorio'})
  }

  if(ress.length > 0){
    const projetos = ress.map((use)=>{
      return{
        userid: use.user_id,
        id:use.id,
        nome:use.nome,
        descricao:use.descricao,
        tecnologias:use.tecnologias,
        pros:use.pros,
        contras:use.contras,
        recursos_ad:use.recursos_adicionais,
        valor:use.valor,
        ativo:use.ativo?true:false
      }
    })
    return res.status(200).json({mensagem:'Produtos do usuario',projetos:projetos})
  }else{
    return res.status(400).json({mensagem:'Nem um projeto encontrado'})
  }

  
}
const buscar_produto_id = async (req, res) => {
  try {
    const data = req.query

    if (!data.id) {
      return res.status(400).json({ mensagem: 'ID do produto obrigatório' })
    }

    const ress = await dataBase.query('SELECT * FROM produtos WHERE id = ?', [data.id])

    if (ress.length > 0) {
      const produto = ress.map((use) => ({
        userid: use.user_id,
        id:use.id,
        nome:use.nome,
        descricao:use.descricao,
        tecnologias:use.tecnologias,
        pros:use.pros,
        contras:use.contras,
        recursos_ad: !!use.recursos_adicionais,
        valor:use.valor
      }))

      return res.status(200).json({ mensagem: 'Produto encontrado', produto })
    } else {
      return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

  } catch (err) {
    console.error('Erro ao buscar produto:', err)
    return res.status(500).json({ mensagem: 'Erro interno do servidor' })
  }
}

const Buscar_recursos_ad = async(req,res)=>{
const data = req.query
const ress = await dataBase.query('SELECT * FROM recursos_produto WHERE produto_id = ? AND ativo = 1',[data.produto_id])
if(!data.produto_id){
  return res.status(400).json({mensagem:'PRODUTO_ID E obrigatorio para a requisição'})
}
if(ress.length > 0){
  const recursos = ress.map((use)=>{
    return{
      nome:use.nome,
      descricao:use.descricao,
      valor:use.valor

    }
  })
  return res.status(200).json({mensagem:'Recusos Encontrados',recursos:recursos})
}else{
  return res.status(400).json({mensagem:'Nem um recurso adicional encontrado nesse produto'})
}
}

const buscar_produtos_dinamico = async (req, res) => {
  try {
    // Pega o nome enviado na URL (exemplo: /buscar?nome=mouse)
    const { nome } = req.query;

    // Começa a query básica (busca todos os produtos ativos)
    let query = 'SELECT * FROM produtos WHERE ativo = 1';
    let params = [];

    // Se o usuário mandou o nome, adiciona um filtro na query
    if (nome) {
      query += ' AND nome LIKE ?';
      params.push(`%${nome}%`);
    }

    // Executa a query no banco
    const ress = await dataBase.query(query, params);

    // Se não encontrar nenhum resultado
    if (ress.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum produto encontrado' });
    }

    // Organiza os resultados
    const resultado = ress.map((use) => ({
       userid: use.user_id,
        id:use.id,
        nome:use.nome,
        descricao:use.descricao,
        tecnologias:use.tecnologias,
        pros:use.pros,
        contras:use.contras,
        recursos_ad:use.recursos_adicionais,
        valor:use.valor
    }));

    // Retorna os dados
    return res.status(200).json({ 
      mensagem: nome ? 'Produtos filtrados encontrados' : 'Todos os produtos encontrados', 
      projetos: resultado 
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro ao buscar produtos' });
  }
};

const Buscar_comentarios = async (req,res)=>{
  
  const data = req.query
  try {
   if(!data.tipo){
    return res.status(400).json({mensagem:'O tipo de busca deve estar incluso na requisão',sucesso:false})
   }

   if(data.tipo === 'produto'){
     if(!data.produto_id){
    return res.status(400).json({mensagem:'O id do produto e obrigatorio',secesso:false})
  }

  const ress = await dataBase.query('SELECT * FROM avaliacoes WHERE produto_id = ?',[data.produto_id])
  if(ress.length === 0){
    return res.status(400).json({mensagem:'Nem um comentario encontrado nesse produto',sucesso:false})
  }

  const comentarios_por_estrelas = {}
  for(let estrelas = 1; estrelas <= 5; estrelas++){
    const resultado = await dataBase.query('SELECT * FROM avaliacoes WHERE produto_id = ? AND estrelas = ?',[data.produto_id,estrelas])
    comentarios_por_estrelas[estrelas] = resultado.length 
  }

  return res.status(200).json({
    mensagem:'Comentarios encontrados com sucesso',
    sucesso:true,
    comentarios:ress,
    total:ress.length,
    porEstrelas:comentarios_por_estrelas
  })

   }

   if(data.tipo === 'perfil'){
     if(!data.usuario_id){
    return res.status(400).json({mensagem:'O id do usuario e obrigatorio',secesso:false})
  }

  const ress = await dataBase.query('SELECT * FROM avaliacoes_perfil WHERE usuario_id = ?',[data.usuario_id])
  if(ress.length === 0){
    return res.status(400).json({mensagem:'Nem um comentario encontrado nesse desenvolvedor',sucesso:false})
  }

  const comentarios_por_estrelas = {}
  for(let estrelas = 1; estrelas <= 5; estrelas++){
    const resultado = await dataBase.query('SELECT * FROM avaliacoes_perfil WHERE usuario_id = ? AND estrelas = ?',[data.usuario_id,estrelas])
    comentarios_por_estrelas[estrelas] = resultado.length 
  }

  return res.status(200).json({
    mensagem:'Comentarios encontrados com sucesso',
    sucesso:true,
    comentarios:ress,
    total:ress.length,
    porEstrelas:comentarios_por_estrelas
  })
   }

  } catch (error) {
        console.error(error)
        return res.status(500).json({mensagem:'Erro interno',erro:error,sucesso:false})
           
  }

  
}

const criar_conversa = async (req, res) => {
  const data = req.query;

  if (!data.userA || !data.userB) {
    return res.status(400).json({ sucesso: false, mensagem: 'O id dos usuários é obrigatório' });
  }

  if(data.userA === data.userB){
    return res.status(400).json({mensagem:'Voce não pode conversar com voce mesmo',sucesso:false})
  }

  // 1️⃣ Verificar se já existe conversa entre os dois usuários
  const rows = await dataBase.query(
    `SELECT conversa_id 
     FROM participantes_conversa 
     WHERE user_id = ? 
     AND conversa_id IN (
          SELECT conversa_id 
          FROM participantes_conversa 
          WHERE user_id = ?
     )
     LIMIT 1`,
    [data.userA, data.userB]
  );

  if (rows.length > 0) {
    return res.status(200).json({
      sucesso: true,
      conversa_id: rows[0].conversa_id,
      mensagem: "Conversa já existia"
    });
  }

  // 2️⃣ Criar nova conversa
  const novaConversa = await dataBase.query(`
    INSERT INTO conversas (criado_em) VALUES (NOW());
  `);

  const conversa_id = novaConversa.insertId;

  // 3️⃣ Inserir participantes
  await dataBase.query(
    `INSERT INTO participantes_conversa (conversa_id, user_id) VALUES (?, ?), (?, ?)`,
    [conversa_id, data.userA, conversa_id, data.userB]
  );

  return res.json({
    sucesso: true,
    conversa_id,
    mensagem: "Conversa criada com sucesso"
  });
};


const buscar_conversas = async (req,res)=>{
  const data = req.query
  const resss = await dataBase.query(`
  SELECT * FROM participantes_conversa 
  WHERE conversa_id IN (SELECT conversa_id FROM participantes_conversa WHERE user_id = ?)
`,[data.userID])

    
  if(resss.length > 0){
    const todos_menos_eu = resss.filter((res)=>res.user_id != data.userID)
   const pessoas = todos_menos_eu.map(res => res.user_id)
   const users = await dataBase.query(
    `SELECT id, name, fotoPerfil FROM users WHERE id IN (${pessoas.map(() => '?').join(',')})`,
    pessoas
  );
    return res.status(200).json({mensagem:`conversas encontradas no user id ${data.userID}`,conversas:todos_menos_eu,quantidade:todos_menos_eu.length,sucesso:true,pessoas:users})
  }else{
    return res.status(400).json({mensagem:`Nem uma conversa encontrada no userID ${data.userID}`,sucesso:false})
  }
}
const buscar_conversas_ativas = async (req, res) => {
  const data = req.query;

  if (!data.conversa_id) {
    return res.status(400).json({
      mensagem: "conversa_id é obrigatório",
      sucesso: false
    });
  }

  const ress = await dataBase.query(
    "SELECT * FROM mensagens WHERE conversa_id = ? ORDER BY criado_em ASC",
    [data.conversa_id]
  );

  if (ress.length > 0) {
    return res.status(200).json({
      mensagem: "Mensagens encontradas com sucesso",
      sucesso: true,
      mensagens: ress
    });
  } else {
    return res.status(200).json({
      mensagem: "Nenhuma mensagem encontrada",
      sucesso: true,
      mensagens: []
    });
  }
};




// ==================== EXPORTS ====================
module.exports = {
  Login,
  Cadastro,
  alterar_email,
  Validar_email,
  Alterar_senha,
  recuperar_senha,
  validar_senha,
  Buscar_Portfolios,
  Buscar_tecnologia,
  buscarId,
  enviarImagens,
  Buscar_projetos_user,
  buscar_produto_id,
  Buscar_recursos_ad,
  buscar_produtos_dinamico,
  Buscar_comentarios,
  criar_conversa,
  buscar_conversas,
  buscar_conversas_ativas
};
