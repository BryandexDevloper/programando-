const validator = require('validator')
const mensagem = require('./bordao')
const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const multer = require('multer')
const path = require('path')


// midwares para verificação de body
const verificar_login_MW =(req,res,next)=>{
  const data = req.body

  if(!data.email || !data.senha){
    return res.status(400).json({mensagem:'Email e senha são obrigatorios'})
  }
  next()
}
const verificar_cadastro_MW=(req,res,next)=>{
  const data = req.body
 if(!data.email || !data.senha || !data.nome) {
      return res.status(400).json({ 
        mensagem: "Nome, email e senha são obrigatórios" 
      });
    }

if(data.senha.length < 6 ){
  return res.status(400).json({mensagem:'A senha deve conter 6 ou mais caracteres'})
}

    next()
}
const vefiricar_alterar_email_MW = async(req,res,next)=>{
  const data = req.body
  try{
    
    if (!data.id || !data.email || !data.novo_email || !data.nome) {
      return res.status(400).json({ 
        mensagem: "ID, email atual, novo email e nome são obrigatórios" 
      });
    }


    
    // Verificar se o novo email já está em uso
    const ress = await dataBase.query(
      "SELECT * FROM users WHERE email = ?",
      [data.novo_email]
    );

    if (ress.length > 0) {
      return res.status(400).json({ 
        mensagem: "Já existe um usuário com este endereço de email" 
      });
    }
    next()
  }catch(err){
    return res.status(400).json({mensagem:'Ocorreu um erro'})
  }
}
const verificar__alterar_senha_MW=(req,res,next)=>{
    const data = req.body
     if (!data.id || !data.senha || !data.nova_senha) {
      return res.status(400).json({ 
        mensagem: "ID, senha atual e nova senha são obrigatórios" 
      });
    }


    if(data.senha.length < 6 && data.nova_senha.length < 6){
      return res.status(400).json({mensagem:'A senha deve conter 6 ou mais caracteres'})
    }
    next()
}
const varificar_email_MW=(req,res,next)=>{
    const data = req.body
     // Validação de dados obrigatórios
    if (!data.id || !data.codigo || !data.email || !data.novo_email) {
      return res.status(400).json({ 
        mensagem: "ID, código, email atual e novo email são obrigatórios" 
      });
    }
    
    next()
}
const verificar_recuperar_senha_MW=(req,res,next)=>{
  const data = req.body
  if(!data.nova_senha || !data.id  || !data.nome || !data.email){
    console.log(data)
    return res.status(400).json({mensagem:'id e nova senha são obrigatorios'})
  }
  next()
}
const verificar_senha_MW=(req,res,next)=>{
  const data = req.body
   // Valida se todos os campos obrigatórios foram enviados
    if(!data.id || !data.nome || !data.nova_senha || !data.email){
      return res.status(400).json({mensagem:' id nom nova senha e email são obrigatorios'})
    }

    next()
}

// midwares para verificacao de dados
const verificar_campos_MW = (req, res, next) => {
  const data = req.body;
  const regexPerigosas = /<\s*(script|iframe|object|embed|svg)[^>]*>|<\s*img[^>]*(on\w+)\s*=/gi;

  for (const key in data) {
    const valor = data[key];

    if (typeof valor === 'string' && validator.matches(valor, regexPerigosas)) {
      return res.status(400).json({ mensagem: `O campo "${key}" contém caracteres perigosos` });
    }
  }

  next();
};
const verificar_email_campo_MW = (req,res,next)=>{
    const data = req.body
    if(!validator.isEmail(data.email)){
        return res.status(400).json({mensagem:'Insira um endereço de email valido'})
    }

    next()
}
const verificar_novoemail_campo_MW = (req,res,next)=>{
    const data = req.body
     if(!validator.isEmail(data.novo_email)){
        return res.status(400).json({mensagem:'Insira um endereço de email valido'})
    }

    next()
}


//valiador de token
const veficar_tokem_MW = async (req,res,next)=>{
  const headers = req.headers.authorization
  console.log(headers)
  if(!headers){
    return res.status(401).json({erro:'Token de acesso não encontrado'})
  }

  const token =  headers.split(" ")[1]
  console.log(token)
  try{
    const verificando = await promisify(jwt.verify)(token,'6df92c5e98b2ce822b28f9796b744af2')
    console.log({verificando:verificando})
      return next()
  }catch(err){
    return res.status(401).json({err:'token invalido'})
  }


}
const uploadPath = path.join(__dirname, '../uploads/products');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // salva aqui
  },
  filename: (req, file, cb) => {
    const nomeArquivo = `${Date.now()}-${file.originalname}`;
    cb(null, nomeArquivo);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/webp', 'video/wav'];
  if (allowedTypes.includes(file.mimetype)) cb(null, true);
  else cb(new Error('Tipo de arquivo não permitido'), false);
};

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
  fileFilter
});// middlewares/censurarContatos.js

const palavrasNumero = {
  zero: '0', um: '1', uma: '1', dois: '2', duas: '2', tres: '3', três: '3',
  quatro: '4', cinco: '5', seis: '6', meia: '6', sete: '7', oito: '8', nove: '9',
};

function substituirNumerosPorExtenso(texto) {
  return texto.replace(
    /\b(zero|um|uma|dois|duas|tres|três|quatro|cinco|seis|meia|sete|oito|nove)\b/gi,
    (match) => palavrasNumero[match.toLowerCase()]
  );
}

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s@.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// PATTERNS de contatos
const patternsContatos = {
  telefone: /(?:\+?55\s*)?(?:\(?\d{2}\)?\s*)?(?:9\s*)?\d{4}[\s\-.]?\d{4}/g,
  numerosEspacados: /(?:\d\s*[\-\.\,\:\;\|\/\\]\s*){7,}\d/g,
  email: /\b[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9][A-Za-z0-9.-]*\.[A-Za-z]{2,}\b/gi,
  urls: /(?:https?:\/\/|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/gi,
  arrobaUser: /@[A-Za-z0-9._-]{3,}/g,
  numerosSequenciais: /\b\d{9,}\b/g,
  
  // AJUSTADO: só bloqueia quando tem número junto
  frasesExplicitas: /\b(?:meu\s*(?:numero|número|zap|whats(?:app)?)\s*(?:é|e|:|eh)\s*\d|passa\s*(?:teu|seu)\s*(?:numero|número|zap|whats(?:app)?)\s*\d|(?:chama|add|adiciona)\s*(?:no|na)\s*(?:zap|whats(?:app)?)\s*\d|manda\s*(?:teu|seu)\s*(?:numero|número)\s*\d)\b/gi,
};

// PATTERNS de conteúdo ofensivo
const patternsOfensivos = {
  // Palavrões comuns
  palavroes: /\b(?:p[ou0]rr[a4]|c[a4]r[a4]lh[o0]|m[e3]rd[a4]|b[o0]st[a4]|pqp|fdp|vsf|tnc|vai\s*(?:tomar|se\s*foder)|filho\s*da\s*puta|toma\s*no\s*cu|puta\s*que\s*pariu)\b/gi,
  
  // Insultos
  insultos: /\b(?:burr[o0]|idiota|imbecil|cret[i1]n[o0]|est[u0]pid[o0]|bab[a4]c[a4]|otari[o0]|tront[o0]|retardad[o0]|mongoloid[e3]|animal|lixo|vadia|vagabund[o0]|safad[o0])\b/gi,
  
  // Racismo
  racismo: /\b(?:n[e3]g[o0]|n[e3]gr[o0]\s*(?:sujo|fedido)|macaco|primata|escravo|senzala|negro\s*de\s*merda|preto\s*fedido)\b/gi,
  
  // Xenofobia
  xenofobia: /\b(?:gringo\s*(?:sujo|fdp)|estrangeiro\s*(?:de\s*merda|sujo)|volta\s*pro\s*seu\s*pais|imigrante\s*(?:sujo|de\s*merda|parasita)|refugiado\s*(?:sujo|parasita))\b/gi,
  
  // LGBTfobia
  lgbtfobia: /\b(?:viado|bicha|sapatao|sapata|traveco|trans\s*(?:de\s*merda|sujo)|gay\s*(?:de\s*merda|sujo)|boiola|baitola|fresco|marica)\b/gi,
  
  // Religiofobia
  religiofobia: /\b(?:macumbeiro|crente\s*(?:burro|idiota)|catolico\s*(?:burro|idiota)|evangelico\s*(?:burro|idiota)|ateu\s*(?:burro|idiota|de\s*merda))\b/gi,
  
  // Nazismo
  nazismo: /\b(?:heil|hitler|nazi|nazista|suastica|88|14\s*palavras|supremacia\s*branca|raca\s*superior|solucao\s*final|terceiro\s*reich)\b/gi,
  
  // Violência e apologia ao crime
  violencia: /\b(?:vamos\s*matar|mata\s*(?:esse|essa|ele|ela)|assassinar|explodir|bomba|atentado|terrorismo|matar\s*(?:alguem|pessoa)|estuprar|violentar|torturar|mutilar|cortar\s*(?:perna|braco|membro)|comer\s*(?:carne\s*humana|pessoa)|canibalismo)\b/gi,
  
  // Ameaças
  ameacas: /\b(?:vou\s*te\s*(?:matar|bater|pegar|destruir|acabar)|te\s*(?:mato|espanco|quebro)|cuidado\s*(?:com|que)\s*(?:voce|vc)|ja\s*(?:era|morreu)|sua\s*hora\s*chegou)\b/gi,
  
  // Assédio sexual
  assedio: /\b(?:gostosa|delicia|safada|cachorra|puta|piranha|buceta|penis|pau|cu|rola|pirocao|xereca|xoxota|ppk)\b/gi,
  
  // Extremismo
  extremismo: /\b(?:ku\s*klux\s*klan|kkk|al\s*qaeda|isis|estado\s*islamico|taliban|pcc|cv|comando\s*vermelho|primeiro\s*comando)\b/gi,
  
  // Drogas (tráfico/venda)
  drogas: /\b(?:vender\s*(?:droga|cocaina|crack|maconha)|comprar\s*(?:droga|cocaina|crack|maconha)|trafico|traficante|biqueira)\b/gi,
   pedofilia: /\b(?:crianca|criança|bebe|bebê|menor|menino|menina|garoto|garota|adolescente|infante|infantil|kid|child|loli|shota|cp|cheese\s*pizza)\s*(?:gostosa|safada|sexy|nua|pelada|tesao|tesão|bonita|linda)\b/gi,
  
  aliciamento: /\b(?:vem\s*(?:aqui|comigo|na\s*minha\s*casa)|te\s*dou|pega\s*(?:esse|isso)|mostra\s*(?:pra\s*mim|seu)|tira\s*(?:a\s*roupa|foto)|manda\s*(?:foto|nude|video))\s*(?:crianca|criança|menor|menino|menina|garoto|garota)\b/gi,
  
  idadesSuspeitas: /\b(?:tenho|tem|anos?)\s*(?:1[0-7]|[1-9])\s*(?:anos?|aninhos)\b/gi,
  
  contextoInfantil: /\b(?:escola|colegio|colégio|creche|ensino\s*(?:fundamental|medio|médio)|sala\s*de\s*aula|recreio|professor|aluno)\s*(?:gostosa|safada|sexy|pega|fica|transa)\b/gi,
  
  conteudoProibido: /\b(?:pedo|pedofilo|pedófilo|pedofilia|abuso\s*(?:infantil|de\s*menor)|estupro\s*de\s*menor|pornografia\s*infantil|cp\s*(?:content|video|foto)|explorac[aã]o\s*(?:infantil|de\s*menor))\b/gi,
  
  groomingPatterns: /\b(?:segredo\s*nosso|nao\s*conta\s*pra\s*ninguem|não\s*conta\s*pra\s*ninguém|fica\s*entre\s*nos|nós|nosso\s*segredinho|so\s*(?:eu\s*e\s*voce|você))\s*(?:ta|tá|ok|combinado)\b/gi,
  
  linguagemInfantilizada: /\b(?:papai|mamãe|titio|titia|vovô|vovó)\s*(?:gosta|quer|vai|te)\s*(?:tocar|beijar|pegar|fazer)\b/gi,

  // Termos específicos de predadores online
  predadorOnline: /\b(?:quantos\s*anos\s*(?:voce|você|vc)\s*tem|sua\s*idade|menor\s*de\s*idade|qual\s*sua\s*serie|série|ano\s*escolar)\b/gi,
};

function detectarNumerosCamuflados(texto) {
  const apenasNumeros = texto.replace(/[^\d]/g, '');
  return apenasNumeros.length >= 9 && apenasNumeros.length <= 11;
}

function censurar(texto) {
  let resultado = texto;
  let motivoBloqueio = [];
  let prioridadeCritica = false;
  
  // 1. VERIFICA CONTEÚDO RELACIONADO A MENORES PRIMEIRO (PRIORIDADE CRÍTICA)
  const categoriasCriticas = ['pedofilia', 'aliciamento', 'idadesSuspeitas', 'contextoInfantil', 'conteudoProibido', 'groomingPatterns', 'linguagemInfantilizada', 'predadorOnline'];
  
  for (const categoria of categoriasCriticas) {
    if (patternsOfensivos[categoria] && patternsOfensivos[categoria].test(texto)) {
      motivoBloqueio.push(categoria);
      prioridadeCritica = true;
    }
  }
  
  // Se detectou conteúdo relacionado a menores - ALERTA CRÍTICO
  if (prioridadeCritica) {
    console.error('🚨🚨🚨 ALERTA CRÍTICO - CONTEÚDO RELACIONADO A MENORES DETECTADO 🚨🚨🚨');
    console.error(`Categorias: ${motivoBloqueio.join(', ')}`);
    console.error(`Texto original: "${texto}"`);
    console.error(`Timestamp: ${new Date().toISOString()}`);
    
    // Aqui você pode adicionar:
    // - Enviar email urgente para admin
    // - Salvar em log separado
    // - Notificar autoridades se necessário
    // - Banimento imediato do usuário
    
    return { 
      texto: "[conteúdo-bloqueado-violação-grave]", 
      censurado: true, 
      motivo: 'protecao_menores',
      categorias: motivoBloqueio,
      prioridadeCritica: true
    };
  }
  
  // 2. Verifica outros conteúdos ofensivos
  for (const [categoria, pattern] of Object.entries(patternsOfensivos)) {
    if (!categoriasCriticas.includes(categoria) && pattern.test(texto)) {
      motivoBloqueio.push(categoria);
    }
  }
  
  if (motivoBloqueio.length > 0) {
    console.log(`🚫 Conteúdo bloqueado: ${motivoBloqueio.join(', ')}`);
    return { 
      texto: "[mensagem-bloqueada]", 
      censurado: true, 
      motivo: 'conteudo_ofensivo',
      categorias: motivoBloqueio 
    };
  }
  
  // 3. Converte números por extenso
  const comNumeros = substituirNumerosPorExtenso(resultado);
  
  // 4. Verifica números camuflados
  const normalizado = normalizar(comNumeros);
  if (detectarNumerosCamuflados(normalizado)) {
    return { texto: "[contato-removido]", censurado: true, motivo: 'contato' };
  }
  
  // 5. Aplica patterns de contatos
  let foiCensurado = false;
  for (const [nome, pattern] of Object.entries(patternsContatos)) {
    const antes = resultado;
    resultado = resultado.replace(pattern, "[contato-removido]");
    if (resultado !== antes) {
      foiCensurado = true;
    }
  }
  
  return { texto: resultado, censurado: foiCensurado, motivo: foiCensurado ? 'contato' : null };
}

function censurarContatos(req, res, next) {
  if (!req.body.texto) return next();

  const original = req.body.texto;
  const { texto: tratado, censurado, motivo, categorias, prioridadeCritica } = censurar(original);

  if (censurado) {
    if (prioridadeCritica) {
      // AÇÃO IMEDIATA PARA CONTEÚDO RELACIONADO A MENORES
      console.error('🚨🚨🚨 PRIORIDADE CRÍTICA - POSSÍVEL CRIME CONTRA MENOR 🚨🚨🚨');
      console.error(`Usuário: ${req.user?.id || 'não identificado'}`);
      console.error(`IP: ${req.ip}`);
      console.error(`Categorias: ${categorias.join(', ')}`);
      
      // TODO: Implementar ações críticas:
      // 1. Banimento automático permanente do usuário
      // 2. Salvar em log de alta prioridade
      // 3. Enviar email para admin URGENTE
      // 4. Considerar notificar autoridades (dependendo da gravidade)
      
      req.violacaoGrave = true;
      req.prioridadeCritica = true;
      req.categoriasViolacao = categorias;
      
    } else if (motivo === 'conteudo_ofensivo') {
      console.log(`🚫 CONTEÚDO OFENSIVO BLOQUEADO: ${categorias.join(', ')}`);
      req.avisoOfensivo = true;
      req.categoriasOfensivas = categorias;
      
    } else {
      console.log("⚠️ Contato externo detectado e censurado.");
      req.avisoContato = true;
    }
  }

  req.body.texto = tratado;
  next();
}













module.exports = {
    verificar_login_MW,
    verificar_cadastro_MW,
    vefiricar_alterar_email_MW,
    verificar__alterar_senha_MW,
    varificar_email_MW,
    verificar_recuperar_senha_MW,
    verificar_senha_MW,
    verificar_campos_MW,
    verificar_email_campo_MW,
    verificar_novoemail_campo_MW,
    veficar_tokem_MW,
    upload,
    censurarContatos
}