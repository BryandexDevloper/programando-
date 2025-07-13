#include <stdio.h>



// int main(){
    
//     for(int i = 1; i <= 10; i++){
//         for(int j = 1; j <= 10; j++){

//             int soma = i * j ;

//             printf("%d X %d = %d\n", i, j, soma);// %d apresenta um numero inteiro 
//         }

        
//        printf("\n");
        
//     }

   

//     return 0;
// }

int somar(int x,int y){
    return x + y;
}


 


int main(){

    int alunos [5] = {};
        int resultado = somar(22,40);

        printf("Resultado: %d\n", resultado);

    return 0;
}