class turma{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    
    Info(){
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
   
    
   
    let pessoa = new turma(nome.value,idade.value)
    pessoas.push(pessoa)
    nome.value=""
    idade.value=""
    console.log(pessoas)
    mostrarPessoas()

})