const prompt = require('prompt-sync')();
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// let numero = 10;

// while(numero >= 1){
// numero--


// }
// console.log(numero)

// let soma = 0
// let numero = parseFloat(prompt("Digite um numero"))
// if(numero % 2 == 0){
//     for(let i = 0; i <= numero; i++ ){
//         if(i % 2 == 0){
//             soma = soma + i
//         }
//     }

//     console.log(soma)
// }else{
//     console.log("Esse numero nao e par")
// }


// let fatorial = 1;

// let numero = parseFloat(prompt("Digite um numero"))
// for(let i = 1; i <= numero; i++){
//     fatorial = fatorial * i
//     console.log(numero +" X " +i+" = "+ fatorial+"!")
// }



// function saudacao(nome,sobrenome){
//     console.log("Ola "+ nome +"  "+ sobrenome + " seja bem vindo/a ")
// }

// let nome = prompt("Digite seu primeiro nome: ");
// let sobrenome = prompt("Digite seu sobrenome: ");

// saudacao(nome,sobrenome)

// function fatorial (numero){

// let fatorial = 1;

// for(let i = 1; i <= numero; i++){
//     fatorial = fatorial * i


// }
//         console.log(" o fatorial de  "+ numero+ " é "+ fatorial)
// }
// let numero = parseInt(prompt("Digite o numro que fatoria"))
// fatorial(numero)

let parar = "nao";
let escolha;

while(parar != "sim"){

    console.log("            Sistema de Loja")
    console.log("Digite o numero da ação que deseja realizar")
    console.log("[1] Calcular o desconto de um produto")
    console.log("[2] Verificar se o numero é par ou impar")
    console.log("[3] Calcular o fatorial de um numero")
    console.log("[4] Sair do programa")
    escolha = parseFloat(prompt("Digite um numero: "));

    if(escolha == 1){

        let continuar = "sim"
        while(continuar != "nao"){
        let preco = parseFloat(prompt("Digite o preço do produto: "));
        let desc = parseFloat(prompt("Digite o valor do desconto: "));
        let desconto_final = desconto(preco,desc);
        console.log(" o desconto foi de : "+desconto_final)
        continuar = prompt("Deseja continuar?: ")
        }
    }else if(escolha == 2){

        let continuar = "sim"
        while(continuar != "nao"){
        let numero = parseFloat(prompt("Digite um numero para ver se e par ou impar: "));
        console.log(" O "+numero+" é "+ParImpar(numero))
        continuar = prompt("Deseja continuar?: ")    
        }
    }else if(escolha == 3){
        let continuar = "sim"
        while(continuar != "nao"){
        let num = parseFloat(prompt("Digite um numero para ver o fatorial"));
        console.log("O fatorial de "+num+" é "+ Fatoriar(num))
        continuar = prompt("Deseja continuar?: ")
        }
    }else{
        parar = "sim"
    }




    
}


function desconto(preco,desc){
   let divisao = desc / 100
   let multiplicacao = preco * divisao
   return preco - multiplicacao
    
}


function ParImpar (numero){
    return (numero % 2 == 0)?"par":"Impar"
}

function Fatoriar (num){
    let fatorial = 1;
    for(let i = 1; i <= num; i++){ 
        fatorial = fatorial * i  
    }
    return fatorial 
}