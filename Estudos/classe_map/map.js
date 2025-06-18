// let p = new Map()

// p.set("p1",{nome:"pcgamer",valor:12,estoque:4})
// p.set("p2",{nome:"pcgamer",valor:120,estoque:4})
// p.set("p3",{nome:"pcgamer",valor:121,estoque:4})


// for(let [nome,valor] of p){
//     let resultado = valor.valor * valor.estoque
//     console.log(resultado)
// 

// let usuarios = new Map()

// usuarios.set(1,"João")
// usuarios.set(2,"Maria")
// usuarios.set(3,"Carlos")
// usuarios.delete(1)

// // console.log(usuarios.has(2))
// // console.log(usuarios.get(3))

// for(let [chave,valor] of usuarios){
//     console.log(chave,valor)
// }


let pessoa1 = {nome:"Lucas",idade:32}
let pessoa2 = {nome:"Fernanda",idade:24}
let pessoas = new Map()
pessoas.set(pessoa1,"Ativa")
pessoas.set(pessoa2,"Ativo")

for(let[chave,valor] of pessoas){
    console.log(chave,valor)
}
