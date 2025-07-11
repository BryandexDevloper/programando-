let guardar_nomes = []
const container_nomes = document.querySelector(".container_nomes")
class Pessoa{
    constructor(nome,idade,cidade){
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }


    guardar_pessoas(pessoas){
        guardar_nomes.push(pessoas)
    }


    MostrarPecoa(){
        guardar_nomes.forEach((res)=>{

            const nome = document.createElement("p")
            if(res.empresa){
                nome.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade} empresa: ${res.empresa}`
            }else if(res.escola){
                nome.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade} escola: ${res.escola}`
            }else{
                nome.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade}`
            }
            container_nomes.appendChild(nome)
        })
    }
   


   
}


class estutante extends Pessoa{
    constructor(nome,idade,cidade,escola){
        super(nome,idade,cidade)
        this.escola =  escola
    }

    
}


class trabalhador extends Pessoa{
    constructor(nome,idade,cidade,empresa){
        super(nome,idade,cidade)
        this.empresa = empresa
    }

     
}




const input_idade = document.querySelector("#idade")
const input_cidade = document.querySelector("#cidade")
const input_nome = document.querySelector("#nome")
const btn_enviar = document.querySelector("#btn_enviar")

const input_trabalhador = document.querySelector("#trabalhador")
const input_estudante = document.querySelector("#estudante")



const btn_limpar = document.querySelector("#limpar")

const btn_cancelar = document.querySelector("#cancelar")

btn_enviar.addEventListener("click",()=>{
    let idadee = input_idade.value
    let cidadee = input_cidade.value
    let nome_procurado = input_nome.value

   


    input_nome.value=""
    container_nomes.innerHTML=""

    if(nome_procurado == "" || idadee == "" || cidadee == ""){
        alert("campo vazio")
        return;
    }

    if(guardar_nomes.some(res => res.nome == nome_procurado)){
        alert("esse nome ja existe")
        return;
    }

    if(input_estudante.checked){

   
    let pessoa= new estutante(nome_procurado,idadee,cidadee,true)
   

        pessoa.guardar_pessoas(pessoa) 
        pessoa.MostrarPecoa()     
   
    }else if(input_trabalhador.checked){
     
     
    let pessoa= new trabalhador(nome_procurado,idadee,cidadee,true)
    pessoa.guardar_pessoas(pessoa)
    pessoa.MostrarPecoa()

    }else{
        
    let pessoa= new Pessoa(nome_procurado,idadee,cidadee)
    pessoa.guardar_pessoas(pessoa)
    pessoa.MostrarPecoa()
    
  
   
    }

     if(guardar_nomes.length === 5){
        localStorage.setItem("pessoas",JSON.stringify(guardar_nomes))
        window.location.href="parabens.html"
}


})


btn_limpar.addEventListener("click",()=>{


    container_nomes.innerHTML=" tudo sera apagado em 5s"

   let id = setTimeout(()=>{
        guardar_nomes.splice(0)
        container_nomes.innerHTML=""
    },5000)


    btn_cancelar.addEventListener("click",()=>{
        container_nomes.innerHTML=""
        clearTimeout(id)
    })

})

