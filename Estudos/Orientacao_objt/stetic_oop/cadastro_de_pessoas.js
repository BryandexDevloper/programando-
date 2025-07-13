
let guardar_pecoas = new Map()

class Cadastro{
    static Gerar_Codigo(){
        let max = 10000
        let min = 99999
        return Math.floor(Math.random() * (max - min) + min) 
    }

    static Criado_em(){
        let horas = new Date()
        return horas
    }

    constructor(nome){
        this.nome = nome
        this.codigo = Cadastro.Gerar_Codigo()
        this.data = Cadastro.Criado_em()
        
    }

}



class UsuarioPremium extends Cadastro{

            static mostrarVantagens(){
                console.log("Usuário Premium tem acesso a recursos exclusivos.")
            }

            constructor(nome){
                super(nome)
                this.premium = UsuarioPremium.mostrarVantagens()
            }
}


const input_nome = document.querySelector("#nome")
const btn_enviar = document.querySelector("#enviar")
const container_pecoas = document.querySelector(".container_usuarios")

btn_enviar.addEventListener("click",()=>{

    nome = input_nome.value
    let id = guardar_pecoas.size + 1 

    let usuario = new Cadastro(nome)
    guardar_pecoas.set(id,usuario)

    

    
guardar_pecoas.forEach((res)=>{

    const  paragrafo = document.createElement("p")
   paragrafo.textContent=`Nome: ${res.nome} Codigo: ${res.codigo}  horario: ${res.data}`
   if(res.premium){
        paragrafo.textContent=`${res.nome} ${res.codigo} ${res.data} ${res.premuim}`
   }
    container_pecoas.appendChild(paragrafo)

})


})

