
// let guardar_Pecoas = []

// class Cadastro{

//     static GerarCpf(){

//         let cpf = Math.floor(Math.random() * 3000)
        
//         if(guardar_Pecoas.some(res => res.cpf === cpf)){

//             return Cadastro.GerarCpf()
//         }


//         return cpf
       
//     }

//     constructor(name,user,email,phone){

//             this.name = name
//             this.user = user
//             this.email = email
//             this.phone = phone
//             this.cpf = Cadastro.GerarCpf()
//     }
// }





// fetch('https://jsonplaceholder.typicode.com/users')
// .then(resposta => resposta.json())
// .then(dados =>{
// try{


//     dados.forEach((res)=>{

//         let pessoa = new Cadastro(res.name,res.username,res.email,res.phone)
//         guardar_Pecoas.push(pessoa)
//     })

    


// }catch(error){
//     console.log("Descolpe ocorreu um erro" + error)
// }
// })


// console.log(guardar_Pecoas)


for(let i = 0; i <= 25;i++){
    let codito = i + 65
    let letra = String.fromCharCode(codito)
    console.log(letra)
}