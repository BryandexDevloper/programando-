

async function Enviaremail({to,email_user,html}) {
    const data = await fetch('https://api-envio-email-bryandex.onrender.com/enviar_mail',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            service:'gmail',
            email:'adrianbryan072@gmail.com',
            password:'fnfb gmzw sefz gaem',
            to:to,
            subject:'Tentativa de login nesse endereço de email',
            html:html,
            email_user:email_user

        })
    })
}

module.exports = {Enviaremail}