let garagem = new Map()

class carro{
    constructor(nome,portas){
        this.portas = portas
        this.nome = nome
        this.cor = undefined
        this.ligado = false
    }

    guardar_carro(){
        let id = garagem.size + 1
        garagem.set(id,{nome:this.nome,portas:this.portas})
    }
}



class militar extends carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    guardar_carro_militar(){
        let id = garagem.size + 1
        garagem.set(id,{nome:this.nome,portas:this.portas,blindagem:this.blindagem,municao:this.municao})
    }
}


const nome = document.querySelector("#nome")
const portas = document.querySelector("#portas")
const blindagem = document.querySelector("#blindagem")
const municao = document.querySelector("#municao")
const btn_enviar = document.querySelector("#btn_enviar")
const container_veiculos = document.querySelector(".container_veiculos")
const input_militar = document.querySelector("#militar")
const input_classico = document.querySelector("#classico")


portas.value = 0
blindagem.value = 0
municao.value = 0




btn_enviar.addEventListener("click",()=>{
    if(input_militar.checked){
        let veiculo_militar = new militar(nome.value,portas.value,blindagem.value,municao.value)
        veiculo_militar.guardar_carro_militar()
        
        container_veiculos.innerHTML=""
        garagem.forEach((res)=>{
        const veiculo_criado = document.createElement("p")
        veiculo_criado.innerHTML = 
         `Nome do veículo: ${res.nome}<br>
         Portas: ${res.portas}<br>
         Blindagem: ${res.blindagem}<br>
         Munição: ${res.municao}`

        container_veiculos.appendChild(veiculo_criado)
    })


    }else{
       let carro_normal = new carro (nome.value,portas.value)
       carro_normal.guardar_carro()
       
        container_veiculos.innerHTML=""
        garagem.forEach((res)=>{
        const veiculo_criado = document.createElement("p")
        veiculo_criado.innerHTML=`Nome do veículo: ${res.nome}<br>
         Portas: ${res.portas}`
        container_veiculos.appendChild(veiculo_criado)
    })


    }
})


try{

    const numero = 1
    numero = numero + numero

}catch(error){

    console.log("desculpe algo deu errado "+error)
}