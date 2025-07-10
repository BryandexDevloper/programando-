const proximo = document.querySelector(".proximo")


let valor = 300

proximo.addEventListener("click",()=>{

    localStorage.setItem("valor",valor)
    setTimeout(()=>{
        window.location.href="proximo.html"
    },5000)

})