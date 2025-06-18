const titulo_opc1 = document.querySelector(".titulo-opc1")
const container_infos = document.querySelector(".container-comprar")
const nav = document.querySelector(".categoria")
const btn_selct = document.querySelector(".container-select")
const btn_selec_opc = document.querySelector(".container-opcoes-select")
const iphone =document.querySelector("#iphone")
const iphone1 =document.querySelector("#iphone1")
const iphone2 =document.querySelector("#iphone2")
const iphone3 =document.querySelector("#iphone3")
const iphone4 =document.querySelector("#iphone4")
const sumir = document.querySelector("#sumirr")
const nome =document.querySelector("#nome")





titulo_opc1.addEventListener("mouseover",()=>{

container_infos.style.display="flex"
nav.style.display="none"


})


container_infos.addEventListener("mouseleave",()=>{

container_infos.style.display="none"
nav.style.display="flex"

})

// APARTIR DAQUI COLOCAR UM TROCADOR DE FOTOS QUANDO TROCAR O IPHONE SELECIONADO !!!!

btn_selct.addEventListener("click",()=>{
    btn_selct.style.border="3px solid #06c"
    btn_selec_opc.style.display="flex"
    sumir.style.display="none"
})

btn_selec_opc.addEventListener("mouseleave",()=>{
    btn_selec_opc.style.display="none"
    btn_selct.style.border="1px solid #6e6e73"
    sumir.style.display="flex"
})


iphone1.addEventListener("click",()=>{
    iphone.innerHTML="iphone 16 pro max"
    nome.innerHTML="iphone 16 pro max"
})



iphone2.addEventListener("click",()=>{
    iphone.innerHTML="Iphone 16 plus"
    nome.innerHTML="iphone 16 plus"
})

iphone3.addEventListener("click",()=>{
    iphone.innerHTML="Iphone pro"
    nome.innerHTML="iphone 16 pro "
})


iphone4.addEventListener("click",()=>{
    iphone.innerHTML="Iphone 16"
    nome.innerHTML="iphone 16 "
})

const box_cores = document.querySelector(".box")

//menu de cores 

const  c1 =document.querySelector(".c1")
const  c2 = document.querySelector(".c2")
const  c3 =document.querySelector(".c3")
const  c4 =document.querySelector(".c4")
const  c5 = document.querySelector(".c5")
const  c6 =document.querySelector(".c6")
const  c7 =document.querySelector(".c7")
const  c8 =document.querySelector(".c8")
const  c9 =document.querySelector(".c9")
const  c10 =document.querySelector(".c10")
const  c11 =document.querySelector(".c11")
const  c12 =document.querySelector(".c12")
const cor_selecionada=document.querySelector("#cor-selecinada")


cor_selecionada.style.fontWeight="700"



c1.addEventListener("mouseover",()=>{
    c1.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Rosa-salmão"
})


c1.addEventListener("mouseleave",()=>{
    c1.style.border="none"
})


c2.addEventListener("mouseover",()=>{
    c2.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Pessego"
})


c2.addEventListener("mouseleave",()=>{
    c2.style.border="none"
})


c3.addEventListener("mouseover",()=>{
    c3.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Amarelo-bebe"
})


c3.addEventListener("mouseleave",()=>{
    c3.style.border="none"
})


c4.addEventListener("mouseover",()=>{
    c4.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Verde-claro"
})


c4.addEventListener("mouseleave",()=>{
    c4.style.border="none"
})


c5.addEventListener("mouseover",()=>{
    c5.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Verde-neon"
})


c5.addEventListener("mouseleave",()=>{
    c5.style.border="none"
})


c6.addEventListener("mouseover",()=>{
    c6.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Verde-clarinho"
})


c6.addEventListener("mouseleave",()=>{
    c6.style.border="none"
})


c7.addEventListener("mouseover",()=>{
    c7.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Azul-bebe"
})


c7.addEventListener("mouseleave",()=>{
    c7.style.border="none"
})


c8.addEventListener("mouseover",()=>{
    c8.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Azul"
})


c8.addEventListener("mouseleave",()=>{
    c8.style.border="none"
})


c9.addEventListener("mouseover",()=>{
    c9.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Roxo"
})


c9.addEventListener("mouseleave",()=>{
    c9.style.border="none"
})


c10.addEventListener("mouseover",()=>{
    cor_selecionada.innerHTML="Roxo-claro"
    c10.style.border="2px solid #06c"
})


c10.addEventListener("mouseleave",()=>{
    c10.style.border="none"
})


c11.addEventListener("mouseover",()=>{
    c11.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Rosa-vibrante"
})


c11.addEventListener("mouseleave",()=>{
    c11.style.border="none"
})


c12.addEventListener("mouseover",()=>{
    c12.style.border="2px solid #06c"
    cor_selecionada.innerHTML="Rosa-bebe"
})


c12.addEventListener("mouseleave",()=>{
    c12.style.border="none"
})


//////////////////////


const cor = document.querySelector("#cor")


c1.addEventListener("click", () => {
    cor.innerHTML="Rosa-vibrante"
})

c2.addEventListener("click", () => {
    cor.innerHTML="pessego"
})

c3.addEventListener("click", () => {
    cor.innerHTML="Amarelo-bebe"
})

c4.addEventListener("click", () => {
    cor.innerHTML="Verde-claro"
})

c5.addEventListener("click", () => {
    cor.innerHTML="Verde-neon"
})

c6.addEventListener("click", () => {
    cor.innerHTML="Verde-clarinho"
})

c7.addEventListener("click", () => {
    cor.innerHTML="Azul-bebe"
})

c8.addEventListener("click", () => {
    cor.innerHTML="Azul"
})

c9.addEventListener("click", () => {
    cor.innerHTML="Roxo"
})

c10.addEventListener("click", () => {
    cor.innerHTML="Roxo-claro"
})

c11.addEventListener("click", () => {
    cor.innerHTML="Rosa-vibrante"
})

c12.addEventListener("click", () => {
    cor.innerHTML="Rosa-bebe"
})



/// imgens


const img_grande = document.querySelector("#imagen-grande")
const img1 = document.querySelector("#imagem-pequena1")
const img2 = document.querySelector("#imagem-pequena2")
const img3 = document.querySelector("#imagem-pequena3")
const img4 = document.querySelector("#imagem-pequena4")
const img5 = document.querySelector("#imagem-pequena5")
const div_img = document.querySelector(".foto-iphone")
const imgs = [img1,img2,img3,img4,img5]




img1.addEventListener("mouseover",()=>{
    
   
    img_grande.setAttribute("src","https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGV4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=d29Oa01OMDQ4L1JLNUlsVWZYVDJ2d2tuVHYzMERCZURia3c5SzJFOTlPaS8rWGUyU21iRDV5ZGhvZ25zREs3WnQ5c1FKTysrU2V5cFVOOW5JM2x1WGc")

})



img2.addEventListener("mouseover",()=>{
    
   
    img_grande.setAttribute("src","https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGV4_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=L0t2dlZJMjFWcnJzNUlkRjRYTTduMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTRMNEF1VjNlN0xPL0NlaUNvSnp3Vnc")

})



img3.addEventListener("mouseover",()=>{
    
   
    img_grande.setAttribute("src","https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGV4_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=ZzFyTU1jUXQwUEpzcXN5WDk2dGhoRlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXpMS2ZmZjRXbUoxa054QTA2OGN1cnc")

})


img4.addEventListener("mouseover",()=>{
    
   
    img_grande.setAttribute("src","https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGV4_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=TlBhZUVUMG8zbVg1L1JzQXR0UGFuVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUWw2VzRWVXdpMlhhU2x4UVc0cms4V3c")

})


img5.addEventListener("mouseover",()=>{
    
   
    img_grande.setAttribute("src","https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDGV4_AV5?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=TU4vZXZIM1B0cThpTlNiVDRyOE90VlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUWs5WDZ2K1BCV3hOV21IdHkwQWwyVnc")

})



imgs.map((res)=>{
    res.addEventListener("mouseover",()=>{
        res.style.borderBottom="2px solid #6e6e73"
    })

    res.addEventListener("mouseleave",()=>{
        res.style.borderBottom="none"
   }) 
})









