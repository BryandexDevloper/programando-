const transporte = require('nodemailer')

 const transponder = transporte.createTransport({
    service:'gmail',
    auth:{
        user:'adrianbryan072@gmail.com',
        pass:'fnfb gmzw sefz gaem'
    }
})


 async  function enviarEmail({email,subject,html,text}){
    try{
        const enviar = await transponder.sendMail({
        from:'adrianbryan',
        to:email,
        subject:subject,
        text:text,
        html:html
    })
    }catch(err){
        console.error(err)
    }

}

module.exports = enviarEmail