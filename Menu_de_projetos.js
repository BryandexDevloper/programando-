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
console.log('[2] Previsão de chuva')
console.log("[3] Sair")
escolha = parseInt(prompt())

if (escolha == 1){
    Calculadora_avancacada()
}else if (escolha == 2){
    Formula_Tetens()
}else if (escolha == 3){
    continuar = "nao"
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




function Formula_Tetens(){

const a = 7.5
const b = 237.3
let T ;
let Pressao;
let probabilidade_chuva = ''


T = parseInt(prompt("Digite a sua temperatura: "))
Pressao =parseInt(prompt("Digite a umidade relativa (UR %): "))

const expressao_inicial=(furm_a,temperatura)=>{

    let res = furm_a * temperatura
    return res

}

const adicao_constante_B=(furm_b,temperatura)=>{
    let soma = furm_b + temperatura
    return soma
}

const Calculo_Razao=(num1,num2)=>{
    let divisao = num1 / num2
    return divisao
}


const Potencia=(num1)=>{
    let res = 10**num1
    return res
}

const hPa = (num1)=>{
    let res = 6.11 * num1

    return res
}


const PressaoAR = (num1,num2)=>{
    let res = (num1 / 100)*num2
    return res
}

const pop = (num1,num2)=>{
  let res = (num1 / num2)*100
  return res
}



let resultado1 = expressao_inicial (a,T);
let resultado2 = adicao_constante_B(b ,T )
let resultado3 = Calculo_Razao(resultado1,resultado2)
let resultado4 = Potencia(resultado3)
let resultado5 = hPa(resultado4)
let resultado6 = PressaoAR(Pressao,resultado5)
let calculo_final = pop(resultado6,resultado5)


if(calculo_final >= 0 && calculo_final  <= 20){
        probabilidade_chuva = ' Sem probabilidade de chuva. '
}else if(calculo_final >= 21 && calculo_final <= 40){
        probabilidade_chuva = ' Pouca chance de chuva .'
}else if(calculo_final >= 41 && calculo_final <= 60){
        probabilidade_chuva = ' Chance moderada de chuva. ' 
}else if(calculo_final >= 61 && calculo_final <= 80){
        probabilidade_chuva = ' Alta chance de chuva.'
}else if (calculo_final >= 81&& calculo_final <= 100){
        probabilidade_chuva = ' Chuva praticamente garantida.'
} 

console.log(calculo_final.toFixed(2) + '% - ' + probabilidade_chuva);



menu()

}



menu();




