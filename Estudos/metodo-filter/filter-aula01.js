




const cursos = ['html','css','javascript','php','c++','react']
const caixa2 = document.querySelector("#caixa2")
const selecionar_btn = document.querySelector("#selecionado")
const remover_btn = document.querySelector("#remover")
const adicionar_btn = document.querySelector("#add")
const aparecer = document.querySelector("input[name=nome]")






const criarcursos=(res,indice)=>{

    const novo_curso = document.createElement("div")
    novo_curso.setAttribute("id","c"+indice)
    novo_curso.innerHTML=res

    novo_curso.style.width="100%"
    novo_curso.style.height="50px"
    novo_curso.style.display="flex"
    novo_curso.style.justifyContent="center"
    novo_curso.style.alignItems="center"
    novo_curso.style.border="2px solid black"


    const input_remover = document.createElement("input")
    input_remover.type="radio"
    input_remover.name="confirmar"
    input_remover.setAttribute("class","input-remover"+indice)
    novo_curso.appendChild(input_remover)
    caixa2.appendChild(novo_curso) 

}


//criar 




cursos.forEach((res,indice)=>{
    criarcursos(res,indice)
})






/// mostrar o nome do curso selecionado
selecionar_btn.addEventListener("click",()=>{
   
    const input_remover = document.querySelectorAll("input[name='confirmar']")
    input_remover.forEach((res)=>{
        if(res.checked == true){
            alert(res.parentNode.firstChild.textContent)
        }
    })
})


//remover
remover_btn.addEventListener("click",()=>{
    const input_remover = document.querySelectorAll("input[name='confirmar']")
    input_remover.forEach((res)=>{
        if(res.checked == true){
           res.parentElement.remove()
        }
    })
})


//adicionar curso

adicionar_btn.addEventListener("click",()=>{
    const nome = aparecer.value
    const total = document.querySelectorAll("#caixa2 div").length
    criarcursos(nome,total)
})



// const criarNovoCurso=(res,indice)=>{
  
//      const input = document.createElement("input")
//     input.type="radio";
//     input.name="radio"
//     input.setAttribute("id","rai"+indice)
//     novo = document.createElement("div")
//     novo.innerHTML=res
//     novo.appendChild(input)
//     novo.setAttribute("id","c"+indice)
//     novo.style.width ="90%"
//     novo.style.display="flex"
//     novo.style.justifyContent="center"
//     novo.style.alignItems="center"
//     novo.style.height="50px"
//     novo.style.border="3px solid black"
//     return novo
// }
// cursos.map((res,indice)=>{
    
//     const cursoNovo = criarNovoCurso(res,indice)
//     caixa2.appendChild(cursoNovo)
// })




// selecionar_btn.addEventListener("click",()=>{
//     const todos_input = [...document.querySelectorAll("input[type=radio]")]
//     let selecionados_input = todos_input.filter((res)=>{
//         return res.checked

        
//     })

//     selecionados_input = selecionados_input[0]
//     const lala = selecionados_input.parentNode.firstChild.textContent
//     console.log(selecionados_input)
//     console.log(lala)
//     alert(lala)
// })




// remover_btn.addEventListener("click",()=>{
//     const remover_itens = [...document.querySelectorAll("input[id^='rai']")]
//    remover_itens.forEach((res)=>{
//     if(res.checked == true){
//         res.parentElement.remove()
//     } 
//    })
// })





// adicionar_btn.addEventListener("click",()=>{
//     const nome = aparecer.value
//     if(!nome)return
//     const total = document.querySelectorAll("#caixa2 div").length
//     criarNovoCurso(nome,total)


//     const primeiroFilho = caixa2.firstChild
//     caixa2.insertBefore(cursoNovo , primeiroFilho)
//     aparecer.value = ""
// })