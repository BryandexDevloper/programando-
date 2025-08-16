

async function Enviaremail({to,email_user,html,subject}) {
    const data = await fetch('https://api-envio-email-bryandex.onrender.com/enviar_mail',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            service:'gmail',
            email:'adrianbryan072@gmail.com',
            password:'fnfb gmzw sefz gaem',
            to:to,
            subject:subject,
            html:html,
            email_user:email_user

        })
    })
}

module.exports = {Enviaremail}