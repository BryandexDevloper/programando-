let numero = 0 


let temporizador = setInterval(()=>{
    if(numero < 10){
        numero++
        document.body.textContent=numero
        console.log(numero)
    }else{
        console.log("fIM DO INTERVALO")
        clearTimeout(temporizador)
    }
},1000)