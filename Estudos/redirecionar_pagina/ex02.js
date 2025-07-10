const btn_redirecionar = document.querySelector(".redirecionar")


btn_redirecionar.addEventListener("click",()=>{
    console.log("voce sera redirecionado em em 3s")

    setTimeout(()=>{
        window.location.href="https://www.google.com/"
    },3000)

})