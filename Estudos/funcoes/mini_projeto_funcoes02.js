const prompt = require("prompt-sync")();

function somar(){


    let terminar = "nao"
    while(terminar != "sim"){
    let num1=parseFloat(prompt("Digite um numero: "));
    let num2=parseFloat(prompt("Digite outro numero: "));
    let soma = num1 + num2 
    console.log("O resultado e: " + soma)
    terminar = (prompt("Deseja terminar?: [Sim] | [Não]"));
    console.log("Fim do programa")
    }
}

function media_alunos(){

let terminar = "nao"
while(terminar != "sim"){
let repita = parseFloat(prompt("Digite quantos alunos seriam"));
let nome_aluno = [];
let nota1=[];
let nota2=[];
let nota3=[];
for(let i = 0; i < repita; i++){

nome_aluno.push(prompt("Digite o nome do aluno"));
nota1.push(parseFloat(prompt("Digite a nota do primeiro bimestre: ")));
nota2.push(parseFloat(prompt("Digite a nota do segundo bimestre: ")));
nota3.push(parseFloat(prompt("Digite a nota do terceiro bimestre: ")));

let media = (nota1[i] + nota2[i] + nota3[i]) / 3;


if(media >= 7){
    console.log("Aluno "+nome_aluno[i]+" aprovado com media de: " + media)
}else if(media >= 5 && media <= 6.9){
    console.log("Aluno "+nome_aluno[i]+" em recuperação com media de: " + media)
}else{
    console.log("Aluno "+nome_aluno[i]+" reprovado com media de: " + media)
}

}



terminar = (prompt("Deseja terminar?: [Sim] | [Não]"));
console.log("Fim do programa")
}
}


function parimpar(){
    let parar="nao"

    while(parar != "sim"){

    

    let n = parseFloat(prompt("Digite um numero"));
    let res=(n%2 == 0)?"Par":"impar"
    console.log(res)

    parar = prompt("Deseja parar?: [sim] | [Não]")
    }
    console.log("Fim do programa")
}

function fatorial(){
    let parar= "nao"

    while(parar != "sim"){
    let fatorial = 1;
    let numero = parseFloat(prompt("Digite o numero desejado"));
    for(let i = 1;i <= numero; i++){
        fatorial = fatorial * i
        console.log(fatorial)

    }

    parar=prompt("Deseja parar?: [Sim] | [Não]")
    console.log("Fim do programa")
    }
}

 let sair = "nao"
    while( sair != "sim"){

    

    console.log()
    console.log(" Oque deseja executar?: ")
    console.log()
    console.log(" [1] Somar dois números")
    console.log(" [2] Calcular média de três notas")
    console.log(" [3] Verificar se o número é par ou ímpar")
    console.log(" [4] Calcular o fatorial de um número")
    console.log(" [5] Sair do programa ")
    console.log()
    let escolha = parseFloat(prompt("Digite aqui"));
   if(escolha == 1){
    somar()
   }else if(escolha == 2){
    media_alunos()
   }else if(escolha == 3){
    parimpar()
   }else if(escolha == 4){
    fatorial()
   }else{
    sair = "sim"
   }

    


    }