


const cursosSelecionados=()=>{
    
}



const cursos = ['html','css','javascript','php','c++','react']
const caixa2 = document.querySelector("#caixa2")
const selecionar_btn = document.querySelector("#selecionado")
const remover_btn = document.querySelector("#remover")
const adicionar_btn = document.querySelector("#add")
const aparecer = document.querySelector("input[name=nome]")


cursos.map((res,indice)=>{
    const input = document.createElement("input")
    input.type="radio";
    input.name="radio"
    input.setAttribute("id","r"+indice)
    novo = document.createElement("div")
    novo.innerHTML=res
    novo.appendChild(input)
    caixa2.appendChild(novo)
    novo.setAttribute("id","c"+indice)
    novo.style.width ="90%"
    novo.style.display="flex"
    novo.style.justifyContent="center"
    novo.style.alignItems="center"
    novo.style.height="50px"
    novo.style.border="3px solid black"
    
    
})


selecionar_btn.addEventListener("click",()=>{
    const todos_input = [...document.querySelectorAll("input[type=radio]")]
    let selecionados_input = todos_input.filter((res)=>{
        return res.checked

        
    })

    selecionados_input = selecionados_input[0]
    const lala = selecionados_input.parentNode.firstChild.textContent
    console.log(selecionados_input)
    console.log(lala)
    alert(lala)
})