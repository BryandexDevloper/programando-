console.clear();
const mensagem = require("./bordao");
const dataBase = require("./Database");
const bcrypt = require("bcrypt"); // CORRIGIDO
const notificacao_login_html = require("./telas_html_email/notificacao_login_html");
const requestip = require('request-ip')
const localizacao = require('geoip-lite')



const Login = async (req, res) => {
  const data = req.body;
  const userAgent = req.headers['user-agent']
  const ip = requestip.getClientIp(req)
  const loc =  localizacao.lookup(ip)
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
     
      return res.status(200).json({
      mensagem: "Login autorizado",
      user: {
        id:usuario.id,
        nome: usuario.name,
        email: usuario.email,
        tipo: usuario.role,
        dataCriacao: usuario.createdAt,
        pc:userAgent,
        ip:ip,
        cidade:loc?loc.city:null,
        pais:loc?loc.country:null,
        regiao:loc?loc.region:null
        
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

    return res.status(201).json({ mensagem: "Cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ mensagem: err.message });
  }
};


const alteracoes = async (req,res)=>{
  const data = req.body
  try{
    if(data.nome){
      const ress = await dataBase.query('SELECT * FROM users WHERE id = ?',[data.id])
      if(ress.length > 0){
        const resultado = await dataBase.query('INSERT INTO users (name) VALUES (?)',[data.novo_nome])
        return res.status(200).json({mensagem:'Nome de usuario alterado com sucesso'})
      }else{
        return res.status(400).json({mensagem:'Usuario nao encontrado'})
      }
    }


    if(data.email){
      const ress = await dataBase.query('SELECT * FROM users WHERE id = ?',[data.id])
        if(ress.length > 0){

        }
      
    }


  }catch(err){
    return res.status(400).json({mensagem:'Algo deu errado ',err})
  }
}

module.exports = { Login, Cadastro };
