const prompt = require("prompt-sync")();



function menu(){

console.log("[1] JOGO DO ADIVINHA ")
console.log("[2] Calculadora ")
console.log("[3] Fatorial ")
console.log("[4] Sair")

let escolha = parseInt(prompt("Digite o numero da operação: "))


if(escolha == 1){
    jogo()
}else if(escolha == 2){
    
    calculadora()
}else if(escolha == 3){
    fatorial()
}else{
    console.log("Saindo...")
}


}


function jogo(){
    console.log("Jogo do adivinha")
console.log("Digite um numero de 1 a 100 ")
console.log("e veja se acerta qual numero e ? ")

let tentativas = 5
let num_maquina = 54;


while(tentativas >= 0){
    console.log("voce ainda tem "+tentativas+" para acertar ")
    let num_user = parseInt(prompt("Digite um numero: "));

    if(num_user == num_maquina){
        console.log("correto")
        menu()
    }else if(num_user < num_maquina){
        console.log("muito baixo")
    }else{
        console.log("muito alto")
    }

 tentativas --
}
menu()
}


function calculadora(){

    console.log("calculadora simples")
    let num1 = parseInt(prompt("Digite um numero: "))
    let num2 = parseInt(prompt("Digite mais um numero: "))
    let operacao = prompt("Digite o operador de calculo: ")
    let resultado;


    if(operacao == "*"){
        resultado = num1 * num2
    }else if(operacao == "+"){
        resultado = num1 + num2
    }else if(operacao == "-"){
        resultado = num1 - num2
    }else
        resultado = num1 /num2

            console.log(resultado)



menu()

}



function fatorial(){
    let fatorial = 1;
    console.log("VEJA O FATORIAL DO NUMERO DESEJADO")
    let numero = parseInt(prompt("Digite um numero : "))


    for(let i = 1 ; i <= numero; i++){

        fatorial = fatorial*i
    }

    console.log(fatorial)

    menu()

}



menu()