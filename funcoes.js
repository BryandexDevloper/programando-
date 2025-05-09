function nome (){
    
for(let i = 0;i <=10; i++){
    console.log(i)
}

}


function mudarTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")

    d1.innerHTML="Hello word"
    d2.innerHTML="Hello word"
    d3.innerHTML="Hello word"

}

function canal(){
    
    return"Cfb cursos"
}
canal()
canal()
canal()

console.log(canal())