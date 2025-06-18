 
 const objs=documento.getElementsbytagname("div")
 let num=[10,20,30,40,50]


 for(n of num){
    console.log(n)
 }

 for(n in num){
    console.log(num[n])
 }


//  for(let i=0; i < num.length;i++){
//     console.log(num[i])
//  }

// for in
// const frutas = ['maçã', 'banana', 'uva'];

// for (let i in frutas) {
//     console.log(i);           // 0, 1, 2 (índices como strings)
//     console.log(frutas[i]);   // maçã, banana, uva
// }


// for (let fruta of frutas) {
//     console.log(fruta);  // maçã, banana, uva
// }


// 🧠 Resumo rápido:
// Estrutura	Percorre...	Usado com...
// for...in	    Índices ou chaves	Objetos e arrays
// for...of	    Valores dos elementos	Arrays, strings, iteráveis