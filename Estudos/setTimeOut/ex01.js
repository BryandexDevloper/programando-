


const container = document.querySelector(".container")
document.body.style.background="green"
const container1 = document.querySelector(".container1")

// let id = setTimeout(()=>{
// document.body.style.backgroundColor="black"
// },5000)


container1.addEventListener("mouseover",()=>{
    // clearTimeout(id)

    container.style.display="flex"

   let id =  setTimeout(()=>{
                    container.style.display="none"
            },1000)

    container.addEventListener("mouseover",()=>{
        console.log("click")
        clearTimeout(id)
    })


    container.addEventListener("mouseleave",()=>{
        container.style.display="none"

    })
    
    


})


container1.addEventListener("mouseleave",()=>{
    container.style.display="none"
})