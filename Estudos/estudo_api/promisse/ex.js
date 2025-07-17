 let resltado = true


let promessa = new Promise((resolve, reject) => {
    
   
    let tempo = 3000
    setTimeout(()=>{
        if(resltado){
            resolve("Deu tudo certo ")
        }else{
            reject("deu tudo errado")
        }
    },tempo)
    

})


promessa.then((retorno)=>{

    if(retorno){
        document.body.textContent="Deu tudo certo pode acessar"
    }
})

promessa.catch((retorno)=>{
    if(retorno){
        document.body.textContent="Deu errado acesso bloqueado..."
    }
})

document.body.textContent="Processando........"


