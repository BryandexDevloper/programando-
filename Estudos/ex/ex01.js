const inputt  = document.querySelector("#calc")
const res = document.querySelector(".res")






inputt.addEventListener("input",()=>{
    res.textContent=eval(`${inputt.value}`)
})