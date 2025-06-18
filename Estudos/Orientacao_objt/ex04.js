function turma(nome,idade){
    
        this.nome = nome,
        this.idade = idade,
    
    this.getNome=function(){
        return this.nome
    }

    this.getIdade=function(){
        return this.idade
    }

    this.setNome=function(nome){
        this.nome = nome
    }

    this.setIdade=function(idade){
        this.idade = idade
    }

    
    this.Info=function(){
        console.log(`Nome ${this.nome} e idade ${this.idade}`)
        console.log("-----------------------------------------")
    }
}


const btnenviar = document.querySelector("#enviar")


let pessoas = []
const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")

const lista = document.createElement("div")
document.body.appendChild(lista)

const mostrarPessoas = ()=>{
    lista.innerHTML=""
    pessoas.forEach((res)=>{
        const div = document.createElement("div")
        div.innerHTML=`nome ${res.getNome()} e idade ${res.getIdade()}`
        lista.appendChild(div)
    })
}

btnenviar.addEventListener("click",()=>{
   
    
   
    let pessoa = new turma(nome.value,Number(idade.value))
    pessoas.push(pessoa)
    nome.value=""
    idade.value=""
    console.log(pessoas)
    mostrarPessoas()

})