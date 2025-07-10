
const msg = [...document.querySelectorAll("div")]

msg.map((el)=>{
    el.addEventListener("click",(evet)=>{
       
        const el= evet.target
        el.classList.add("destaque")
        console.log("Foi clicado ")
        

    })
})




const alah=()=>{
    alert("Olaaa")
}

msg.addEventListener("click",(evet)=>{
    const el= evet.target
    el.classList.add("destaque")
    

})


setInterval(() => {
    
}, interval);
