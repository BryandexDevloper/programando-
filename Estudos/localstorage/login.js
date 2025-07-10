const input_email = document.querySelector("#email")
const input_senha = document.querySelector("#senha")
const btn_enviar = document.querySelector("#enviar")




btn_enviar.addEventListener("click",()=>{


    localStorage.setItem("email",input_email.value)
    localStorage.setItem("senha",input_senha.value)

    setTimeout(()=>{
        window.location.href="ver_login.html"
    },5000)

})