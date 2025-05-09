const prompt = require('prompt-sync')();

let vetor = [1,2,3,4]
const soma = (vetor)=>{

    let resultado = 0;
    for(let i = 0; i < vetor.length;i++){
        resultado = resultado + vetor[i]
    }
    return resultado
}

console.log(soma(vetor))






//FiltrarNumeros     

let vet1 = [];

for(let i = 0; i<= 10;i++){
   vet1.push(i)    
}

console.log(vet1)


const FiltrarNumeros = (vet1)=>{
    let impares = 0;
    let pares = 0;
    let vet2 = [...vet1];
    for(let i = 0; i < vet2.length;i++){

        if(vet2[i] % 2 == 1){
            impares++
        }else{
            pares++
        }
    }


    return ' Impares ' + impares+ ' Pares '+ pares

}

console.log(FiltrarNumeros(vet1))