    const btn_menu = document.querySelector(".container_menu_hamburguer")
    const conteudo_principal = document.querySelector(".container_backgroud")
    const container_opcoes = document.querySelector(".container-opecoes")
    const btn_fechar_menu = document.querySelector(".material-symbols-outlined")
    btn_fechar_menu.style.display = "none"
    const valor_atual = document.querySelector("#valor_ganho")
    let valor_ganho =  0 
    valor_atual.innerHTML=valor_ganho.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
    })

    btn_menu.addEventListener("click",()=>{

        btn_menu.style.display="none"
        btn_fechar_menu.style.display="flex"

    })


    btn_fechar_menu.addEventListener("click",()=>{
        btn_fechar_menu.style.display="none"
        btn_menu.style.display="flex"
    })


    const perguntasSpotify = [
    {
        pergunta: "1. O que você acha da qualidade de áudio no Spotify?",
        opcoes: ["🔊 Excelente, som nítido e claro", "👍 Boa, mas poderia melhorar em alguns momentos", "👎 Ruim, a qualidade deixa a desejar"]
    },
    {
        pergunta: "2. Como você avalia a interface do Spotify?",
        opcoes: ["😍 Muito intuitiva e fácil de usar", "🙂 Razoável, às vezes é confusa", "😤 Complicada, difícil de encontrar o que quero"]
    },
    {
        pergunta: "3. Você sente que o Spotify entende seu gosto musical nas recomendações?",
        opcoes: ["🎯 Sim, as playlists são perfeitas pra mim", "🤷‍♂️ Mais ou menos, acerta de vez em quando", "❌ Não, as sugestões são bem fora do que gosto"]
    },
    {
        pergunta: "4. Com que frequência você usa o Spotify?",
        opcoes: ["📅 Todos os dias", "📆 Algumas vezes por semana", "💤 Raramente"]
    },
    {
        pergunta: "5. O que você acha dos anúncios na versão gratuita?",
        opcoes: ["😠 Muito irritantes e repetitivos", "😐 Normais, não me incomodam tanto", "✅ Não me importo, entendo que é necessário"]
    },
    {
        pergunta: "6. Como você avalia o preço do plano premium?",
        opcoes: ["💸 Justo pelo que oferece", "🤔 Um pouco caro, mas vale a pena", "😬 Muito caro, não compensa"]
    },
    {
        pergunta: "7. O que você acha do recurso de letras ao vivo (letras sincronizadas)?",
        opcoes: ["🎤 Muito legal, uso sempre", "📖 Interessante, mas uso pouco", "😐 Desnecessário, nunca olho"]
    },
    {
        pergunta: "8. Como você vê a diversidade de músicas no catálogo do Spotify?",
        opcoes: ["🌍 Muito diversa, encontro de tudo", "🔍 Falta algumas coisas, mas é bom", "😞 Limitada, vários artistas não estão lá"]
    },
    {
        pergunta: "9. O que você acha do recurso \"Spotify Wrapped\" (resumo anual)?",
        opcoes: ["🥳 Adoro, fico esperando todo ano", "😊 Legalzinho, mas não dou muita atenção", "🙄 Acho bobo, nunca vejo"]
    },
    {
        pergunta: "10. Você recomendaria o Spotify para outras pessoas?",
        opcoes: ["✅ Com certeza", "🤷‍♀️ Talvez, depende da pessoa", "❌ Não recomendaria"]
    }
    ];



    let contador = 0
    const criarPerguntas =()=>{
        const colocar = document.querySelector(".container_texto")
        colocar.innerHTML=""

        

        const container_pergunta = document.createElement("div")
        container_pergunta.classList.add("container_pergunta")


        
        const pergunta = document.createElement("p")
        pergunta.style.textAlign="center"
        pergunta.classList.add("pergunta")
        pergunta.style.display="block"
        pergunta.innerHTML=perguntasSpotify[contador].pergunta
        container_pergunta.appendChild(pergunta)

        const btn_proximo = document.createElement("div")
        btn_proximo.textContent="Proximo"
        btn_proximo.classList.add("iniciar")
        colocar.appendChild(btn_proximo)

        perguntasSpotify[contador].opcoes.forEach((opcoes,index)=>{



        const container_respostas = document.createElement("div")
        container_respostas.style.display="flex"
        container_respostas.style.gap="20px"
        
        container_pergunta.appendChild(container_respostas)


        const input_selecionar_resposta = document.createElement("input")
        input_selecionar_resposta.type="radio"
        input_selecionar_resposta.name="selecionar"
        input_selecionar_resposta.addEventListener("change", () => {
        
            btn_proximo.style.display="flex"

        });
        container_respostas.appendChild(input_selecionar_resposta)

        
        
        
        const respostas = document.createElement("p")
        respostas.innerHTML=opcoes
        container_respostas.appendChild(respostas)
        
        
        })

    colocar.appendChild(container_pergunta)
    
    
    btn_proximo.addEventListener("click",()=>{
        contador++
        valor_ganho = valor_ganho + 8.75
        valor_atual.innerHTML=valor_ganho.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
    })

        if (contador < perguntasSpotify.length) {
        criarPerguntas(); // ainda tem pergunta, continua
    } else {
            localStorage.setItem("valorGanho", valor_ganho);


        window.location.href = "spotify_pagamento.html"; // terminou
    }

    })




    }





    const iniciar = document.querySelector("#iniciar")
    iniciar.addEventListener("click",()=>{
        criarPerguntas()
    })


