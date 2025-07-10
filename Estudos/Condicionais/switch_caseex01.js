

const continer = document.querySelector(".container")

continer.addEventListener("click",()=>{
    

let pergunta = parseFloat(prompt("digite um numero"))
switch(pergunta){
    case 1:
        alert("SEGUNDA")
    break

    case 2:
        alert("TERÇA")
    break

    case 3:
        alert("quarta")
    break

    case 4:
        alert("quita")
    break

    case 5:
        alert("sexta")
    break;

    case 6:
        alert("sabado")
    break;

    case 7:
        alert("domingo")
    break;
}
})


alert ("Calculadora com switch case")

let operacao = parseFloat(prompt("Digite o numero da operacao"))
let num1 = parseFloat(prompt("Digite um numero"))
let num2 = parseFloat(prompt("Digite mais um numero"))


switch(operacao){
    case 1 :
        alert(num1 + num2)
    break;

    case 2: 
        alert(num1 - num2)
    break;

    case 3:
        alert(num1 * num2)
    break;

    case 4:
        alert(num1 / num2)
    break;
}