

const prompt = require('prompt-sync')();


//inicia no numero que voce colocar e verifica quantos numeros pares e impares

// function ParImpar (inicial,final){

//     let pares = 0;
//     let impares = 0;
//     for(inicial; inicial <= final; inicial++){

//         // if(inicial % 2 == 0 ){
//         //     pares++
//         // }else{
//         //     impares++
//         // }


//         inicial % 2 == 0? pares++: impares++



//     }

//     return"Numeros pares: "+ pares+" Numeros impares: "+impares
// }


// let inicial = parseFloat(prompt("Digite um numero: " ));
// let final = parseFloat(prompt("Digite outro numero: "));
// console.log(ParImpar(inicial,final))


//soma de array

// function somarray (soma){
    
//     let res = 0;
//     for(let i = 0; i < soma.length; i++){
    
//         res = res + soma[i]
//     }
   
    
//     return res
//  }    
//     let soma = [3,5,6,7];
//     console.log(somarray(soma))

// "Fizz" se o número for divisível por 3.

// "Buzz" se o número for divisível por 5.

// "FizzBuzz" se o número for divisível por ambos.

// O próprio número se não for divisível por nenhum deles.


// function FizzBuzz(num){

// if(num == 0){
//     return num
// }

// if(num % 3 == 0){
//     return "Fizz"
// }else if(num % 5 == 0){
//     return "Buzz"
// }else if(num % 3 == 0 && num % 5 == 0){
//     return "FizzBuzz"
// }else{
//     return num
// }

// }



// let num = parseFloat(prompt("Digite um numero"))
// console.log(FizzBuzz(num))


//calcular media de alunos

// let media = [10,8,5]

// function CalcularMedia(media){

//     let soma = 0;
//     for(let i = 0; i < media.length; i++){
//         soma = soma + media[i]
//     }

//     return soma / media.length
// }


// console.log(CalcularMedia(media))



// function VerIdade (nome,idade){
//     if(idade >= 18){
//         return nome + " Ja e maior de idade com " + idade + " anos "
//     }else{
//         return nome + " Ainda nao e maior de idade com " + idade + " anos "
//     }
// }

// let nome = prompt("Digite seu nome: ")
// let idade = parseFloat(prompt("Digite sau idade: "))

// console.log(VerIdade(nome,idade))

// DOBRAR NUMEROS DE ARRAY


// let nums = [2,4,6];


// let soma = nums =>{



//     return nums.map(num => num * 2);





// }


// console.log(soma(nums))

// let parImapar = num => num % 2 == 0?"Par":"impar"

// let num = parseInt(prompt("Digite um numero: "))

// console.log(parImapar(num))

let entrada = [2,3,4]
let somaQuadrado = vetor=>{
    return entrada.map(res =>res * 2)
 
}

console.log(somaQuadrado(entrada))