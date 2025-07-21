//  let resltado = false


// let promessa = new Promise((resolve, reject) => {
    
   
//     let tempo = 3000
//     setTimeout(()=>{
//         if(resltado){
//             resolve("Deu tudo certo ")
//         }else{
//             reject("deu tudo errado")
//         }
//     },tempo)
    

// })


// promessa.then((retorno)=>{

//     if(retorno){
//         document.body.textContent=retorno
//     }
// })

// promessa.catch((retorno)=>{
//     if(retorno){
//         document.body.textContent=retorno
//     }
// })

// document.body.textContent="Processando........"




const container = document.querySelector(".container")
const btn_fechar = document.querySelector(".btn_fechar")
const container_2 = document.querySelector(".container_2")
container.style.display = "none"

let resultado = false


container_2.addEventListener("click",()=>{
    resultado = true

   

let promessas = new Promise((resolv,reject)=>{

        if(resultado){
            resolv("Resuldo ficou true")
        }else{
            reject("resultado esta false")
        }
    

})




promessas.then((res)=>{
    console.log(res)
    container.style.display="flex"
})


promessas.catch((res)=>{
    console.log(res)
})


})