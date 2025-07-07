const valorRecebido = localStorage.getItem("valorGanho")
const valor_atual = document.querySelector("#valor_ganho")
const valor_ganho_ate_agora = document.querySelector("#valor_ganho_ate_agora")

valor_atual.innerHTML=Number(valorRecebido).toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
    })
valor_ganho_ate_agora.innerHTML=Number(valorRecebido).toLocaleString("pt-br",{
    style:"currency",
    currency:"BRL"
})

    const btn_menu = document.querySelector(".container_menu_hamburguer")
    const btn_fechar_menu = document.querySelector(".material-symbols-outlined")
    btn_fechar_menu.style.display = "none"


    
    btn_menu.addEventListener("click",()=>{

        btn_menu.style.display="none"
        btn_fechar_menu.style.display="flex"

    })


    btn_fechar_menu.addEventListener("click",()=>{
        btn_fechar_menu.style.display="none"
        btn_menu.style.display="flex"
    })




    const avaliacoesUsuarios = [
  {
    nome: "Camila Souza",
    idade: 28,
    imagem: "https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-1/472108114_1242657170152812_951878604579196501_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=76lq9BzjsLYQ7kNvwFyoZBs&_nc_oc=Adl0ZfV2hety0Li0_FJaJH-YrCb-5MTm11lU4RM0ew6VPclJkO_w1kdidrqSvDHCaK2hxwS0cD3MtjyzsRj8Uncn&_nc_zt=24&_nc_ht=scontent-gru2-1.xx&_nc_gid=tqN2pFGJCTiQscQWoQafHw&oh=00_AfNg5-9k7oZS79pVRSMh4fahLhFtbscApETxctyyJDP8bA&oe=68670B64",
    avaliacao: "Sinceramente achei que fosse mais um golpe, mas recebi R$ 64,50 em dois dias! Só preenchi e já caiu no Pix. Super recomendo!"
  },
  {
    nome: "Bruno Martins",
    idade: 32,
    imagem: "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-1/503200139_122093640800903480_5103562461024813374_n.jpg?stp=c160.0.960.960a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FW_0sC8L8roQ7kNvwGGmAS5&_nc_oc=AdncKuwbvNBdRoHRQLnJpnYCU3q-PiLPCTzsvp7ohnmhAYk-GgRGuu6Cv9oX2_mn_hPJN2mkgUxyvB85pC8FfgP0&_nc_zt=24&_nc_ht=scontent-gru2-2.xx&_nc_gid=Qtd3G9Yb8mrHJltTmftjhA&oh=00_AfPQyQGERQTWc4SgxX7ZDivb4JRlqIV0dLopc6debcCTKg&oe=6866DE8B",
    avaliacao: "Fiz no intervalo do trabalho e já ganhei mais do que em um dia inteiro! Fácil, rápido e sem enrolação. Já indiquei pra família toda."
  },
  {
    nome: "Letícia Andrade",
    idade: 24,
    imagem: "https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-1/505421956_122176597370325603_4911368678900413700_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=l6a6z4qqDxEQ7kNvwGKamco&_nc_oc=AdkWG6Q55j2-caW0TNSFiTXswdt_JnW0WdpVrvQcDBXPh_biArhUntsQ1rvWeDMJGcoVlOPfYoEw2pMb4E6NslYO&_nc_zt=24&_nc_ht=scontent-gru1-2.xx&_nc_gid=hbks6bu3PziFF_yKOK21dQ&oh=00_AfOvgkq8sCSyz0qy3100-bX5lkjYs-UMZnGbbouGf8l0Xw&oe=6866F708",
    avaliacao: "Eu estava desempregada e isso me ajudou muito! É só responder perguntas e pronto. A taxa de ativação foi simbólica perto do que recebi."
  },
  {
    nome: "Rafael Lima",
    idade: 40,
    imagem: "https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-1/490269029_122106147644829356_4826957262716067182_n.jpg?stp=c0.0.972.972a_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6uF6Hy0bZWwQ7kNvwHCHToZ&_nc_oc=AdnGLQ7OFhKfsoY3tSBohp2edKWVKltHtuoPO-bq_6wrLdfbiq9jF0tolIao4s6ojawNHDERfzVwpeeJQ2FPihis&_nc_zt=24&_nc_ht=scontent-gru1-2.xx&_nc_gid=Vh3rHavNKovg_fvlu3UFvw&oh=00_AfN4btXal8waU3x3cKJT3O4V5mzHsfrUFfzH69BQ82k9lg&oe=686702CA",
    avaliacao: "Achei incrível a proposta. É um dinheiro honesto por algo simples. Recebi tudo direitinho no Pix após confirmar meus dados."
  },
  {
    nome: "Juliana Ferreira",
    idade: 30,
    imagem: "https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-1/508356427_122097895196913757_8688759867981580346_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kQOb_0eqWAoQ7kNvwHEufh0&_nc_oc=AdlfE-Nad3JWki5A5w27p_Bk5_MV-ZvStNkxI_2oEroI8Q-7oYGDtXobZGKXFWGZk2WS73vE0pLj5xdLqbwjMj-S&_nc_zt=24&_nc_ht=scontent-gru1-1.xx&_nc_gid=w8mwDy6Spw3tCl1OfbkI1Q&oh=00_AfOnTBe8O1XB9lymc3D3eO-0WtcG6OJaG_3MWpmxCh4Jxw&oe=6866E75B",
    avaliacao: "Respondi no celular mesmo, em casa, e já ganhei mais de R$ 80,00. Finalmente algo que realmente funciona!"
  },
  {
    nome: "Carlos Eduardo",
    idade: 36,
    imagem: "https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-1/499205795_122129188022800511_1002495435970622339_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=K9hwxEeondUQ7kNvwFl3pC8&_nc_oc=AdkkDOXiD2-YNAj6siGl86XOIGZTjmVZ8DMtiWkrIEcDxzj2ushRPz41Ohg01I-mT42Pi7fwVarFrNUWmfTdICM-&_nc_zt=24&_nc_ht=scontent-gru1-1.xx&_nc_gid=jdSCAFsrQAF8RsMlSchbBQ&oh=00_AfMpGr7bEmYkYhuxy8yfLADs9ryveXQFsREaGsY83w8nfA&oe=6867072A",
    avaliacao: "Tive dúvidas no início, mas o suporte foi ótimo. Fiz o pagamento da taxa de ativação e recebi no dia seguinte. Vale muito a pena!"
  }
];

const imagem_individo = document.querySelector("#individo")


let contador = 0




const btn_proximo = document.querySelector(".proximo")
const btn_anterior = document.querySelector(".anterior")
const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const opniao = document.querySelector("#opniao")


imagem_individo.setAttribute("src",avaliacoesUsuarios[contador].imagem)
nome.textContent=` Nome: ${avaliacoesUsuarios[contador].nome}`
idade.textContent=`Idade: ${avaliacoesUsuarios[contador].idade}`
opniao.textContent=`${avaliacoesUsuarios[contador].avaliacao}`


btn_proximo.addEventListener("click",()=>{
contador++
if(contador >= avaliacoesUsuarios.length){
    contador = 0
}
imagem_individo.setAttribute("src",avaliacoesUsuarios[contador].imagem)
nome.textContent=` Nome: ${avaliacoesUsuarios[contador].nome}`
idade.textContent=`Idade: ${avaliacoesUsuarios[contador].idade}`
opniao.textContent=`${avaliacoesUsuarios[contador].avaliacao}`

})

btn_anterior.addEventListener("click",()=>{
    contador--
    if(contador < 0){
            contador = avaliacoesUsuarios.length -1
        }

    imagem_individo.setAttribute("src",avaliacoesUsuarios[contador].imagem)
    nome.textContent=` Nome: ${avaliacoesUsuarios[contador].nome}`
    idade.textContent=`Idade: ${avaliacoesUsuarios[contador].idade}`
    opniao.textContent=`${avaliacoesUsuarios[contador].avaliacao}`
    
})

const confirmar_dados = document.querySelector(".btn_confirmar")
confirmar_dados.addEventListener("click",()=>{
    const container_parabens = document.querySelector(".container_parabens")
    container_parabens.innerHTML=""
    const container_proximos_passos = document.querySelector(".container_proximos_passos").remove()


    const container_formulario = document.createElement("div")
    container_formulario.classList.add("container_formulario")

    const container_img_texto = document.createElement("div")
    container_img_texto.classList.add("container_img_texto")
    container_formulario.appendChild(container_img_texto)

    const logo = document.createElement("img")
    logo.setAttribute("src","assets/logo spotify.png")
    
    const container_logo = document.createElement("div")
    container_logo.classList.add("container_logo")
    container_logo.appendChild(logo)
    container_img_texto.appendChild(container_logo)

    const tiutlo = document.createElement("p")
    tiutlo.textContent="Confirmar os dados"
    tiutlo.style.textAlign="center"
    container_img_texto.appendChild(tiutlo)

    //<!-- coloca aqui o restante do formulario-->

    const container_inputs= document.createElement("div")
    container_inputs.classList.add("container_inputs")
    container_formulario.appendChild(container_inputs)

const campos = [
  { id: "nome", label: "Nome completo" },
  { id: "email", label: "E-mail" },
  { id: "pix", label: "Chave Pix" }
];
    
campos.forEach((campo) => {
  const grupo = document.createElement("div");
  grupo.style.display = "flex";
  grupo.style.flexDirection = "column";

  const label = document.createElement("label");
  label.setAttribute("for", campo.id);
  label.textContent = campo.label;

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", campo.id);
  input.setAttribute("name", campo.id);
  input.style.padding = "8px";
  input.style.borderRadius = "5px";
  input.style.border = "1px solid #ccc";

  grupo.appendChild(label);
  grupo.appendChild(input);
  container_inputs.appendChild(grupo);
});
   

    container_parabens.appendChild(container_formulario)
    const btn_proximoo = document.createElement("p")
    btn_proximoo.classList.add("btn_confirmar")
    btn_proximoo.textContent="Confirmar"

    btn_proximoo.addEventListener("click",()=>{
        const todosInput = document.querySelectorAll('input[type="text"]')
        todosInput.forEach((res)=>{
            if(res.value == ""){
                
                alert(`${res.name} ainda esta vazio preencha para continuar`)
                res.style.border = "2px solid red"
                 const label = document.querySelector(`label[for="${res.id}"]`);
                if (label) {
                label.style.color = "red"; // ou qualquer destaque
                label.textContent += " (campo obrigatório)";
                }
            }else{

                //<!--Aqui redireciona o camarada para a pagina de pagamento -->
            }
        })
    })
    container_formulario.appendChild(btn_proximoo)
})
