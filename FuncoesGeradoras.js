// function* perguntas(){
//     const nome = yield  
//     const sport = yield 
    
//     return "seu nome e "+nome+" seu sport favorito e: "+sport
// }


// const itp= perguntas()
// console.log(itp.next().value)
// console.log(itp.next("Bryan").value)
// console.log(itp.next("Futebol").value)


// function* contador(){
//     let i = 0;
//     while(true){
//         yield i++
//     }
// }

// const itc=contador()
// for(let i =0; i < 10; i++){
//     console.log(itc.next().value)
// }



// 1. itp.next() → Retorna "Qual seu nome" (pausa)
// 2. itp.next("Bryan") → Retorna "Qual seu sport favorito?" (pausa)
// 3. itp.next("Futebol") → Retorna "Seu nome é Bryan e seu sport favorito é: Futebol" (termina)


// function* cont(n){
   
    
//    for(let res = 1; res <= n; res++){
//            yield  n * res
//    }

// }

//     const ct = cont(3)
//     console.log(ct.next().value)
//     console.log(ct.next().value)
//     console.log(ct.next().value)


// const Fibonacci = (num1, num2) => {
//     const sequencia = [num1, num2];
  
//     for (let i = 2; i <= 10; i++) {
//       let soma = num1 + num2;
//       sequencia.push(soma);
//       num1 = num2;
//       num2 = soma;
//     }
  
//     return sequencia;
//   }
  
//   console.log(Fibonacci(1, 2));
  


function* exemplo(){
    const x = yield 'Digite um numero: ';
    const y = yield 'Digite outro numero: '
    yield x + y

    const a = yield 'Multipicando digite um numero '
    const b = yield 'Multiplicando digite outro numero '
    yield a * b
    yield a * b + y + x
}


const recebedora = exemplo();



console.log(recebedora.next().value)//inicia o encremento 
console.log(recebedora.next(5).value)// recebe  x = 5 e pega o valor do y
console.log(recebedora.next(10).value)// soma x + y e retorna a soma
console.log(recebedora.next().value)//inicia o encremento
console.log(recebedora.next(3).value)//recebe o valor de a
console.log(recebedora.next(3).value)//recebe o valor de b e solta o resultado
console.log(recebedora.next().value)// aqui pegamos todos os valores obtidos das var a b  x e y e somamos


