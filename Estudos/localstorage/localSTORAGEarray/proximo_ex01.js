
document.body.style.height="100%"
document.body.style.width="100%"

document.body.addEventListener("click",()=>{



let dados = localStorage.getItem("fenando") /// aqui resgatamos o item 


if(dados){
    let resultado = JSON.parse(dados)

    console.log(resultado)
}else{
    console.log("nada foi")
}
})
