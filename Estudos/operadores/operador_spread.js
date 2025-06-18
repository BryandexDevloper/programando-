// let vet1 =[10,20,30]
// let vet2 =[11,22,33,44,55]
// let vet3 =[...vet1]
// const jogador1={nome:"bruno",energia:100,vidas:3}
// const jogador2={nome:"bruse",energia:100,vidas:5}
// const jogador3={...jogador1,...jogador2}

// console.log("vet1 "+ vet1)
// console.log("vet2 "+ vet2)
// console.log("vet3 "+ vet3)
// console.log(jogador3)

// const objs1=document.getElementsByTagName("div")
// console.log(objs1)
// const objs2=[...document.getElementsByTagName("div")]
// console.log(objs2)

// const soma=(v1,v2,v3)=>{
//     return v1+v2+v3
// }

// let valores=[1,5,4]

// console.log(soma(...valores))


const lista_numeros = [1,2,3]
let lista_numeros_quadrado = [];

const somaTresnumeros = (num1,num2,num3)=>{

    let res = (num1 * num1)
    let ros = (num2 * num2)
    let ris = (num3 * num3)

    lista_numeros_quadrado.push(res,ros,ris)
    


    return  lista_numeros_quadrado
}

console.log(somaTresnumeros(...lista_numeros))