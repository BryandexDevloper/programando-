const anual = document.querySelector(".plano1")
const mensal = document.querySelector(".plano2")
const mudar = document.querySelector("#anual")
const mudarr = document.querySelector("#mensal")
const anuncio_box = document.querySelector(".anuncio-box")
const anuncio_box2 = document.querySelector(".anuncio-box2")
const checkbox = document.querySelector(".background")
const checkbox2 = document.querySelector(".background2")
const digital=document.querySelector(".digital")
const btn_google=document.querySelector(".btn-google")
const btn_assinar=document.querySelector(".btn-assinar")


anual.addEventListener("click",()=>{
    mudar.style.backgroundColor ="rgb(194, 209, 217)"
    mudar.style.display="flex"
    mudarr.style.display="none"
    
})


mensal.addEventListener("click",()=>{
    mudar.style.display="none"
    mudarr.style.display="flex"
    mudarr.style.backgroundColor="rgb(221, 209, 195)"
})


anuncio_box.addEventListener("click",()=>{
    anuncio_box.style.border="5px solid red"
    checkbox.style.display="block"
     anuncio_box2.style.border="none"
    checkbox2.style.display="none"
    digital.style.display="block"
    btn_google.style.display="block"
    btn_assinar.style.width="200px"
    

})


anuncio_box2.addEventListener("click",()=>{
    anuncio_box2.style.border="5px solid red"
    checkbox2.style.display="block"
    anuncio_box.style.border="none"
    checkbox.style.display="none"
    digital.style.display="none"
    btn_google.style.display="none"
    btn_assinar.style.width="100%"



})