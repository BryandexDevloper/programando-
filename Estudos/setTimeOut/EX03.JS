const numero = document.querySelector("#numero")

let valor = 0

function atualiza(){
numero.textContent=valor
}


const intervalo = setInterval(()=>{
    if(valor < 10){
        valor++
        atualiza()
    }else{
        clearTimeout(intervalo)
    }
},1000)