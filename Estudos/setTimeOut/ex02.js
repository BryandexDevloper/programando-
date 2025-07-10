const container = document.querySelector(".container")
const btn_cancelar = document.querySelector(".cancelar")

 
container.addEventListener("click",()=>{
    console.log("Voce sera desconectado em 5s")

let id = setTimeout(()=>{
        console.log("Desconectado")
    },5000)

    
btn_cancelar.addEventListener("click",()=>{
        clearTimeout(id)
    })

})

