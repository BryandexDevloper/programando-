const prompt = require('prompt-sync')();

// const soma=(...valores)=>{
    
//     const somar = val =>{
//         let res = 0;

//         for(v of val){
//             res = res + v
//         }

//         return res
//     }

//     return somar(valores)
// }

// console.log(soma(10,5,15))


// let num1 = parseInt(prompt("Digite um numero: "));
// let num2 = parseInt(prompt("Digite mais um numero: "));

// const multiplicar = (num1,num2)=>{

//         const calcular = (v1,v2)=>{

//             let resultado = v1 * v2
//             return resultado

//         }


//         return calcular(num1,num2)

// }



// console.log(multiplicar(num1,num2))


// let nome = prompt("Digite seu nome: ")
// const mensagem = nome =>{


//     const saudasao = nome =>{

//         return "Ola "+ nome +" Seja bem vindo"
//     } 


//     return saudasao(nome)
// }
// console.log(mensagem(nome))



// let num1 = parseInt(prompt("Digite um numero: "));
// let num2 = parseInt(prompt("Digite outro valor: "));

// const calculo = (num1, num2) => {

//     // Função para somar
//     const somar = (num1, num2) => {
//         let res_somar = num1 + num2;
//         return res_somar;
//     }

//     // Função para multiplicar (usa o resultado da soma)
//     const multiplicar = (res_somar) => {
//         let multiplicar = res_somar * res_somar;
//         return multiplicar;
//     }

//     // Função para dividir
//     const dividir = (num1, num2) => {
//         let dividir = num1 / num2;
//         return dividir;
//     }

//     // Aqui você chama a função 'somar', passando 'num1' e 'num2' como parâmetros
//     let resultado_soma = somar(num1, num2);

//     // Agora você passa 'resultado_soma' como parâmetro para a função 'multiplicar'
//     let resultado_multiplicar = multiplicar(resultado_soma);

//     // Aqui você chama a função 'dividir', passando 'num1' e 'num2'
//     let resultado_dividir = dividir(num1, num2);

//     // Retorna os resultados das operações
//     return `Soma: ${resultado_soma}, Multiplicação: ${resultado_multiplicar}, Divisão: ${resultado_dividir}`;
// }

// console.log(calculo(num1, num2));


// let num1 = parseInt(prompt("Digite um numero: "));
// let num2 = parseInt(prompt("Digite outro numero: "));


// const calcular = (num1,num2)=>{

//     const somar = (num1,num2)=>{
//         let adicao = num1 + num2
//         return adicao
//     }

//     const multiplicar= (adicao) => {
//     let multi = adicao * adicao
//     return multi
//     }

//     const dividir = (multi)=>{
//         let div = multi /2
//         return div
//     }

//     let resultado_soma = somar(num1,num2)
//     let resultado_multiplicar = multiplicar(resultado_soma)
//     let resultado_dividir = dividir(resultado_multiplicar)


//     return "Soma: "+ resultado_soma + " Multiplicação: "+ resultado_multiplicar+" Divisao: "+resultado_dividir



// }

// console.log(calcular(num1,num2))


// let num1 = parseInt(prompt("Digite um numero: "));
// let num2 = parseInt(prompt("Digite mais um numero: "));
// let num3 = parseInt(prompt("Digite outro numero: "))

// const media = (num1,num2,num3)=>{

//     const dividir = (num1,num2,num3)=>{
//         return  (num1 + num2 + num3) / 3
    
//     }


//     return dividir(num1,num2,num3)

// }

// console.log(media(num1,num2,num3))

// let num1 = parseInt(prompt("Digite um numero: "))
// const Epar = num1 => num1 % 2 == 0?"ePAR":"Eimpar"
// console.log(Epar(num1))

// let num1 = parseInt(prompt("Digite um numero: "))
// const tabuada = num1 =>{
//     let res = "";
//     for(let i = 0; i <= 10; i++){
//         res += num1+" X "+i+" = "+ (num1 * i)
       
//     }


//     return res
// }


// console.log(tabuada(num1))

// let num1 = parseInt(prompt("Digite um numero "))

// const VerificarIdade = num1 =>{
//     if(num1 >= 18){
//         return "Maior idade"
//     }else{
//         return "Menor idade"
//     }
// }

// console.log(VerificarIdade(num1))


let graus = parseInt(prompt("Digite quantos graus seriam: "));

const converter = graus =>{
    let fah = (graus * 1.8) + 32
    return fah +" F* "
}

console.log(converter(graus))