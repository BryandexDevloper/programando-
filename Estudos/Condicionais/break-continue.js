 let n=0
 let max=1000
 let pares=0;
 let impares = 0

//  while(n < max){
//     console.log("CFB cursos " + n)

//     if(n >=10){
//         break;
//     }

//     n++
//  }

//  console.log("Fim do programa")



for(let i =n; i <= max;i++){
    console.log("CFB Curos" + i)
    if(i % 2 != 0){
        continue
    } 
    pares++
}

console.log("Fim do programa " + " Numeros pares "+ pares +" Numeros impares "+ impares)