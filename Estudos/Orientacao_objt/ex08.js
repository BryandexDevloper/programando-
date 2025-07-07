class alunos{
    constructor(){
        this.pessoas = new Map()
    }

    AdicionarPessoas(id,pessoas){
        this.pessoas.set(id,pessoas)
    }

    ExcluitPessoas(id){
        this.pessoas.delete(id)
    }

    CalcularNota(id,pessoas){
        let acumulador = 0
       
        this.pessoas.forEach((res)=>{
            acumulador = acumulador + res.nota
            
        })
        
         let media = acumulador / this.pessoas.size
         this.pessoas.forEach((res,id)=>{
            this.pessoas.set(
                id,
                {
                    nome:res.nome,
                    nota:res.nota,
                    media:media
                }
            )
         })
        
    }


}

let alunoss = new alunos()
alunoss.AdicionarPessoas(1,{nome:"Negueba",nota:7,media:0})
alunoss.AdicionarPessoas(2,{nome:"Maria",nota:5,media:0})
alunoss.AdicionarPessoas(3,{nome:"Joao",nota:9,media:0})
alunoss.AdicionarPessoas(4,{nome:"gordao",nota:10,media:0})
 

const adicionarAlunos=()=>{

    const container_alunos = document.querySelector(".container-alunos")
    container_alunos.innerHTML=""

    alunoss.pessoas.forEach((res)=>{

    
    const nome = document.createElement("p")
    nome.innerHTML=res.nome
    const nota = document.createElement("p")
    nota.innerHTML=res.nota
    const media = document.createElement("p")
    media.innerHTML=res.media
    const alunos = document.createElement("div")
    alunos.style.display="flex"
    alunos.appendChild(nome)
    alunos.appendChild(nota)
    alunos.appendChild(media)
    container_alunos.appendChild(alunos)
    console.log(res.media)
    })

}

const botao = document.querySelector("#adicionar")
botao.addEventListener("click",()=>{

    const Inome = document.querySelector("#nome")
    const Inota = document.querySelector("#nota")
    let nome = Inome.value
    let nota = Inota.value
    let id = alunoss.pessoas.size + 1

    alunoss.AdicionarPessoas(id,{nome:nome,nota:Number(nota),media:0})
    Inome.value=""
    Inota.value=""
    alunoss.CalcularNota();  
    adicionarAlunos()
})
alunoss.CalcularNota();
adicionarAlunos(alunoss)