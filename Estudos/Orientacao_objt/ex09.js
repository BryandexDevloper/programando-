
let guardar = new Map()

class cadastrar{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    guardar_pessoas(){
        let id = guardar.size + 1
        guardar.set(id,{nome:this.nome,idade:this.idade})
    }
}

const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const btn_enviar = document.querySelector("#enviar")
const container = document.querySelector(".pessoas")


btn_enviar.addEventListener("click",()=>{

    if(nome.value && idade.value){
        let pessoa = new cadastrar(nome.value,idade.value)
    pessoa.guardar_pessoas()
   
    nome.value=""
    idade.value=""

    container.innerHTML=""
    guardar.forEach((res,index)=>{
        const pessoas = document.createElement("p")
        pessoas.textContent=`Ola eu sou o ${res.nome} tenho ${res.idade} e meu id e ${index}`
        container.appendChild(pessoas)
    })
    }else{
        alert("Tem campos vazios ainda")
    }

})
