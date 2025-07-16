
let data = localStorage.getItem("banco_dados")
let dados_convertidos = JSON.parse(data)
let array_dados = dados_convertidos


const input_user = document.querySelector("#user")
const input_password = document.querySelector("#password")
const btn_login = document.querySelector(".btn_login")
const btn_password = document.querySelector(".btn_password")

let contador = 0
btn_password.addEventListener("click",()=>{
contador++
    
if(contador == 1){
    input_password.type="text"
    btn_password.textContent="X"
}

if(contador > 1){
    input_password.type="password"
    btn_password.textContent="V"
    contador = 0
}
    
})

let contando = 0
btn_login.addEventListener("click",()=>{
    loginUser()
    contando++
    if(contando > 10){
       input_password.addEventListener("input",()=>{
        input_password.value=""
        input_password.placeholder="tentativas exedidas tente mais tarde"
       }) 

       input_user.addEventListener("input",()=>{
        input_user.value=""
        input_user.placeholder="tentativas exedidas tente mais tarde"
       }) 
    }
})





function loginUser(){

    if(input_user.value.length <= 5){
        input_user.value=""
        input_user.style.border="1px solid red"
        input_user.placeholder="O nome de usuario precisa ter mais de 5 caracteres"
    }
    if(input_password.value.length <= 5){
        input_password.value=""
        input_password.style.border="1px solid red"
        input_password.placeholder="a senha de usuario precisa ter mais de 5 caracteres"
    }
    
    if(array_dados.find(res =>res.nickname == input_user.value && res.password == input_password.value)){
        console.log("acesso liberado")
    }else{
        
        console.log("usuario nao encontrado ou senha errada")
    }

}


console.log(array_dados)