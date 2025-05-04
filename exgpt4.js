// let a = 3


// let soma = (!(a % 2))?"par":"impar"
// console.log(soma)


// let i = 0

// while(i <= 9){
// i++
// console.log(i)
// }


// let tabuada = 7

// for(let i = 1; i <= 10 ; i++){

// let soma = tabuada * i

// console.log(tabuada + " x " + i + " = " + soma)

// }


// let numero = 5;
// let fatorial = 1

// for(let i = 1; i <= numero; i++){


// fatorial = fatorial * i
// console.log(fatorial)

// }
const prompt = require('prompt-sync')();

console.log("Calcular media de alunos")

let notas1  = [];
let notas2 = [];
let nome_alunos = []; 
let soma_notas;


let quantidade_alunos = (prompt("Digite quantos alunos seriam: "));

for(let i = 1; i <= quantidade_alunos; i++){
    
nome_alunos.push(prompt("Digite o nome dos alunos: " + i + " De " + quantidade_alunos));
notas1.push(parseFloat(prompt("E qual a nota do aluno: " + nome_alunos[i - 1])));
notas2.push(parseFloat(prompt("Digite a segunda nota do aluno: " + nome_alunos[i - 1])));


soma_notas = (notas1[i - 1] + notas2[i - 1])/ 2


    if(soma_notas >= 7){
        console.log(nome_alunos[i - 1 ] +"aprovado com media de: "+ soma_notas)
        }else if(soma_notas >= 6){
        console.log(nome_alunos[i - 1 ] +"em recuperação com media de: "+ soma_notas)
        }else{
            console.log(nome_alunos[i - 1 ] +"reprovado com media de: "+ soma_notas)
        }

}


