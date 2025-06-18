// const carrinho = [
//   { nome: "Mouse", quantidade: 2, estoqueDisponivel: 0 },
//   { nome: "Teclado", quantidade: 1, estoqueDisponivel: 0 },
//   { nome: "Monitor", quantidade: 1, estoqueDisponivel: 0 } // ← problema aqui!
// ];


// let produtoEmfalta
//  const carro = carrinho.every((res)=>{
  
//     if(res.estoqueDisponivel < res.quantidade){
//         produtoEmfalta = res.nome
//         return false
//     }

//     return true
// })

// if(carro){
//     console.log("compra aceita temos estoque disponivel")
// }else{
//     console.log("compra negada estoque indispivel no produto: "+ produtoEmfalta )
// }


// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Carlos", nota: 9 },
//   { nome: "Bruna", nota: 6 },
// ];

// // Seu código aqui

// let alunoReprovado

// const resultado = alunos.every((res)=>{
//     if(res.nota < 7){
//         alunoReprovado = res.nome
//         return false
//     }

//     return true
// })

// console.log("Aluno reprovado "+alunoReprovado)

// /////////////////////////////////////////////////////

// const produtos = [
//   { nome: "Fone", preco: 99 },
//   { nome: "Carregador", preco: 49 },
//   { nome: "Adaptador", preco: null },
// ];

// // Seu código aqui
// let ProdutoSempreco
// const produto = produtos.every((res)=>{
//     if(!res.preco){
//         ProdutoSempreco = res.nome
//         return false
       
//     }

//     return true
// })


// console.log(ProdutoSempreco)


const carrinho = [
  { nome: "Mouse", quantidade: 2, estoqueDisponivel: 15, preco: 20 },
  { nome: "Teclado", quantidade: 1, estoqueDisponivel: 0, preco: 100 },   // estoque insuficiente
  { nome: "Monitor", quantidade: 1, estoqueDisponivel: 22, preco: null },  // preço indefinido
  { nome: "Cabo USB", quantidade: 3, estoqueDisponivel: 10, preco: 5 }
];

let produto_preco
let Produto_estoque

const funcionalidades = (carrinho)=>{

    

    carrinho.every((res)=>{
        if(!res.estoqueDisponivel){
            Produto_estoque = res.estoqueDisponivel
            return false
        }
        return true
    })

    carrinho.every((res)=>{
        if(!res.preco){
            produto_preco = res.preco
            return false
        }
        return true
    })
            const valor_total = carrinho.reduce((total, item) => {
            if (typeof item.preco === "number") {
                return total + (item.preco * item.quantidade);
            }
            return total;
            }, 0);


carrinho.forEach((res)=>{
        if(!res.estoqueDisponivel){
            res.estoqueDisponivel = "Sem estoque"
        }
        

        if(!res.preco){
            res.preco = "Sem preço!!!"
        }
       console.log(res.nome+" ["+"Quantidade do produto: "+res.quantidade+"]  ["+"Estoque do produto: "+res.estoqueDisponivel+"] ["+"Valor do produto: "+res.preco.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
       })+"]")

    })
        console.log("Valor total dos produtos "+valor_total)
}

funcionalidades(carrinho)





// console.log("Nome do produto "+"["+res.nome+"]"+" quandidade do produto "+"["+res.quantidade+"]"+" estoque disponivel "+"["+res.estoqueDisponivel+"]"+" preco do produto "+"["+res.preco +"]"+" total do produto com estoque "+"["+resultado.toLocaleString("pt-br",{
//     style:"currency",
//     currency:"BRL"
// })+"]")
