//header nav menu interação
const qrcode = document.getElementById("baixe-app")
const qrcode_img = document.querySelector(".qrcode")
const notificacoes = document.querySelector("#notificacoes")
const container_noti = document.querySelector(".container-notificacoes")
const linguagem = document.querySelector("#linguagem")
const container_linguagem = document.querySelector(".container-lingua")
const conta = document.querySelector("#conta")
const container_conta = document.querySelector(".container-conta")


qrcode.addEventListener("mouseenter",()=>{
qrcode_img.style.display="flex"
})
qrcode_img.addEventListener("mouseleave",()=>{
    qrcode_img.style.display="none"
})

notificacoes.addEventListener("mouseover",()=>{
container_noti.style.display="flex"
})

container_noti.addEventListener("mouseleave",()=>{
    container_noti.style.display="none"
})

linguagem.addEventListener("mouseover",()=>{
    container_linguagem.style.display="flex"
})



container_linguagem.addEventListener("mouseleave",()=>{
    container_linguagem.style.display="none"
})



conta.addEventListener("mouseover",()=>{
    container_conta.style.display='flex'
})



container_conta.addEventListener("mouseleave",()=>{
    container_conta.style.display="none"
})

/////////////////////////////////////////////////////////////

//area add / remover produtos




const bloco_container_produtos = document.querySelectorAll(".container-produto1")



bloco_container_produtos.forEach((res)=>{
const mais = res.querySelector(".mais")
const menos = res.querySelector(".menos")
const valor = res.querySelector(".valor")
const preco_produto = res.querySelector("#preco-produto")
let ps5 = 3389
let total = ps5
let num = 1



const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}); ""



valor.innerHTML=num
mais.addEventListener("click",()=>{

    num++
    valor.innerHTML=num
    total = ps5 * num
    preco_produto.innerHTML=total.toLocaleString("pt-br",{
        style:"currency",
        currency:"brl"
    })
   
})

menos.addEventListener("click",()=>{

    
    if(num  < 2){
       num = 1
    
    }

    num--
    valor.innerHTML=num
    total = ps5 * num
    preco_produto.innerHTML=total.toLocaleString("pt-br",{
        style:"currency",
        currency:"brl"
    })
  
})

})


const checkeboxs = [...document.querySelectorAll(".confirmar")]
const checkebox_principal = document.querySelector("#confirmar-principal")


checkebox_principal.addEventListener("click",(res)=>{
    checkeboxs.forEach((res)=>{
        res.checked = checkebox_principal.checked
    })
    
})


checkeboxs[0].addEventListener("click",()=>{
    checkeboxs.forEach((res)=>{
        res.checked = checkeboxs[0].checked
    })
})





const bloco_excluir_produtos = [...document.querySelectorAll(".container-produto1")]

bloco_excluir_produtos.forEach((res)=>{
    const excluir_produtos = res.querySelector("#Excluir")
    excluir_produtos.addEventListener("click",()=>{
        excluir_produtos.parentElement.parentElement.remove()

    })
})

