let email = localStorage.getItem("email")
let senha = localStorage.getItem("senha")



const container = document.querySelector(".container")

container.innerHTML=`email e :${email} <br>
senha e : ${senha}`