#include <stdio.h>
#include <stdlib.h>
#include <string.h>


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


 
int somarNotas( double al1 , double al2 , double al3 , double al4 ,double al5){
    return (al1 + al2 + al3 + al4 + al5) / 5;
}






int main(){
    
        // int resultado = somarNotas(10,4,7.9,9.0,2.5);

        // printf("Resultado: %d\n", resultado);

    int num1 = 130;

    char username[100] = "";
    char email[400] = "";

    
    while(strcmp(username,"") == 0){
        printf("Digite um nome: ");
        scanf("%s",username);   
    }
     while(strcmp(email,"") == 0){
        
        printf("Digite um email: ");
        scanf("%s",email);
    }  
    
    printf("\n usuario: %s email: %s",username,email);

    return EXIT_SUCCESS;
}