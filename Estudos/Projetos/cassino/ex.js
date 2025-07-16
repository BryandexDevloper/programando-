const prompt = require('prompt-sync')()

let ganhos_possiveis = [0,0,1,1,2,3,5,8,13,0,0,1,1,2,3,5,8,13,200,100,60,30,10,1000,2000]
let valores_ganhos = []

let jogar_de_novo = "s"

while(jogar_de_novo != "n"){
    
console.log("Bem vindo ao tigrinho \n")
console.log("Deposite dinherio na sua conta: ")

let valor_deposito = parseFloat(prompt("Digite quantos deseja depositar"))
while(valor_deposito < 1){
    valor_deposito = parseFloat(prompt("Deposito minimo de 30R$: "))
}

let valor_aposta = parseFloat(prompt("digite o valor da sua aposta: "))


let total_rodadas = parseFloat(prompt("Digite o numero de rodadas precisa ser 1 ou mais "))
while(total_rodadas < 1){
    total_rodadas = parseFloat(prompt("Digite um numero mais que 0: "))
}

for(let i = 1; i <= total_rodadas;i++){

        let id = Math.floor(Math.random() * ganhos_possiveis.length)
        valor_aposta = valor_aposta - valor_aposta
        valores_ganhos.push(ganhos_possiveis[id])

        let soma = total_rodadas * valor_aposta
        valor_deposito = valor_deposito - soma
    

}

jogar_de_novo = prompt('deseja jogar de novo?: [s] [n]')
console.log(valor_deposito,"\n")
console.log(valor_aposta ,"\n")
console.log(valores_ganhos,"\n")
}