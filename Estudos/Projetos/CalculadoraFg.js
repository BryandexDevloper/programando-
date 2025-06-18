const prompt = require('prompt-sync')();

let continuar = "sim"

while(continuar != "nao"){
function* Calculadora(){
    yield '       Calculadora     '
    yield '[1]  Adição'
    yield '[2]  Subtração'
    yield '[3]  Multiplicação'
    yield '[4]  Divisão'
    yield '[5]  Sair'
    const escolha = yield "Digite um numero e escolha a operação "
    if(escolha == 1){
        const resultado = yield* soma()
        yield resultado
    }else if(escolha == 2){
        const resultado =yield* subtrair()
        yield resultado
    }else if(escolha == 3){
        const resultado = yield* multiplicar()
        yield resultado
    }else if(escolha == 4){
        const reultado = yield* divisao()
        yield reultado
    }else
        yield 'Saindo...'

    


    function* soma(){
        let num1 = parseInt(prompt("Digite um numero: "));
        let num2 = parseInt(prompt("Digite mais um numero: "));
    
        return num1 +' + '+ num2 +' resultado: '+ ( num1 + num2 )
    }

    function* subtrair(){
        let num1 = parseInt(prompt("Digite um numero: "));
        let num2 = parseInt(prompt("Digite mais um numero: "));
        return num1 +' - '+ num2 +' resultado: '+ ( num1 - num2 )
    }

    function* multiplicar(){
        let num1 = parseInt(prompt("Digite um numero: "));
        let num2 = parseInt(prompt("Digite mais um numero: "));
        return num1 +' X '+ num2 +' resultado: '+ ( num1 * num2 )
    }

    function* divisao(){
        let num1 = parseInt(prompt("Digite um numero: "));
        let num2 = parseInt(prompt("Digite mais um numero: "));
        return num1 +' / '+ num2 +' resultado: '+ ( num1 / num2 )
    }



}

const menu = Calculadora();
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next().value)
console.log(menu.next(parseInt(prompt())).value)
         

continuar = prompt("Deseja continuar?: [Sim] | [Nao] ")
}

