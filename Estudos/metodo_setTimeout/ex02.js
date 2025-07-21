let contador = document.querySelector(".contador")
let numero  = 0

const atualizar_tela=()=>{
    contador.textContent=numero
    
}


let tempo = setInterval(()=>{
if(numero <= 10){
    numero++
    atualizar_tela()
}else{
    clearInterval(tempo)
}
},1000)