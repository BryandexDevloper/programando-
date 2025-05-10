const prompt = require('prompt-sync')();


//soma dos numeros
// const valores = [5,3]

// const soma = (valores)=>{

// const calculo = valores.reduce((acumulador,atual)=>{
//     return acumulador + atual
// },0)

// return calculo

// }
// console.log(soma(valores))




//quadrado dos numeros
// const soma = (num)=>{return num*num}

// console.log(soma(4))

//Dobro dos numeros
const dados = [2,4,6,8,10]

const soma = (dados)=>{
    const dobro =dados.map((num)=>num*2)
    return dobro
}

console.log(soma(dados))

//ParOuImpar

const ParImpar=(num1,num2)=>{
 if(num1 % 2 == 0){
    return 'par'
 }else{
    return 'Impar'
 }
}

console.log(ParImpar(5))
console.log(ParImpar(8))

//retornar o maior dos numeros

const MaiorDeles = (a,b,c,d)=>{
    if(a > b ){
        return a
    }else if(b > a){
        return b                        // primeiro fiz assim pois nao sabia como fazer varias requisiçoes com o ternario
    }else if(c > d){
        return c
    }else if(d > c){
        return d
    }
}

console.log(MaiorDeles(7,3))
console.log(MaiorDeles(2,9))

// string + nome
let nome = 'Joao'
const  Saudacao = (nome)=> 'Ola, '+ nome
console.log(Saudacao(nome))


const val = [15,22,34,45,56]
const maiores = val.filter((num)=>{
    return num > 30
})

console.log(maiores)