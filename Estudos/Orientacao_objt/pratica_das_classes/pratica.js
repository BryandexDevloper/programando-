
// function numeroAleatorio(min,max){

// let numero = Math.floor(Math.random() * (max - min)) + min


// return numero

// }



// console.log(numeroAleatorio(10,20))



    const container = document.querySelector("#container")

    let largura_altura = Math.floor(Math.random() * (100 - 30)) + 30

    for (let i = 0; i <= 4; i++) {
        let div = document.createElement("div")
        div.style.width = `${largura_altura}px`
        div.style.height = `${largura_altura}px`
        let cor_base = Math.floor(Math.random() * 50)
        div.style.backgroundColor = `rgb(${cor_base},${cor_base},${cor_base})`
        div.setAttribute("class", "divv")
        container.appendChild(div)
    }
    setInterval(() => {
        const divs = document.querySelectorAll(".divv")
        
       

       
        divs.forEach((res) => {
             let cor_base = Math.floor(Math.random() * 50)
             let top = Math.floor(Math.random() * (200 - 10)) + 10
            let left = Math.floor(Math.random() * (200 - 10))+ 10
            res.classList.add("container_filho")
            res.style.top = `${top}px`
            res.style.left = `${left}px`
           
            res.style.backgroundColor = cor_base
            res.style.transition="all 0.5s ease"
            res.style.backgroundColor = `rgb(${cor_base},${cor_base},${cor_base})`

            
        })
    }, 100)




