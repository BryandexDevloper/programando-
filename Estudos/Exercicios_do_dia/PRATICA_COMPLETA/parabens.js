let nomes = localStorage.getItem("pessoas")

if(nomes){
    let pessoas = JSON.parse(nomes)
    console.log(pessoas)

        const mostrar = document.querySelector(".mostrar")
        mostrar.innerHTML=`
        parabens voce cadastrou ${pessoas.length} <br>`


    pessoas.foreach((res)=>{
        const nomes = document.createElement("p")
        document.body.appendChild(nomes)

        if(res.empresa){
                nomes.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade} empresa: ${res.empresa}`
            }else if(res.escola){
                nomes.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade} escola: ${res.escola}`
            }else{
                nomes.textContent=`nome: ${res.nome} idade: ${res.idade} cidade: ${res.cidade}`
            }
   
    })
}