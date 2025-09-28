let estoqueProduto = new Map


class Produto {

    

  constructor(nome,valor,estoque){
    this.nome = nome
    this.valor = valor
    this.estoque  = estoque
    this.id = estoqueProduto.size + 1
    
}

    setentrada(nome,valor,quantidade){
        
            estoqueProduto.set(this.id,this)
    }


    setExcluir(saida){
        this.estoque -= saida
    }

}

let produto1 = new Produto("teclado",29.99,120)
produto1.setentrada(produto1.nome,produto1.valor,produto1.estoque)
let produto2 = new Produto("teclado",29.99,120)
produto2.setentrada(produto2.nome,produto2.valor,produto2.estoque)
let produto3 = new Produto("teclado",29.99,120)
produto3.setentrada(produto3.nome,produto3.valor,produto3.estoque)



produto3.setExcluir(2)

console.log(estoqueProduto)
console.log(produto3)
