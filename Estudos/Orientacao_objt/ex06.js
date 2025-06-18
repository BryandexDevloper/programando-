// // class pessoas{
// //     constructor(nome,idade){
// //         this.nome = nome
// //         this.idade = idade
// //     }

// //     Apresentar(){
// //         console.log(`Ola eu sou ${this.nome} e tenho ${this.idade} anos`)
// //     }
// // }


// // let pessoa1 = new pessoas("João",18)
// // let pessoa2 = new pessoas("Maria",22)

// // pessoa2.Apresentar()


// class Conta{
//     constructor(titular,saldo){
//         this.Titular = titular
//         this.saldo = saldo
//     }

//     deposito(valor){
//             this.saldo = this.saldo + valor
//             console.log(`Deposito feito com exito no valor de ${valor} pelo titular ${this.Titular}`)
//     }

//     saque(valor){
//         if(this.saldo >= valor){
//             this.saldo = this.saldo - valor
//             console.log(`Saque feito com sucesso no valor de ${valor},00 em nome de ${this.Titular}`)
//         }else{
//            console.log(`Saldo insulficiente`) 
//         }
//     }

//     informacaoConta(){

//         console.log(`Titular da conta: ${this.Titular} Saldo disponivel: ${this.saldo}`)
//     }


//     Transacao(valor,beneficiario){
//         if(valor < 1){
//             console.log(`Valor minimo para pix e de 1,00`)
//         }else{
//         this.saque(valor)
//         beneficiario.deposito(valor)
//         console.log(`Pix feito com sucesso no valor de ${valor} de ${this.Titular} para ${beneficiario.Titular}`)
//         }
//     }
// }



// let contas = [
// new Conta("Joao" ,500),
// new Conta("Maria",0)
// ]

// contas[0].Transacao(10,contas[1])



 

class carrinho_de_Compras{
    constructor(){
        this.itens = new Map()
        
    }


    AdicionarProduto(id,produto){
        this.itens.set(id,produto)
    }


    RemoverProduto(id){
        this.itens.delete(id)
    }

    calcularProduto(){
        let acumulador = 0
        this.itens.forEach((res)=>{
            acumulador = acumulador + res.preco
        })
        console.log(total)
    }
}

let carrinho = new carrinho_de_Compras()
carrinho.AdicionarProduto(1,{Nome:"arroz",preco:32,quantidade:12})
carrinho.AdicionarProduto(2,{Nome:"Feijao",preco:5.50,quantidade:20})
carrinho.AdicionarProduto(3,{Nome:"Carne",preco:35,quantidade:50})  


const ColorcarProdutos = ()=>{
  
    const container_informacoes = document.querySelector(".container-produtos")
   
    carrinho.itens.forEach((res,index)=>{
        const ApagarProduto = document.createElement("p")
        const container_priodutos = document.createElement("div")
        const NomeProduto = document.createElement("p")
        const Valor = document.createElement("p")

        Valor.innerHTML= res.preco
        NomeProduto.innerHTML = res.Nome
        ApagarProduto.innerHTML = "Apagar produto"
        ApagarProduto.addEventListener("click",()=>{
            carrinho.RemoverProduto(index)
            container_priodutos.remove()
        })
        container_priodutos.appendChild(ApagarProduto)
        container_priodutos.appendChild(Valor)
        container_priodutos.appendChild(NomeProduto)
        container_informacoes.appendChild(container_priodutos)

    })

}

 const adicionarProduto = document.querySelector("#enviar")

    adicionarProduto.addEventListener("click",()=>{

        
        let INome = document.querySelector("#nome")
        let Ipreco = document.querySelector("#valor")
        let id = carrinho.itens.size + 1
        let Nome = INome.value
        let preco = Ipreco.value
        carrinho.AdicionarProduto(id,{Nome,preco})
        

        ColorcarProdutos()
    })

ColorcarProdutos(carrinho)
