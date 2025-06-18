// const cursos = [1,2,3]




// cursos.map((el,a,)=>{
//     console.log(el,a)
// })


// const ParImpar = [1,2,3,4,5,67,8,9,0,10];
// let pares= 0;
// let impares=0;
// let a = ParImpar.map((par,i)=>{
//     if(par % 2 == 0){
//         pares++
//     }

//     return 'Pares ' + pares
// })



// console.log(a)



// let el=document.getElementsByTagName('div')
// el = [...el]
// el.map((e,i)=>{
//     e.innerHTML='Ola'
// console.log(e)
// })
// console.log(el)

// cosnt el=document.getElementsByTagName('div')
// const val=Array.prototype.map.call(el,({innerHtml})=>innerHtml)
// console.log(val)

// const converterint=(e)=>parseInt(e)
// let  num=['1','3','4','5'].map(converterint)
// console.log(num)


// const numeros = [1,2,3,4,5]


// const dobro = numeros.map((numero => numero + numero))
// const quadrado= dobro.map((numero => numero * numero))


// console.log(quadrado)
// console.log(numeros)


// const numeros = [5,7,10,20,8,9]

// const impares = numeros.map((impares=>impares % 2 ==1 ? + impares + ' impar ': + impares + ' par '))

// console.log(impares)


// Quadrado dos numeros

const numeros = [4,5,6,7,8];
const calculo =numeros.map((quadrado=>quadrado * quadrado))
console.log(calculo)


//converter em dolar
const dolar = [10,20,30,40]
const converter = dolar.map((real=> real * 5))
console.log(converter)

//prefixar frase
const nome = ['Maria','Joao','Predro']
const frase = nome.map((nome => ' Ola '+ nome +'!'))
console.log(frase)


//retornar apenas nome de um array de objetos com nome e idade

const pessoas = [
    {nome:'joao',idade:18},
    {nome:'tiago',idade:45},
    {nome:'Maria',idade:18},
    {nome:'Roberto',idade:33},
]

const nomes = pessoas.map((pessoa =>pessoa.nome))
console.log