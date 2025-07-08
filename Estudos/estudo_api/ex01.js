fetch('https://jsonplaceholder.typicode.com/users')
.then(resposta => resposta.json())
.then(dados =>{
    dados.forEach((res)=>{
        
        const nome = document.createElement("p")
        nome.textContent=res.email
        document.body.appendChild(nome)

    })
})


//EX 2 

// async function Carregar_dados() {

//     const resposta = await fetch('https://jsonplaceholder.typicode.com/users')
//     const dados = await resposta.json()

// }