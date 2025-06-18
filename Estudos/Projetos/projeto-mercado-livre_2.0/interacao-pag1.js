

///interações header
const categoria = document.querySelector("#categoria")
const sublista = document.querySelector(".container-sublista")
const lisublista = document.querySelector(".constainer-informatica")
const container_li_infor = document.querySelector("#container-informatica")


categoria.addEventListener("mouseenter",()=>{
sublista.style.display="flex"
})

sublista.addEventListener("mouseleave",()=>{
    sublista.style.display="none"
})


lisublista.addEventListener("mouseover",()=>{
    container_li_infor.style.display="flex"
})


lisublista.addEventListener("mouseleave",()=>{
    container_li_infor.style.display="none"
})

///carrossel de imagens pagina inicial
const slide_carrossel = document.querySelectorAll(".slide-carrossel")
const input_carrossel = document.querySelectorAll(".carrossel")
const btn_anterior = document.querySelector("#anterior")
const btn_proximo = document.querySelector("#proximo")

let contador = 0

input_carrossel[contador].checked=true
slide_carrossel[contador].classList.add("slide-carrossel-mostrar")



btn_proximo.addEventListener("click",()=>{
    
    input_carrossel[contador].checked=true
    slide_carrossel[contador].classList.remove("slide-carrossel-mostrar")
    contador++
    if(contador >= slide_carrossel.length){
        contador = 0
    }

    slide_carrossel[contador].classList.add("slide-carrossel-mostrar")
})

btn_anterior.addEventListener("click",()=>{
    input_carrossel[contador].checked=true
    slide_carrossel[contador].classList.remove("slide-carrossel-mostrar")
    contador--
    if(contador < 0){
        contador = slide_carrossel.length -1
    }

    slide_carrossel[contador].classList.add("slide-carrossel-mostrar")
})


//carrosel de informações

const container_caixa1 = document.querySelectorAll(".container-caixa1")
const anterior_informacao = document.querySelector(".container-botao-carrossel-informacoes1")
const proximo_informacao = document.querySelector(".container-botao-carrossel-informacoes2")
let contador_informacao = 0


container_caixa1[contador_informacao].classList.add("mostrar-informacoes")
anterior_informacao.style.display="none"

proximo_informacao.addEventListener("click",()=>{
    container_caixa1[contador_informacao].classList.remove("mostrar-informacoes")
    contador_informacao++
    if(contador_informacao >= container_caixa1.length){
        contador_informacao = 0
        anterior_informacao.style.display="flex"
        proximo_informacao.style.display="none"
    }

    container_caixa1[contador_informacao].classList.add("mostrar-informacoes")
})


anterior_informacao.addEventListener("click",()=>{
    container_caixa1[contador_informacao].classList.remove("mostrar-informacoes")
    contador_informacao--
    if(contador_informacao < 0){
        contador_informacao = container_caixa1.length -1
        anterior_informacao.style.display="none"
        proximo_informacao.style.display="flex"
    }

    container_caixa1[contador_informacao].classList.add("mostrar-informacoes")
})

