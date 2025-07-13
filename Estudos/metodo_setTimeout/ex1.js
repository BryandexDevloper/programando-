// let num1 = 2


// if(num1 == 2){
//     setTimeout(()=>{
//         console.log("Hello word")
//     },2000  )
// }


const nav = document.querySelector("#nav")
const div = document.querySelector(".container")
let id = setTimeout(()=>{
div.style.display="none"
},5000)


nav.addEventListener("click",()=>{
div.style.display="flex"
})


div.addEventListener("click",()=>{
    clearTimeout(id)
})
