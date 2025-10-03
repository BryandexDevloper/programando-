console.clear();
const mensagem = require("./bordao");
const dataBase = require("./Database");
const bcrypt = require("bcrypt"); // CORRIGIDO
const notificacao_login_html = require("./telas_html_email/notificacao_login_html");
const requestip = require('request-ip')
const localizacao = require('geoip-lite')
const UAParser  = require('ua-parser-js')
const enviarEmail = require('./EnviarEmail')
const notificacao_cadastro = require('./telas_html_email/notificacao_cadastro')
const notificacao_varificacao = require('./telas_html_email/notificacao_veficacao')
const Login = async (req, res) => {
  const data = req.body;
  const parser = new UAParser (req.headers['user-agent'])
  const agent = parser.getResult()
  const ip = requestip.getClientIp(req)
  const loc =  localizacao.lookup(ip)
  const html = notificacao_login_html({
     cidade: loc ? loc.city : null,
    estado: loc ? loc.region : null,
    pais: loc ? loc.country : null,
    ip: ip,
    hora: new Date(),
     dispositivo: agent.device.type || 'desconhecido',
    Navegador: `${agent.browser.name} ${agent.browser.version}`,
    sistema: `${agent.os.name} ${agent.os.version}`,
    logo:'https://i.pinimg.com/736x/37/30/04/37300417bfeb0f3a091312749737f5d7.jpg'

  })

  console.log(parser.getBrowser().name)
  try {
    if (!data.email || !data.senha) {
      return res
        .status(400)
        .json({ mensagem: "Ainda faltam dados importantes" });
    }

    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length === 0) {
      return res.status(400).json({ mensagem: "Usuario nao encontrado" });
    }

    const usuario = ress[0];

    const senhaValida = await bcrypt.compare(data.senha, usuario.passwordHash);
    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Senha invalida" });
    }else{
     enviarEmail({email:data.email,html:html,subject:'Login detectado',text:'Login'})
      return res.status(200).json({
      mensagem: "Login autorizado",
      user: {
        id:usuario.id,
        nome: usuario.name,
        email: usuario.email,
        tipo: usuario.role,
        dataCriacao: usuario.createdAt,
        
      },
    }); 
    }

    
  } catch (err) {
    return res.status(400).json({ mensagem: err.message });
  }
};

const Cadastro = async (req, res) => {
  try {
    const data = req.body;
    const html = notificacao_cadastro({dataCadastro:new Date(),email:data.email,nome:data.nome,logo:'https://i.pinimg.com/1200x/ee/e3/4d/eee34d5c97348b6e3d6ed4744fc88119.jpg'})

    if (!data.email || !data.senha) {
      return res
        .status(400)
        .json({ mensagem: "Ainda faltam dados importantes" });
    }

    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length > 0) {
      return res
        .status(400)
        .json({ mensagem: "Esse usuário já está cadastrado" });
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const insertQuery = `
            INSERT INTO users (name, email, passwordHash, role, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, NOW(), NOW())
        `;
    await dataBase.query(insertQuery, [
      data.nome,
      data.email,
      senhaHash,
      "cliente",
    ]);
    enviarEmail({email:data.email,html:html,subject:'Cadastro na CodePonto',text:'Seja bem vindo a CodePonto'})
    return res.status(201).json({ mensagem: "Cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ mensagem: err.message });
  }
};


const alterar_email = async (req,res)=>{
  const data = req.body
  try{
   

    if(data.email){
      const ress = await dataBase.query('SELECT * FROM users WHERE id = ?',[data.id])
        if(ress.length > 0){
          let Codigo = Math.floor(Math.random() * 100000)
          const html = notificacao_varificacao({codigoVerificacao:Codigo,dataExpiracao:new Date() + 15*60*1000,nome:ress[0].nome,logo:'teste',tipoAlteracao:'email',novoValor:data.novo_email})
          enviarEmail({email:data.email,html:html,subject:'Alteração de e-mail',text:'Você esta tentando alterar o seu email'})
          const resultado = await dataBase.query('INSERT INTO verification_codes (userId,code,type,expiresAt) VALUES (?,?,?,?)',[data.id,Codigo,'Email reset',new Date() + 15*60*1000])
          return res.status(200).json({mensagem:'Codigo de verificacao enviado '})
        }
      
    }


  }catch(err){
    return res.status(400).json({mensagem:'Algo deu errado ',err})
  }
}

module.exports = { Login, Cadastro,alterar_email };
