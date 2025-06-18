const c1 = document.getElementById("c1")
const botao = document.getElementById("botao")
const todos_cursos = [...document.querySelectorAll(".curso")]


const caixa1 = document.querySelector("#caixa1")

caixa1.addEventListener("click",(evt)=>{
    alert ("clicou")
})

todos_cursos.map((res)=>{
    res.addEventListener("click",(evento)=>{
        evento.stopPropagation()
        const mudar_cor = evento.target
        mudar_cor.style.border="5px solid blue"
        

        
    })

    
})


botao.addEventListener("click",()=>{
    const addd = [...document.querySelectorAll(".curso")]
    addd.map((res)=>{
        caixa1.appendChild(res)
    })
})
