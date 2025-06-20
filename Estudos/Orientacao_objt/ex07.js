class Produto{
    constructor(){
        this.produtos = new Map()
    }

    AdicionarProduto(id,produto){
        this.produtos.set(id,produto)
    }

    RemoverProdutos(id){
        this.produtos.delete(id)
    }

    CalcularProduto(){
        let acumudor = 0
        this.produtos.forEach((res)=>{
            acumudor = acumudor + res.preco
        })
    }
}

let carrinho = new  Produto()

carrinho.AdicionarProduto(1,{nome:"Macarrao",preco:5.50})
carrinho.AdicionarProduto(2,{nome:"Arroz",preco:13.00})
carrinho.AdicionarProduto(3,{nome:"bolacha",preco:2.50})

const ColorcarProdutos=()=>{

    const container_produtos = document.querySelector(".container-anuncios")
    container_produtos.innerHTML=""

    carrinho.produtos.forEach((res,index)=>{

        const caixa = document.createElement("div")
        caixa.style.display="flex"
        caixa.style.gap="20px"
        const nome = document.createElement("p")
        const valor = document.createElement("p")
        caixa.appendChild(nome)
        caixa.appendChild(valor)
        container_produtos.appendChild(caixa)
        valor.innerHTML=res.preco.toLocaleString("pt-br",{
            style:"currency",
            currency:"BRL"
        })
        nome.innerHTML=res.nome
        const excluir = document.createElement("p")
        excluir.innerHTML="Excluir"
        caixa.appendChild(excluir)

        excluir.addEventListener("click",()=>{
            carrinho.RemoverProdutos(index)
            caixa.remove(index)
        })

    })

}


const btn_colocar = document.querySelector("#enviar")
btn_colocar.addEventListener("click",()=>{

    const Inome = document.querySelector("#Nome")
    const Ivalor = document.querySelector("#valor")
    
     if(Inome.value === Number){
     alert("Digite um nome valido desgraça")
   }else{
    const Inome = document.querySelector("#Nome")
    const Ivalor = document.querySelector("#valor")
    let id = carrinho.produtos.size + 1
    carrinho.AdicionarProduto(id,{nome:Inome.value,preco:Ivalor.value})
     ColorcarProdutos()
   }
    
   
})




ColorcarProdutos(carrinho)