const prompt = require('prompt-sync')();




// MENU DE INTERAÇÃO AQUI SÃO OS ALGORITMOS FEITOS 
const menu=()=>{
let continuar = 'sim'
while(continuar != 'nao'){
let escolha
console.log()
console.log()
console.log('Digite o numero da operação')
console.log("[1] Calculadora Avançada")
console.log('[2] Sair')
escolha = parseInt(prompt())

if (escolha == 1){
    Calculadora_avancacada()
}else if (escolha == 2){
    continuar = 'nao'

}


  

}
console.log()
console.log('Saindo...')
console.log()
}




// AQUI E A FUNÇÃO QUE CUIDA DA CACULADORA E SUAS OPÇÕES
function Calculadora_avancacada(){
const numeros = [];
let operacao 
console.log(' Calculadora Avançada ')
console.log(' Digite o numero da operação ')
console.log()
console.log('1* Adição')
console.log('2* Multiplicação ')
console.log('3* Verifique qual o maior numero')
console.log('4* Verifique o dobro do numero')
console.log('5*  Sair')
console.log()
operacao = parseFloat(prompt())




// AQUI SOMA
const somar = (numeros)=>{
    let adicionar_numeros = 'sim'
    while(adicionar_numeros != 'nao'){
        numeros.push(parseFloat(prompt('Digite um numero: ')))
        adicionar_numeros = prompt('Deseja adicionar mais numeros?: [sim] [não] ')
    }
    const somando = numeros.reduce((acumulador,atual)=>{
        return acumulador + atual
    },0)
   console.log(somando)
}


// AQUI MULTIPLICA
const multiplicar= (numeros)=>{
    let adicionar_numeros = 'sim'
    while(adicionar_numeros != 'nao'){
        numeros.push(parseFloat(prompt('Digite um numero: ')))
        adicionar_numeros = prompt('Deseja adicionar mais numeros?: [sim] [não] ')
    }
    const multiplicando = numeros.reduce((acumulador,atual)=>{
        return acumulador * atual
    },1)
    console.log(multiplicando)
}


// AQUI VE QUAL E O MAIOR NUMERO DA LISTA
const Maiordeles = (numeros)=>{
    let adicionar_numeros = 'sim'
    while(adicionar_numeros != 'nao'){
        numeros.push(parseFloat(prompt('Digite um numero: ')))
        adicionar_numeros = prompt('Deseja adicionar mais numeros?: [sim] [não] ')
    }

    const Maior = (numeros)=> {
        
        let maior = numeros[0];

        for(let i = 0; i < numeros.length;i++){
            if(numeros[i] > maior){
                maior = numeros[i]
            }
        }
        return maior
    }
    console.log(Maior(numeros))
}


// AQUI MOSTRA  UM ARRAY COM O DROBRO DOS NUMEROS COLOCADOS
    const Dobro_deles = (numeros)=>{

        let adicionar_numeros = 'sim'
        while(adicionar_numeros != 'nao'){
            numeros.push(parseFloat(prompt('Digite um numero: ')))
            adicionar_numeros = prompt('Deseja adicionar mais numeros?: [sim] [não] ')
        }
        const dobro =numeros.map((num)=>{
            return num * 2
        })
       console.log(dobro)
    }





// AQUI E AS CONDIÇÕES DO MENU DA CALCULADORA
if(operacao == 1){
    somar(numeros)
}else if(operacao == 2){
    multiplicar(numeros)
}else if(operacao == 3){
    Maiordeles(numeros)
}else if(operacao == 4){
    Dobro_deles(numeros)
}

console.log()
console.log()
console.log('Retornando ao menu...')
menu()


}
menu();




