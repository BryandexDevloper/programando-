let olho = [...document.querySelectorAll(".olho_bolinha")]


let eixoX = 0
let eixoY = 0

window.addEventListener("mousemove",(evet)=>{

    eixoX = evet.clientX
    eixoY = evet.clientY

    const rotacao = Math.atan2(eixoY,eixoX) * 180/Math.PI
    olho.forEach((res)=>{
    res.style.transform=`rotate(${rotacao + 80}deg)`
})
    
    
})



