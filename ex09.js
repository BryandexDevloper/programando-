const prompt = require('prompt-sync')();

// retormar apenas pares
const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter((num=>{
    return num % 2 == 0
}))
// retornar o dobro dos pares
const dobro = pares.map((num=>{
    return num + num
}))



//somar preços do objeto
const produtos = [
    {nome: 'Celular',preco:1500},
    {nome: 'Fone', preco:200},
    {nome: 'Carregador',preco:100},
    {nome: 'Capa',preco:50}
]

const preco = produtos.map((num=>{
    return num.preco
}))

const total = preco.reduce((acumulador,produto)=>{
    let soma = acumulador + produto
    return soma
})




//voltar somente a media de idades

const pessoas = [
    {nome: 'Carlos',idade: 25},
    {nome: 'Ana',idade:30},
    {nome: 'Bruna',idade:22},
    {nome: 'João',idade:28},
]

const media = pessoas.reduce((acumulador,pessoa)=>{
   return acumulador + pessoa.idade
},0)

const mediaCalc = media / pessoas.length

console.log(mediaCalc)
