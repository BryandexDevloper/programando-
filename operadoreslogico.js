// && -> end e
// || -> or ou
// !  -> not não

//tabela verdade

//     and       &&        e         
// v     v     v   |  1     1    1
// v     f     f   |  1     0    0
// f     v     f   |  0     1    0
// f     f     f   |  0     0    0
                
//     or        ||        ou  
// v    v     v    |   1     1    1
// v    f     v    |   1     0    1
// f    v     v    |   0     1    1
// f    f     f    |   0     0    0


let n1,n2,n3,n4

n1=10
n2=5
n3=15
n4=2

console.log((n1 > n2)&&(n1 > n3))

if(n1 > n2){
    console.log(n1 + " maior que " + n2)
}else{
    console.log(n1 + " menor que" + n2)
}