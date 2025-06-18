



const lista = document.querySelector('input[name="lista"]')
const guardar = []
const botao = document.querySelector("#enviar")
const add = document.querySelector("#add")


botao.addEventListener("click",()=>{
guardar.push(lista.value)
const valor = lista.value


console.log(guardar)

const li = document.createElement("li")
li.textContent = valor;


add.appendChild(li)


})