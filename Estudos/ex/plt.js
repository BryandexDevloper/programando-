const prompt = require('prompt-sync')();


console.log("Jogo pedra papel tesoura")

const opcoes = ["pedra", "papel", "tesoura"]
let escolha = prompt(" escolha Pedra Papel tesoura... ").toLocaleLowerCase()
console.log()


const numero_aleatorio = Math.floor(Math.random() * opcoes.length)
const escolha_maquina = opcoes[numero_aleatorio]

//// condiçao if pessoa
if (escolha === "pedra" && escolha_maquina === "tesoura") {
    console.log(" Voce ganhou ")
    console.log(" Maquina escolheu " + escolha_maquina)
    console.log(" Você escolheu " + escolha)
} else if (escolha === "papel" && escolha_maquina === "pedra") {
    console.log(" Voce ganhou ")
    console.log(" Maquina escolheu " + escolha_maquina)
    console.log(" Você escolheu " + escolha)
} else if (escolha === "tesoura" && escolha_maquina === "papel") {
    console.log(" Voce ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha === "pedra" && escolha_maquina === 'papel') {
    console.log("Maquina ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha === "papel" && escolha_maquina === "pedra") {
    console.log("Maquina ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)

    //condiçao if maquina
} else if (escolha_maquina === "pedra" && escolha === "tesoura") {
    console.log("Maquina ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha_maquina === "papel" && escolha === "pedra") {
    console.log("Maquina ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha_maquina === "tesoura" && escolha === "papel") {
    console.log("Maquina ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha_maquina === "pedra" && escolha === 'papel') {
    console.log("Voce  ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
} else if (escolha_maquina === "papel" && escolha === "pedra") {
    console.log("Voce  ganhou ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
}else if(escolha === escolha_maquina){
    console.log(" Empate ")
    console.log("Maquina escolheu " + escolha_maquina)
    console.log("Você escolheu " + escolha)
}






// pedra < papel
// pedra > tesoura //
// papel > pedra
// tesoura > papel
// papel > pedra
