// const soma=function (...valores){
//     let  i = 0;
//     let res = 0;
//     for(v of valores){ 
        
//         res = res + v

//     }
//     return res
// }
        

// console.log(soma(10,5,3,7,2))


// const soma = function(...valores){
//      let res = 0;
     
//      for(let i = 0; i < valores.length; i++){
//         res = res + valores[i]
//      }

//      return res;
// }


// console.log(soma(1,2,3))


const soma = new Function("v1", "v2","return (v1+v2) % 2 == 0 ? 'par': 'impar'") //função constutora anonima

console.log(soma(10,5))