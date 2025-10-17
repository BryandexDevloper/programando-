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
});







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
    upload
}