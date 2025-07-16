
let numero = {nome:"roberto",idade:12}
localStorage.setItem("numero", JSON.stringify(numero))
let dados = localStorage.getItem("fenando") /// aqui resgatamos o item 


if(dados){
    let resultado = JSON.parse(dados)

    console.log(resultado)
}else{
    console.log("nada foi")
}
