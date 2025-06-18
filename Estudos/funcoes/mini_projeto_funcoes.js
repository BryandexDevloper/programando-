const prompt = require("prompt-sync")();


function imparPar(){

console.log("Conferir se o numero e impar ou par")
let numero = parseFloat(prompt("Digite um numero: "))
let soma = ((numero % 2 == 0)?"par":"impar")
console.log(soma)

}

function Tabuada(){

console.log("Tabuada")
let numero = parseFloat(prompt("Digite um numero para ver a tabuada"))

for(let i = 0; i <= 10; i++){

    let soma = numero * i


    console.log(numero + " X " + i +" = "+ soma)

}
}

function Media_alunos(){

    let nome = []
    let nota1 = []
    let nota2 = []
    let aprovado = 0;
    let recupera = 0;
    let reprovado =0;
    let media_sala;

    console.log("Media de alunos")

    let numero = parseFloat(prompt("Quantos alunos seriam?: "));
    for(let i = 0; i < numero; i++){

        nome.push(prompt("Qual o nome do aluno: "));
        nota1.push(parseFloat(prompt("E qual a primeira nota do aluno: " + nome[i])));
        nota2.push(parseFloat(prompt("Qual a segunda nota do aluno: "+ nome[i])));

        let media = (nota1[i] + nota2[i]) / 2
        
        if(media >= 7){
            console.log("Aluno " + nome[i] + " aprovado com media de: " + media)
            aprovado++;
        }else if(media >= 5){
            console.log("Aluno "+ nome[i]+ "em recuperaçao com media de " + media)
             recupera++;
        }else{
            console.log("Aluno "+ nome[i]+ " reprovado com media de:  " + media)
            reprovado++;
        }

        

    }

    console.log("Resumo Quantidade de alunos = "+ numero+" Numero de alunos aprovados: " + aprovado + " Numero de alunos em recuperação: "+ recupera+" Numero de alunos reprovados: "+ reprovado + "Media da sala: "+ media_sala)
    media_sala= (nota1 + nota2)/ numero
}


let parar = "nao"
while(parar != "sim"){


let modos = [Media_alunos, Tabuada, imparPar];
console.log("1** Conferir media dos alunos")
console.log("2** Tabuada")
console.log("3** Conferir se o numero e impar ou par")
let modo_num = parseFloat(prompt("Escolha o modo que deseja acessar: "))
 if(modo_num >= 1 && modo_num <= modos.length){
    modos[modo_num - 1]();
 }else{
    console.log("Modo Invalido")
 }

 parar=prompt(" Deseja parar?: ")

}