// let parar="Nao"
// while(parar != "Sim"){








// parar = (prompt("Deseja parar?: "))
// }


let a=5;
let fatorial=1



while( a >= 1 ){// a = 5 > 1 = verdade,a = 4 > 1 = verdade,a = 3 > 1 verdade, a = 2 > 1 verdade , a = 1 >= falso verdade falso|| fim
 

fatorial = fatorial * a //fatorial  comaça em 1 2 4 5 * | x | a =  5 4 3 2 1
 a-- // 5 4 3 2 1    

console.log(fatorial)
}
 

///////////////////////////////////////////////////////////////////
// laço (do while)


do{   //faça
    
//condições,comandos,etc

fatorial = fatorial * fatorial
console.log(fatorial)
a--
}while( a >= 1)