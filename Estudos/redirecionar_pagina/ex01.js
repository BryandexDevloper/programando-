


const container = document.querySelector(".container")
let valor = 200

container.addEventListener("click",()=>{
    
    window.location.href="proxima_pagina.html"
    localStorage.setItem("valor",valor)
    
})

