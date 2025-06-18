const prompt = require("prompt-sync")();

let numero_adivinha = 7

console.log("jogo do adivinha ")
console.log("digite um numero ")
let numero_jogador = parseInt(prompt("dIGITE UM NUMERO E VEJA SE ESTA CORRETA "))

while(numero_adivinha != numero_jogador){
    
if(numero_jogador == 1){
    console.log("ta quanse perto")
}else if(numero_jogador == 2){

}

numero_jogador = parseInt(prompt("dIGITE UM NUMERO E VEJA SE ESTA CORRETA "))  

}
console.log("Parabens voce acertou")






