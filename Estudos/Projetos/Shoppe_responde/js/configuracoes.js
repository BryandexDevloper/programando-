//sistema de creditos


const creditos_texto = document.querySelector("#creditos_disponiveis")
let valor = 0
creditos_texto.innerHTML = `Creditos:${valor}`
let respondeu_tudo = false
const produtosSeparados = [
  [
    { titulo: "Fone Bluetooth airpods Com Cancelamento De Ruído", pontosNecessarios: 600, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7cotegtzolo2e@resize_w450_nl.webp" },
    { titulo: "Power Bank 20000mAh com Visor Digital", pontosNecessarios: 580, valorAntigo: 71.50, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rfif-m9dw06hccyp5e0@resize_w450_nl" },
    { titulo: "Smartwatch S10 Microwear 47mm Serie 10 ChatGPT", pontosNecessarios: 620, valorAntigo: 59.99, link: "https://down-br.img.susercontent.com/file/sg-11134201-7req1-m8z5mmbgfja1af@resize_w450_nl.webp" },
    { titulo: "Carregador Turbo 120w Fonte Usb Carregador", pontosNecessarios: 600, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rdxe-m0s0zutcpmxx2f.webp" },
    { titulo: "Projetor 4K HD 150 Polegadas Celular, Tv B0x, Xbox, PS, Pc,", pontosNecessarios: 620, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvm98b66j9zyb5@resize_w450_nl.webp" },
    { titulo: "Caixa de som portátil J.BL Go 3 com bateria Bluetooth", pontosNecessarios: 610, valorAntigo: 58.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7fyw1b1mvka3c@resize_w450_nl.webp" }
  ],
  [
    { titulo: "Kit Câmera Segurança Prova D'água Infravermelho Lâmpada", pontosNecessarios: 630, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lndjfs07e7kcc2.webp" },
    { titulo: "Adaptador USB-C para HDMI 4K", pontosNecessarios: 600, valorAntigo: 59.00, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rd67-m7m2nfxnox47ee@resize_w450_nl.webp" },
    { titulo: "Luz LED Inteligente com App", pontosNecessarios: 590, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m65o1w7xomf9eb@resize_w450_nl.webp" },
    { titulo: "Suporte para Notebook Dobrável", pontosNecessarios: 600, valorAntigo: 58.50, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rd6z-m6oeprseaavu2f@resize_w450_nl.webp" },
    { titulo: "Kit Medidores de Cozinha (Conjunto 5 Peças)", pontosNecessarios: 580, valorAntigo: 55.90, link: "https://down-br.img.susercontent.com/file/cda203e415184bcdbc81005dd4eb0dfe@resize_w450_nl.webp" },
    { titulo: "Tábua de Corte Antimicrobial", pontosNecessarios: 590, valorAntigo: 59.00, link: "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-m31syvxotyp390.webp" }
  ],
  [
    { titulo: "Conjunto de Espátulas de Silicone", pontosNecessarios: 600, valorAntigo: 58.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ma65iwflvw1z82@resize_w450_nl.webp" },
    { titulo: "Mixer Portátil para Alimentos", pontosNecessarios: 620, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rd48-lupf3z3a40mxf1@resize_w450_nl.webp" },
    { titulo: "Jogo de Potes Herméticos para Alimentos", pontosNecessarios: 600, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m63dx8xit85h38.webp" },
    { titulo: "Espremedor de Alho Manual", pontosNecessarios: 580, valorAntigo: 55.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5omkxers3np14@resize_w450_nl.webp" },
    { titulo: "Avental com Bolsos para Cozinha", pontosNecessarios: 590, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rat0-mb7mf54apggg44@resize_w450_nl.webp" },
    { titulo: "Conjunto de Facas de Cozinha (3 peças)", pontosNecessarios: 630, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8ccd2417nyp08@resize_w450_nl.webp" }
  ],
  [
    { titulo: "Ralador Multifuncional de Legumes", pontosNecessarios: 610, valorAntigo: 59.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mbf8jhyjlqwo79@resize_w450_nl.webp" },
    { titulo: "Balança Digital para Cozinha", pontosNecessarios: 600, valorAntigo: 58.90, link: "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-m2ut8hfaz85p6e@resize_w450_nl.webp" },
    { titulo: "Mouse Mágico 2 Sem Fio Bluetooth Para APPLE Mac Book Macbook Air", pontosNecessarios: 610, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rfg4-m3yeh3ef79e337@resize_w450_nl.webp" },
    { titulo: "Pen Drive 64GB USB 3.0", pontosNecessarios: 620, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lzd1mmdl294204@resize_w450_nl.webp" },
    { titulo: "Carregador Portátil Por Indução Para Iphone", pontosNecessarios: 610, valorAntigo: 59.00, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt0ayer1ja7jb0@resize_w450_nl.webp" },
    { titulo: "Teclado e Mouse Sem Fio", pontosNecessarios: 620, valorAntigo: 60.00, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rcdh-ltsds8m1axuga9@resize_w450_nl.webp" }
  ],
  [
    { titulo: "Alto-Falante Bluetooth Portátil", pontosNecessarios: 600, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m0nier3pxz7l3e@resize_w450_nl.webp" },
    { titulo: "Luz Noturna LED com Sensor", pontosNecessarios: 580, valorAntigo: 55.90, link: "https://down-br.img.susercontent.com/file/cn-11134207-7r98o-loyulexmciqfff@resize_w450_nl.webp" },
    { titulo: "Kit de Limpeza para Eletrônicos", pontosNecessarios: 570, valorAntigo: 54.90, link: "https://down-br.img.susercontent.com/file/sg-11134201-7ra0t-mbduxb9as47k94.webp" },
    { titulo: "Hub USB 3.0 4 Portas", pontosNecessarios: 610, valorAntigo: 59.90, link: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvkayk9q316xac@resize_w450_nl.webp" },
    { titulo: "Luminária LED USB para Notebook", pontosNecessarios: 590, valorAntigo: 59.00, link: "https://down-br.img.susercontent.com/file/sg-11134201-7raso-mawxk6ab4nkyf7@resize_w450_nl.webp" },
    { titulo: "Mini Ventilador USB Portátil", pontosNecessarios: 580, valorAntigo: 55.50, link: "https://down-br.img.susercontent.com/file/sg-11134201-7rasx-mb7nvasqy8o33b@resize_w450_nl.webp" }
  ]
];


let carrinho_compras = new Map()

let contador = 0
const criar_carrolsel = ()=>{




// Criar a section .produtos
const section = document.querySelector(".produtos")
section.innerHTML=""

// Criar o container principal
const containerProdutos = document.createElement("div");

containerProdutos.classList.add("container_produtos");


// Criar os botões
const containerBtn = document.createElement("div");
containerBtn.classList.add("container_btn");

const btnAnterior = document.createElement("div");
btnAnterior.classList.add("btn_anterior");

const btnProximo = document.createElement("div");
btnProximo.classList.add("btn_proximo");


btnAnterior.innerHTML=`<svg width="30" height="30" viewBox="-5 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <title>chevron-left</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Icon-Set" transform="translate(-421.000000, -1195.000000)" fill=" rgba(0, 0, 0, 0.466)">
        <path d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98" id="chevron-left"></path>
      </g>
    </g>
  </g>
</svg>
`


btnProximo.innerHTML=`<svg width="30" height="30" viewBox="-5 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" style="transform: scaleX(-1);">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <title>chevron-left</title>
    <desc>Created with Sketch Beta.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Icon-Set" transform="translate(-421.000000, -1195.000000)" fill=" rgba(0, 0, 0, 0.466)">
        <path d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98" id="chevron-left"></path>
      </g>
    </g>
  </g>
</svg>
`


btnProximo.addEventListener("click",()=>{
    contador++
    if(contador >= produtosSeparados.length){
        contador = 0
    }
    console.log("ola")
    criar_carrolsel()
    
})

btnAnterior.addEventListener("click",()=>{
    contador--
    if(contador < 0 ){
        contador = produtosSeparados.length -1
    }
    criar_carrolsel()
    
})

containerBtn.appendChild(btnAnterior);
containerBtn.appendChild(btnProximo);
section.appendChild(containerBtn);

// Criar cada produto
   

  const paginaProduto = (res)=>{
     const produto = document.querySelector("#principal")
    

    const pagina_produto_container_produto = document.createElement("div")
    pagina_produto_container_produto.classList.add("pagina_produto_container_produto")
    produto.appendChild(pagina_produto_container_produto)

    const btn_voltar = document.createElement("p")
    btn_voltar.innerHTML=`<svg 
            viewBox="0 0 22 17" 
            width="20" 
            height="20"
            role="img" 
            fill="white"
            class="stardust-icon stardust-icon-back-arrow vWinwj navbar-generic__back"
          >
            <g stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-3, -6)">
              <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
            </g>
          </svg>
          `
    btn_voltar.classList.add("btn_voltar")
    pagina_produto_container_produto.appendChild(btn_voltar)

    
    btn_voltar.addEventListener("click",()=>{
      pagina_produto_container_produto.style.display="none"
    })

    const pagina_produto_container_tudo = document.createElement("div")
    pagina_produto_container_tudo.classList.add("pagina_produto_container_tudo")
    pagina_produto_container_produto.appendChild(pagina_produto_container_tudo)

    const pagina_produto_container_galeria = document.createElement("div")
    pagina_produto_container_galeria.classList.add("pagina_produto_container_galeria")
    pagina_produto_container_tudo.appendChild(pagina_produto_container_galeria)

    const pagina_produto_imagem = document.createElement("img")
    pagina_produto_imagem.setAttribute("src",res.link)
    pagina_produto_container_galeria.appendChild(pagina_produto_imagem)

    const pagina_produto_container_informacoes = document.createElement("div")
    pagina_produto_container_informacoes.classList.add("pagina_produto_container_informacoes")
    pagina_produto_container_tudo.appendChild(pagina_produto_container_informacoes)

    const pagina_produto_nome_produto = document.createElement("h1")
    pagina_produto_nome_produto.textContent = res.titulo
    pagina_produto_nome_produto.style.color="black"
    pagina_produto_nome_produto.style.textAlign="left"
    pagina_produto_nome_produto.style.margin="0"
    pagina_produto_container_informacoes.style.fontWeight="100"
    pagina_produto_container_informacoes.appendChild(pagina_produto_nome_produto)

    const pagina_produto_container_avaliacoes = document.createElement("div")
    pagina_produto_container_avaliacoes.classList.add("pagina_produto_container_avaliacoes")
    pagina_produto_container_informacoes.appendChild(pagina_produto_container_avaliacoes)

    const pagina_produto_container_estrelas = document.createElement("div")
    pagina_produto_container_estrelas.classList.add("pagina_produto_container_estrelas")
    pagina_produto_container_avaliacoes.appendChild(pagina_produto_container_estrelas)

    const pontuacao = document.createElement("p")
    pontuacao.textContent="5.0"
    pontuacao.classList.add("pontuacao")
    pagina_produto_container_estrelas.appendChild(pontuacao)

    const container_estrelas = document.createElement("div")
    container_estrelas.style.display="flex"

    for(let i = 0; i <= 4; i++){
        const estrelas = document.createElement("div")
        estrelas.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="#f4511e" xmlns="http://www.w3.org/2000/svg">
       <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#f4511e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> `
        container_estrelas.appendChild(estrelas)
      }

      pagina_produto_container_estrelas.appendChild(container_estrelas)
      const tanto_avaliacoes = document.createElement("div")
      tanto_avaliacoes.classList.add("pagina_produto_container_estrelas")

      pagina_produto_container_avaliacoes.appendChild(tanto_avaliacoes)

      const tanto_avaliado = document.createElement("p")
      tanto_avaliado.classList.add("pontuacao")
      tanto_avaliado.style.fontSize="14px"
      tanto_avaliado.textContent="5,5mil"
      tanto_avaliado.style.width="auto"
      tanto_avaliacoes.appendChild(tanto_avaliado)

      const text_avaliacao = document.createElement("p")
      text_avaliacao.classList.add("text_avaliacao")
      text_avaliacao.style.fontSize="14px"
      text_avaliacao.textContent="Avalições"
      tanto_avaliacoes.appendChild(text_avaliacao)

      const pagina_produto_container_quantos_vendidos = document.createElement("div")
      pagina_produto_container_quantos_vendidos.classList.add("pagina_produto_container_quantos_vendidos")
      pagina_produto_container_avaliacoes.appendChild(pagina_produto_container_quantos_vendidos)

      const numeros_vendidos = document.createElement("p")
      numeros_vendidos.classList.add("pontuacao")
      numeros_vendidos.style.fontSize="14px"
      numeros_vendidos.textContent="10mil"

      pagina_produto_container_quantos_vendidos.appendChild(numeros_vendidos)

      const text_resgatados = document.createElement("p")
      text_resgatados.classList.add("text_avalicao")
      text_resgatados.style.fontSize="14px"
      text_resgatados.style.color="black"
      text_resgatados.textContent="Resgatados"

      pagina_produto_container_quantos_vendidos.appendChild(text_resgatados)

      const text_denunciar = document.createElement("p")
      text_denunciar.textContent="Denunciar"
      text_denunciar.style.color="grey"
      text_denunciar.style.fontSize="14px"
      text_denunciar.classList.add("denunciar")
      
      pagina_produto_container_avaliacoes.appendChild(text_denunciar)


      const container_valor_produto = document.createElement("div")
      container_valor_produto.classList.add("container_valor_produto")
      pagina_produto_container_informacoes.appendChild(container_valor_produto)


      const container_valor_credito = document.createElement("div")
      container_valor_credito.classList.add("container_valor_credito")
      container_valor_produto.appendChild(container_valor_credito)

      const coin = document.createElement("img")
      coin.src="assets/coins.png"
      container_valor_credito.appendChild(coin)

      const text_credito = document.createElement('p')
      text_credito.textContent=`Creditos: ${res.pontosNecessarios}`
      text_credito.style.fontSize="16px"
      text_credito.style.fontWeight="800"
      text_credito.classList.add("text_credito")
      container_valor_credito.appendChild(text_credito)

      const valor_antigo = document.createElement("s")
      valor_antigo.style.color="grey"
      valor_antigo.style.fontSize="15px"
      valor_antigo.textContent=res.valorAntigo.toLocaleString("pt-br",{
        style:'currency',
        currency:'BRL'
      })

      valor_antigo.style.marginLeft="10px"
      container_valor_produto.appendChild(valor_antigo)


      const container_frete = document.createElement("div")
      container_frete.classList.add("container_frete")
      pagina_produto_container_informacoes.appendChild(container_frete)


      const divFrete = document.createElement("div")
      divFrete.textContent=`Frete`
      divFrete.classList.add("divFrete")
      container_frete.appendChild(divFrete)  

      const divCaminhao = document.createElement("div")
      divCaminhao.classList.add("divCaminhao")
      container_frete.appendChild(divCaminhao)

      const caminhao = document.createElement("p")
      caminhao.classList.add("caminhao")
      caminhao.innerHTML=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.45831 4.16669C1.11314 4.16669 0.833313 4.44651 0.833313 4.79169V14.375C0.833313 14.7202 1.11314 15 1.45831 15H3.49158C3.57186 16.1052 4.49366 16.978 5.6207 16.978C6.74775 16.978 7.66955 16.1052 7.74983 15H12.0833L12.0867 15H13.219C13.2993 16.1054 14.2222 16.978 15.3481 16.978C16.4751 16.978 17.3969 16.1052 17.4772 15H18.9134C19.1184 15 19.3103 14.8995 19.4271 14.731C19.5438 14.5626 19.5706 14.3476 19.4986 14.1556L16.8172 7.00285C16.7257 6.75887 16.4925 6.59723 16.232 6.59723H12.7083V4.79169C12.7083 4.44651 12.4285 4.16669 12.0833 4.16669H1.45831ZM17.1822 13.75H18.0116L15.7988 7.84723H12.7083V13.75H13.5142C13.887 13.1262 14.5689 12.7084 15.3481 12.7084C16.128 12.7084 16.8097 13.1263 17.1822 13.75ZM5.6207 12.7084C4.84077 12.7084 4.15912 13.1263 3.78662 13.75H2.08331V5.41669H11.4583V13.75H7.45479C7.08229 13.1263 6.40064 12.7084 5.6207 12.7084ZM5.6207 13.9584C5.13174 13.9584 4.7359 14.3547 4.7359 14.8432C4.7359 15.3317 5.13174 15.728 5.6207 15.728C6.10967 15.728 6.50551 15.3317 6.50551 14.8432C6.50551 14.3547 6.10967 13.9584 5.6207 13.9584ZM14.4633 14.8432C14.4633 14.3549 14.8598 13.9584 15.3481 13.9584C15.837 13.9584 16.2329 14.3547 16.2329 14.8432C16.2329 15.3317 15.837 15.728 15.3481 15.728C14.8598 15.728 14.4633 15.3314 14.4633 14.8432Z" fill="#26AA99"></path></svg>`
      divCaminhao.appendChild(caminhao)

      const container_frete_para = document.createElement("div")
      container_frete_para.classList.add("container_frete_para")
      divCaminhao.appendChild(container_frete_para)

      const div1 = document.createElement("div")
      const text_para = document.createElement("p")
      text_para.textContent="Frete para"
      div1.classList.add("div1")
      div1.appendChild(text_para)

      const div2 = document.createElement("div")
      const text_frete = document.createElement("p")
      text_frete.textContent="Frete"
      div2.classList.add("div2")
      div2.appendChild(text_frete)

      container_frete_para.appendChild(div1)
      container_frete_para.appendChild(div2)

      const text_frete_para = document.createElement("p")
      div1.appendChild(text_frete_para)

        const fretesPorEstado = [
  { estado: "AC", nome: "Acre", frete: 15.50 },
  { estado: "AL", nome: "Alagoas", frete: 13.90 },
  { estado: "AM", nome: "Amazonas", frete: 15.30 },
  { estado: "AP", nome: "Amapá", frete: 14.60 },
  { estado: "BA", nome: "Bahia", frete: 13.00 },
  { estado: "CE", nome: "Ceará", frete: 13.20 },
  { estado: "DF", nome: "Distrito Federal", frete: 12.80 },
  { estado: "ES", nome: "Espírito Santo", frete: 12.40 },
  { estado: "GO", nome: "Goiás", frete: 13.10 },
  { estado: "MA", nome: "Maranhão", frete: 14.80 },
  { estado: "MG", nome: "Minas Gerais", frete: 12.90 },
  { estado: "MS", nome: "Mato Grosso do Sul", frete: 13.50 },
  { estado: "MT", nome: "Mato Grosso", frete: 14.20 },
  { estado: "PA", nome: "Pará", frete: 15.00 },
  { estado: "PB", nome: "Paraíba", frete: 13.30 },
  { estado: "PE", nome: "Pernambuco", frete: 13.70 },
  { estado: "PI", nome: "Piauí", frete: 13.60 },
  { estado: "PR", nome: "Paraná", frete: 12.60 },
  { estado: "RJ", nome: "Rio de Janeiro", frete: 12.00 },
  { estado: "RN", nome: "Rio Grande do Norte", frete: 13.40 },
  { estado: "RO", nome: "Rondônia", frete: 15.10 },
  { estado: "RR", nome: "Roraima", frete: 15.40 },
  { estado: "RS", nome: "Rio Grande do Sul", frete: 13.10 },
  { estado: "SC", nome: "Santa Catarina", frete: 12.70 },
  { estado: "SE", nome: "Sergipe", frete: 13.20 },
  { estado: "SP", nome: "São Paulo", frete: 12.20 },
  { estado: "TO", nome: "Tocantins", frete: 14.30 }
];





text_frete_para.textContent=`${fretesPorEstado[25].estado}, ${fretesPorEstado[25].nome}`
const text_valor_frete = document.createElement("p")
text_valor_frete.textContent=`${fretesPorEstado[25].frete.toLocaleString("pt-br",{
  style:"currency",
  currency:"BRL"
})}`
div2.appendChild(text_valor_frete)
const frete_para_chevron = document.createElement("div")
frete_para_chevron.innerHTML=`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <rect width="24" height="24" fill="white"></rect>
    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
  </g>
</svg>
`
div1.appendChild(frete_para_chevron)

let produto_estado = null

      const container_estados = document.createElement("div")
      container_estados.classList.add("container_estados")
      div2.appendChild(container_estados)


      fretesPorEstado.forEach((res)=>{
       
     const estado = document.createElement("div")
     estado.classList.add("estado")
     estado.textContent=res.estado
     container_estados.appendChild(estado)
        
     estado.addEventListener("click",()=>{
      text_frete_para.textContent=`${res.estado}, ${res.nome}`
      text_valor_frete.textContent=`${res.frete.toLocaleString("pt-br",{
        currency:"BRL",
        style:"currency"
      })}`

      produto_estado = res.frete

     })
      })

  frete_para_chevron.addEventListener("click",()=>{
     container_estados.style.display="flex"
})


container_estados.addEventListener("click",()=>{
      container_estados.style.display="none"
})



const container_quantidade = document.createElement("div")
container_quantidade.classList.add("container_quantidade")
pagina_produto_container_informacoes.appendChild(container_quantidade)

  ///colocar os negocio de quantidade nessa variavel container_quantidade

  const text_quantidade = document.createElement("p")
  text_quantidade.classList.add("text_quantidade")
  text_quantidade.textContent="Quantidade"
  container_quantidade.appendChild(text_quantidade)

  const container_quantidade_numeros = document.createElement("div")
  container_quantidade_numeros.classList.add("container_quantidade_numeros")
  container_quantidade.appendChild(container_quantidade_numeros)

  
  let quantidade = 0

  const btnMenos = document.createElement("div")
  btnMenos.classList.add("btn_menos")
  btnMenos.textContent="-"
  container_quantidade_numeros.appendChild(btnMenos)
  const btnValor = document.createElement("div")
  btnMenos.addEventListener("click",()=>{
    quantidade--
    if(quantidade < 1){
      quantidade = 0
    }
    btnValor.textContent=quantidade

  })
  btnValor.textContent=quantidade
  btnValor.classList.add("btn_menos")
  container_quantidade_numeros.appendChild(btnValor)
  const btnMais  = document.createElement("div")
  btnMais.addEventListener("click",()=>{
    quantidade++
    if(quantidade > 1){
      quantidade = 1
      alert("Quantidade maxima atingida")
    }
    btnValor.textContent=quantidade
  })
  btnMais.textContent="+"
  btnMais.classList.add("btn_menos")
  container_quantidade_numeros.appendChild(btnMais)


  const container_botoes  = document.createElement("div")
  container_botoes.classList.add("container_botoes")
  pagina_produto_container_informacoes.appendChild(container_botoes)

  const btn_colocar_carrinho = document.createElement("div")
  btn_colocar_carrinho.textContent="Adicionar ao carrinho"
  btn_colocar_carrinho.classList.add("btn_colocar_carrinho")
  const btn_comprar = document.createElement("div")
  btn_comprar.classList.add("btn_comprar")
  btn_comprar.textContent="Comprar agora"

  container_botoes.appendChild(btn_colocar_carrinho)
  container_botoes.appendChild(btn_comprar)



      btn_colocar_carrinho.addEventListener("click",()=>{
        if(respondeu_tudo){

          if(!produto_estado){
            alert("Selecione o estado para entrega")
          }else{

               if(carrinho_compras.size > 0){
            alert("Voce só pode adicionar 1 produto no seu carrinho")
          }else{

            let produto_foto = res.link
            let produto_titulo = res.titulo
            let produto_credito = res.pontosNecessarios
            let id = carrinho_compras.size + 1
            carrinho_compras.set(id,{produto_foto,produto_titulo,produto_credito,produto_estado})
            numero_produtos.textContent=carrinho_compras.size

          }

          }
 

        }else{
          alert("Responda as perguntas para adicionar produtos ao carrinho")
           
        }
      })

      btn_comprar.addEventListener("click",()=>{
        if(valor == 0 ){
          alert("Voce nao tem creditos sulficientes para comprar responda as perguntas para adquirir creditos")
        }else{
         
          //////////////////////////////////Aqui vem o carrinho de compras//////////////////////////////////////////////////////
        }
      })

  }  


         



produtosSeparados[contador].forEach(produto => {
  const containerProduto = document.createElement("div");
  containerProduto.classList.add("container-produto");

  // Foto
  const containerFoto = document.createElement("div");
  containerFoto.classList.add("container-foto");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = produto.link;
  img.alt = produto.titulo;

  containerFoto.appendChild(img);

  containerFoto.addEventListener("click",()=>{
    // paginaProduto(produto)


    if(respondeu_tudo == true){
      const tudo = document.querySelector("#principal")
      const titulo_h3 = document.querySelector(".subt")
      const section_produtos = document.querySelector(".produtos")
      titulo_h3.setAttribute("id","titulo_h3")
      

      paginaProduto(produto)
    }else{
      paginaProduto(produto)
      
    }

  })

  // Título
  const containerTitulo = document.createElement("div");
  containerTitulo.classList.add("container_titulo");

  const indicado = document.createElement("p");
  indicado.classList.add("indicado");
  indicado.textContent = "Indicado";

  const titulo = document.createElement("p");
  titulo.classList.add("titulo_produto");
  titulo.textContent = produto.titulo;

  containerTitulo.appendChild(indicado);
  containerTitulo.appendChild(titulo);

  // Preço
  const containerPreco = document.createElement("div");
  containerPreco.classList.add("container_preco");

  const precoAntigoDiv = document.createElement("div");
  precoAntigoDiv.classList.add("container_preco_antigo");

  const precoAntigo = document.createElement("s");
  precoAntigo.classList.add("preco_antigo");
  precoAntigo.textContent = `De:R$${produto.valorAntigo.toFixed(2)}`;
  precoAntigoDiv.appendChild(precoAntigo);

  const containerCreditos = document.createElement("div");
  containerCreditos.classList.add("container_preco_em_creditos");

  const por = document.createElement("p");
  por.classList.add("por");
  por.textContent = "por:";

  const coins = document.createElement("div");
  coins.classList.add("container-coins");

  const coinImg = document.createElement("img");
  coinImg.src = "assets/coins.png";
  coinImg.alt = "coins";
  coins.appendChild(coinImg);

  const creditos = document.createElement("p");
  creditos.classList.add("por", "creditos");
  creditos.textContent = "Créditos:";

  const pontos = document.createElement("p");
  pontos.classList.add("por", "pontosNecessarios");
  pontos.textContent = produto.pontosNecessarios;

  containerCreditos.appendChild(por);
  containerCreditos.appendChild(coins);
  containerCreditos.appendChild(creditos);
  containerCreditos.appendChild(pontos);

  containerPreco.appendChild(precoAntigoDiv);
  containerPreco.appendChild(containerCreditos);

  // Juntar tudo no container do produto
  containerProduto.appendChild(containerFoto);
  containerProduto.appendChild(containerTitulo);
  containerProduto.appendChild(containerPreco);

  // Adicionar ao container principal
  containerProdutos.appendChild(containerProduto);
});

// Adicionar o container dentro da section
section.appendChild(containerProdutos);

}

const avaliacoes = [
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65gfshvo2mo7e@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65gfshbovv410@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65gfshbovidff@resize_w72_nl.webp"
    ],
    foto:"https://down-br.img.susercontent.com/file/b63ff4e817f79b8a4a84d7a4762c272c_tn",
    nome: "Excar12",
    data: "12/06/2025",
    comentario: "Muito bom, fácil de usar e era exatamente o que eu esperava. A plataforma é rápida e acumulei pontos com facilidade.",
    perguntasRespondidas: 12,
    creditosAcumulados: 580,
    curtidas: 23
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxjuvt8u22f3bf.webp"
    ],
    foto:"",
    nome: "Correia_sa3",
    data: "09/06/2025",
    comentario: "Produto bom e bem embalado, atendeu minhas expectativas. Gostei do sistema, só queria mais variedade nas tarefas.",
    perguntasRespondidas: 15,
    creditosAcumulados: 620,
    curtidas: 18
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-ly3zqu7v7yt336@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-ly3zqu7v9ddj0c@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-ly3zqu7varxzad@resize_w72_nl.webp"
    ],
    foto:"https://down-br.img.susercontent.com/file/br-11134233-7r98o-lvtj7s6d6c4m85_tn",
    nome: "mariof55",
    data: "08/06/2025",
    comentario: "Veio tudo certinho, gostei bastante da qualidade. É divertido de usar e dá vontade de continuar respondendo.",
    perguntasRespondidas: 10,
    creditosAcumulados: 600,
    curtidas: 32
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-mbcq3zj39v5l5c@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-mbcq3zj3b9q1d7@resize_w72_nl.webp"
    ],
    foto:"https://down-br.img.susercontent.com/file/br-11134233-7r98o-m7wzng6vdypd16_tn",
    nome: "lucas_pj88",
    data: "06/06/2025",
    comentario: "Produto de ótima qualidade, bem embalado e chegou rápido. O sistema motiva a participar e pontuar sempre.",
    perguntasRespondidas: 8,
    creditosAcumulados: 550,
    curtidas: 14
  },
  {
    fotos: [
    
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m4iv3peldebldb@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m4iv3pelg7gh94@resize_w72_nl.webp"
    ],
    foto:"https://down-br.img.susercontent.com/file/br-11134233-7r98o-ltsmwlaj8xkvba_tn",
    nome: "dani_trindade",
    data: "05/06/2025",
    comentario: "Chegou do jeito que eu esperava, ótimo acabamento. O site é bem pensado e realmente incentiva a voltar.",
    perguntasRespondidas: 13,
    creditosAcumulados: 610,
    curtidas: 21
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-mbpn4jvarnaf14@resize_w72_nl.webp"
    ],
    foto:"",
    nome: "felipe.199x",
    data: "03/06/2025",
    comentario: "Gostei bastante, produto simples e útil. O sistema funciona bem, mas poderia ter mais dinamicidade às vezes.",
    perguntasRespondidas: 6,
    creditosAcumulados: 440,
    curtidas: 9
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-lz3lw99iy88581@resize_w72_nl.webp"
    ],
    foto:"",
    nome: "camila.souza",
    data: "01/06/2025",
    comentario: "Produto chegou em bom estado e é bem feito. Achei a plataforma bem organizada e fácil de usar.",
    perguntasRespondidas: 11,
    creditosAcumulados: 590,
    curtidas: 27
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxtswdb3r2pi6f@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxtt3f5o8hj349@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-lxtt3f5o9w3jc5@resize_w72_nl.webp"
    ],
    foto:"",
    nome: "renato_lobo",
    data: "31/05/2025",
    comentario: "Veio como esperado, tudo certinho e útil. A plataforma funciona bem e permite progresso constante.",
    perguntasRespondidas: 9,
    creditosAcumulados: 570,
    curtidas: 17
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m68ppmd6y4cl73@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m68ppmd6wps5bb@resize_w72_nl.webp"
    ],
    foto:"",
    nome: "aline_mg22",
    data: "30/05/2025",
    comentario: "Muito bom, simples e bem acabado. A lógica da plataforma é excelente e dá vontade de seguir usando.",
    perguntasRespondidas: 10,
    creditosAcumulados: 600,
    curtidas: 30
  },
  {
    fotos: [
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65emkst8khec9@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65emkst9z1ucd@resize_w72_nl.webp",
      "https://down-br.img.susercontent.com/file/br-11134103-7r98o-m65emkstbdmabd@resize_w72_nl.webp"
    ],
    foto:"https://down-br.img.susercontent.com/file/br-11134233-7r98o-m2sczwwhwetv1a_tn",
    nome: "tiozao360",
    data: "28/05/2025",
    comentario: "Entrega rápida e o produto é funcional. Respondi as perguntas e consegui resgatar sem dificuldade.",
    perguntasRespondidas: 7,
    creditosAcumulados: 500,
    curtidas: 12
  }
];



const comentarios = ()=>{
    const container_comentarios = document.querySelector(".container_comentarios")
    avaliacoes.forEach((res)=>{
       
      //container de cada comentario
      const caixa_comentario = document.createElement("div")
      caixa_comentario.classList.add("caixa_comentario")
      container_comentarios.appendChild(caixa_comentario)


      //container_foto comentario
      const container_foto = document.createElement("div")
      container_foto.classList.add("container_foto")
      caixa_comentario.appendChild(container_foto)

      const container_perfil = document.createElement("div")
      container_perfil.classList.add("container_perfil")
      container_foto.appendChild(container_perfil)

      if(res.foto){
      //foto de perfil
      const foto_perfil = document.createElement("img")
      foto_perfil.setAttribute("src",res.foto)
      container_perfil.appendChild(foto_perfil)
    }else{
       const foto_perfil = document.createElement("div")
        foto_perfil.innerHTML=`<svg width="30" height="40" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="23" height="23" rx="4" stroke="" fill="none"/>
            <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          `
        container_perfil.appendChild(foto_perfil)
    }

      //container informacoes comentario
      const container_informacoes_pessoa = document.createElement("div")
      container_informacoes_pessoa.classList.add("container_informacoes_pessoa")
      caixa_comentario.appendChild(container_informacoes_pessoa)
      
      //nome

      const nome_pessoa = document.createElement("p")
      nome_pessoa.textContent=res.nome
      nome_pessoa.classList.add("nome_pessoa")
      container_informacoes_pessoa.appendChild(nome_pessoa)

      //estrelas

        const container_estrelas = document.createElement("div")
        container_estrelas.classList.add("estrelas_comentario")
      for(let i = 0; i <= 4; i++){
        const estrelas = document.createElement("div")
        estrelas.innerHTML=`<svg width="15" height="15" viewBox="0 0 24 24" fill="#f4511e" xmlns="http://www.w3.org/2000/svg">
       <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" stroke="#f4511e" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> `
        container_estrelas.appendChild(estrelas)
      }
      container_informacoes_pessoa.appendChild(container_estrelas)


      //data do comentario
      const data_comentario = document.createElement("p")
      data_comentario.textContent=res.data
      data_comentario.classList.add("data_comentario")
      container_informacoes_pessoa.appendChild(data_comentario)

      //opnião
      const opiniao_comentario = document.createElement("p")
      opiniao_comentario.textContent=res.comentario
      opiniao_comentario.classList.add("opniao_comentario")
      container_informacoes_pessoa.appendChild(opiniao_comentario)


      //container fotos videos comentario
      const container_fotos_videos_comentario = document.createElement("div")
      container_fotos_videos_comentario.classList.add("container_fotos_videos_comentario")
      container_informacoes_pessoa.appendChild(container_fotos_videos_comentario)

      res.fotos.forEach((res)=>{

        //container de cada imagem
        const container_img_produto = document.createElement("div")
        container_img_produto.classList.add("container_img_produto")
        container_fotos_videos_comentario.appendChild(container_img_produto)


        // atençao colocar as imagens aqui!!!!!!

        const fotos = document.createElement("img")
        fotos.setAttribute("src",res)
        container_img_produto.appendChild(fotos)
      })


      //container curtidas

      const container_curtidas = document.createElement("div")
      container_curtidas.classList.add("container_curtidas")

      container_informacoes_pessoa.appendChild(container_curtidas)

      //svg like 
      const like = document.createElement("div")
      like.innerHTML=`<svg width="16" height="16" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>like [#1386]</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -760.000000)" fill="grey">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M163,610.021159 L163,618.021159 C163,619.126159 163.93975,620.000159 165.1,620.000159 L167.199999,620.000159 L167.199999,608.000159 L165.1,608.000159 C163.93975,608.000159 163,608.916159 163,610.021159 M183.925446,611.355159 L182.100546,617.890159 C181.800246,619.131159 180.639996,620.000159 179.302297,620.000159 L169.299999,620.000159 L169.299999,608.021159 L171.104948,601.826159 C171.318098,600.509159 172.754498,599.625159 174.209798,600.157159 C175.080247,600.476159 175.599997,601.339159 175.599997,602.228159 L175.599997,607.021159 C175.599997,607.573159 176.070397,608.000159 176.649997,608.000159 L181.127196,608.000159 C182.974146,608.000159 184.340196,609.642159 183.925446,611.355159" id="like-[#1386]">
                      </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            `
      container_curtidas.appendChild(like)

      //quantidade de curidads
      const quantidade_curtidas = document.createElement("p")
      quantidade_curtidas.classList.add("quantidade_curtidas")
      quantidade_curtidas.textContent=`Útil (${res.curtidas})`
      container_curtidas.appendChild(quantidade_curtidas)

      let jaCurtio = false

      container_curtidas.addEventListener("click",()=>{
        if(!jaCurtio){
          jaCurtio = true
          res.curtidas++
          quantidade_curtidas.textContent=`Útil (${res.curtidas})`
          quantidade_curtidas.style.color="#f4511e"
          like.innerHTML=`<svg width="16" height="16" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>like [#1386]</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -760.000000)" fill="#f4511e">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M163,610.021159 L163,618.021159 C163,619.126159 163.93975,620.000159 165.1,620.000159 L167.199999,620.000159 L167.199999,608.000159 L165.1,608.000159 C163.93975,608.000159 163,608.916159 163,610.021159 M183.925446,611.355159 L182.100546,617.890159 C181.800246,619.131159 180.639996,620.000159 179.302297,620.000159 L169.299999,620.000159 L169.299999,608.021159 L171.104948,601.826159 C171.318098,600.509159 172.754498,599.625159 174.209798,600.157159 C175.080247,600.476159 175.599997,601.339159 175.599997,602.228159 L175.599997,607.021159 C175.599997,607.573159 176.070397,608.000159 176.649997,608.000159 L181.127196,608.000159 C182.974146,608.000159 184.340196,609.642159 183.925446,611.355159" id="like-[#1386]">
                      </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            `
          
        }else{
          jaCurtio = false
          res.curtidas--
          quantidade_curtidas.textContent=`Útil (${res.curtidas})`
          quantidade_curtidas.style.color="grey"
          like.innerHTML=`<svg width="16" height="16" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>like [#1386]</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -760.000000)" fill="grey">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M163,610.021159 L163,618.021159 C163,619.126159 163.93975,620.000159 165.1,620.000159 L167.199999,620.000159 L167.199999,608.000159 L165.1,608.000159 C163.93975,608.000159 163,608.916159 163,610.021159 M183.925446,611.355159 L182.100546,617.890159 C181.800246,619.131159 180.639996,620.000159 179.302297,620.000159 L169.299999,620.000159 L169.299999,608.021159 L171.104948,601.826159 C171.318098,600.509159 172.754498,599.625159 174.209798,600.157159 C175.080247,600.476159 175.599997,601.339159 175.599997,602.228159 L175.599997,607.021159 C175.599997,607.573159 176.070397,608.000159 176.649997,608.000159 L181.127196,608.000159 C182.974146,608.000159 184.340196,609.642159 183.925446,611.355159" id="like-[#1386]">
                      </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            `
        }
        
      })

    })

    

}



const perguntasShopee = [
  {
    pergunta: "1. O que você acha da variedade de produtos na Shopee?",
    opcoes: [
      { texto: "Excelente, encontro de tudo", creditos: 35 },
      { texto: "Boa, tem bastante opção", creditos: 30 },
      { texto: "Poderia ter mais opções", creditos: 25 },
      { texto: "Pouca variedade", creditos: 20 }
    ]
  },
  {
    pergunta: "2. Os preços da Shopee são competitivos?",
    opcoes: [
      { texto: "Muito baratos", creditos: 35 },
      { texto: "Normais", creditos: 30 },
      { texto: "Às vezes caros", creditos: 25 },
      { texto: "Sempre caros", creditos: 20 }
    ]
  },
  {
    pergunta: "3. O sistema de cupons na Shopee é útil?",
    opcoes: [
      { texto: "Sim, uso sempre", creditos: 35 },
      { texto: "Uso às vezes", creditos: 30 },
      { texto: "Quase nunca consigo", creditos: 25 },
      { texto: "Nunca uso", creditos: 20 }
    ]
  },
  {
    pergunta: "4. Você confia nos vendedores da Shopee?",
    opcoes: [
      { texto: "Sim, confio na maioria", creditos: 35 },
      { texto: "Só nos com boa avaliação", creditos: 30 },
      { texto: "Já tive problemas", creditos: 25 },
      { texto: "Não confio", creditos: 20 }
    ]
  },
  {
    pergunta: "5. O que acha do tempo de entrega da Shopee?",
    opcoes: [
      { texto: "Muito rápido", creditos: 35 },
      { texto: "Razoável", creditos: 30 },
      { texto: "Demora um pouco", creditos: 25 },
      { texto: "Demora demais", creditos: 20 }
    ]
  },
  {
    pergunta: "6. O site/app da Shopee é fácil de usar?",
    opcoes: [
      { texto: "Muito fácil", creditos: 35 },
      { texto: "Fácil", creditos: 30 },
      { texto: "Um pouco confuso", creditos: 25 },
      { texto: "Difícil", creditos: 20 }
    ]
  },
  {
    pergunta: "7. A Shopee entrega corretamente os produtos?",
    opcoes: [
      { texto: "Sempre recebo certo", creditos: 35 },
      { texto: "Às vezes vem certo", creditos: 30 },
      { texto: "Já veio errado", creditos: 25 },
      { texto: "Quase nunca vem certo", creditos: 20 }
    ]
  },
  {
    pergunta: "8. Você costuma olhar avaliações antes de comprar?",
    opcoes: [
      { texto: "Sempre", creditos: 35 },
      { texto: "Quase sempre", creditos: 30 },
      { texto: "Às vezes", creditos: 25 },
      { texto: "Nunca olho", creditos: 20 }
    ]
  },
  {
    pergunta: "9. O sistema de devolução da Shopee é eficiente?",
    opcoes: [
      { texto: "Sim, bem fácil", creditos: 35 },
      { texto: "Razoável", creditos: 30 },
      { texto: "Demorado", creditos: 25 },
      { texto: "Difícil ou nunca usei", creditos: 20 }
    ]
  },
  {
    pergunta: "10. Você se sente seguro fazendo compras na Shopee?",
    opcoes: [
      { texto: "Sim, totalmente", creditos: 35 },
      { texto: "Na maioria das vezes", creditos: 30 },
      { texto: "Mais ou menos", creditos: 25 },
      { texto: "Inseguro", creditos: 20 }
    ]
  },
  {
    pergunta: "11. A central de ajuda da Shopee resolve bem os problemas?",
    opcoes: [
      { texto: "Sim, sempre resolve", creditos: 35 },
      { texto: "Às vezes resolve", creditos: 30 },
      { texto: "Demora muito", creditos: 25 },
      { texto: "Nunca resolveu", creditos: 20 }
    ]
  },
  {
    pergunta: "12. Como você avalia a qualidade geral dos produtos comprados?",
    opcoes: [
      { texto: "Sempre ótima", creditos: 35 },
      { texto: "Boa na maioria das vezes", creditos: 30 },
      { texto: "Média", creditos: 25 },
      { texto: "Ruim", creditos: 20 }
    ]
  },
  {
    pergunta: "13. Você aproveita promoções como 9.9, 11.11?",
    opcoes: [
      { texto: "Sim, sempre", creditos: 35 },
      { texto: "Às vezes", creditos: 30 },
      { texto: "Raramente", creditos: 25 },
      { texto: "Não me interesso", creditos: 20 }
    ]
  },
  {
    pergunta: "14. A Shopee facilita o rastreamento do pedido?",
    opcoes: [
      { texto: "Sim, muito fácil", creditos: 35 },
      { texto: "Ok", creditos: 30 },
      { texto: "Confuso às vezes", creditos: 25 },
      { texto: "Difícil de acompanhar", creditos: 20 }
    ]
  },
  {
    pergunta: "15. Você costuma usar o chat do vendedor?",
    opcoes: [
      { texto: "Sim, sempre", creditos: 35 },
      { texto: "Às vezes", creditos: 30 },
      { texto: "Raramente", creditos: 25 },
      { texto: "Nunca usei", creditos: 20 }
    ]
  },
  {
    pergunta: "16. As fotos dos produtos batem com o real?",
    opcoes: [
      { texto: "Sempre iguais", creditos: 35 },
      { texto: "Parecidas", creditos: 30 },
      { texto: "Diferentes às vezes", creditos: 25 },
      { texto: "Quase nunca", creditos: 20 }
    ]
  },
  {
    pergunta: "17. O frete grátis influencia suas compras?",
    opcoes: [
      { texto: "Sim, sempre", creditos: 35 },
      { texto: "Às vezes", creditos: 30 },
      { texto: "Pouco", creditos: 25 },
      { texto: "Não ligo", creditos: 20 }
    ]
  },
  {
    pergunta: "18. Já teve algum problema grave com a Shopee?",
    opcoes: [
      { texto: "Nunca", creditos: 35 },
      { texto: "Uma vez", creditos: 30 },
      { texto: "Algumas vezes", creditos: 25 },
      { texto: "Várias vezes", creditos: 20 }
    ]
  },
  {
    pergunta: "19. Você recomendaria a Shopee para amigos?",
    opcoes: [
      { texto: "Com certeza", creditos: 35 },
      { texto: "Talvez", creditos: 30 },
      { texto: "Pouco provável", creditos: 25 },
      { texto: "Não", creditos: 20 }
    ]
  },
  {
    pergunta: "20. Como você define sua experiência geral na Shopee?",
    opcoes: [
      { texto: "Muito positiva", creditos: 35 },
      { texto: "Boa", creditos: 30 },
      { texto: "Razoável", creditos: 25 },
      { texto: "Negativa", creditos: 20 }
    ]
  }
];

let carregamento = 0;



//carregar o catalogo de produto apos as perguntas
const criarProdutos = ()=>{
  const main = document.querySelector("#principal")
  

  //parte do parabens e escolher os produtos
  const container_parabens = document.createElement("p")
  container_parabens.innerHTML="🎉 Parabéns! Você concluiu a pesquisa da Shopee responde Você acaba de finalizar o questionário com sucesso. <br> Abaixo estão os detalhes da sua participação:"
  container_parabens.classList.add("container_parabens")
  main.appendChild(container_parabens)

  //total ganho

  const container_total_ganho = document.createElement("div")
  container_total_ganho.classList.add("container_total_ganho")
  main.appendChild(container_total_ganho)


  const total_respondido = document.createElement("p")
  total_respondido.textContent=`Total de perguntas respondidas: ${perguntasShopee.length}`
  container_total_ganho.appendChild(total_respondido)

  const total_ganho = document.createElement("p")
  total_ganho.textContent=`Total de créditos ganho até agora e de:${valor}`
  container_total_ganho.appendChild(total_ganho)

  const container_cart = document.querySelector(".container_menu")
  container_cart.innerHTML=`<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g id="Interface / Shopping_Cart_01">
      <path id="Vector" d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
</svg>
`

container_cart.addEventListener("click",()=>{
  
    const container_carrinho_compras = document.createElement("div")
    container_carrinho_compras.classList.add("container_carrinho_compras")
    const container_balao  = document.createElement("div")
    container_balao.classList.add("triangulo")
  
    container_carrinho_compras.appendChild(container_balao)
    const produtos_carrinho = document.createElement("div")
    produtos_carrinho.classList.add("produtos_carrinho")
    container_balao.appendChild(produtos_carrinho)

  if(carrinho_compras.size){
    carrinho_compras.forEach((res,index)=>{

      const container_produto_carrinho = document.createElement("div")
      container_produto_carrinho.classList.add("container_produto_carrinho")
      produtos_carrinho.appendChild(container_produto_carrinho)

      const container_foto_carrinho = document.createElement("div")
      container_foto_carrinho.classList.add("container_foto_carrinho")
      container_produto_carrinho.appendChild(container_foto_carrinho)

      const img_carrinho = document.createElement("img")
      img_carrinho.setAttribute("src",res.produto_foto)
      container_foto_carrinho.appendChild(img_carrinho)

      const nome_prod_carrinho = document.createElement("p")
      nome_prod_carrinho.classList.add("nome_prod_carrinho")
      nome_prod_carrinho.textContent=`${res.produto_titulo}`
      nome_prod_carrinho.style.fontSize="10px"
      nome_prod_carrinho.style.color="black"
      container_produto_carrinho.appendChild(nome_prod_carrinho)


      const container_lixeira_prod = document.createElement("div")
      container_lixeira_prod.classList.add("container_lixeira_prod")
      container_lixeira_prod.innerHTML=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`
      container_produto_carrinho.appendChild(container_lixeira_prod)


      container_lixeira_prod.addEventListener("click",()=>{

        
        carrinho_compras.delete(index)
        container_produto_carrinho.remove()
        numero_produtos.textContent=carrinho_compras.size


      })

    })
  }else{
    produtos_carrinho.textContent=`Seu carrinho esta vazio`
  }

    main.appendChild(container_carrinho_compras)

    main.addEventListener("click",()=>{
      container_carrinho_compras.style.display="none"
    })

})

window.numero_produtos = document.createElement("p")
numero_produtos.textContent=carrinho_compras.size
numero_produtos.classList.add("numero_produtos")
container_cart.appendChild(numero_produtos)

const container_creditos_menu = document.querySelector(".container_creditos_menu")
container_creditos_menu.style.gap="0px"


const produtos = document.querySelector(".produtos")
produtos.style.display="flex"

const subt = document.querySelector(".subt")
subt.textContent="Troque seus creditos por produtos"


console.log(respondeu_tudo)


}




const criar_perguntas = () => {
  const main = document.querySelector("#principal");
  const produtos = document.querySelector(".produtos")
  const subt = document.querySelector(".subt")
  produtos.style.display="none"
  subt.innerHTML=""
  main.innerHTML = "";

  if (contador >= perguntasShopee.length) {
    respondeu_tudo = true
    criarProdutos()
    return; 
  }else{
    const container_progresso = document.createElement("div");
  container_progresso.classList.add("container_progresso");
  main.appendChild(container_progresso);

  const nome_pregresso = document.createElement("p");
  nome_pregresso.classList.add("nome_pregresso");
  nome_pregresso.textContent = "Progresso:";
  container_progresso.appendChild(nome_pregresso);

  const container_barra_carregamento = document.createElement("div");
  container_barra_carregamento.classList.add("container_barra_carregamento");
  container_progresso.appendChild(container_barra_carregamento);

  const barra_carregamento = document.createElement("div");
  barra_carregamento.classList.add("barra_carregamento");
  barra_carregamento.style.width = `${carregamento}%`; 
  container_barra_carregamento.appendChild(barra_carregamento);

  
  const container_pergunta = document.createElement("div");
  container_pergunta.classList.add("container_pergunta");
  main.appendChild(container_pergunta);

  const pergunta = document.createElement("p");
  pergunta.classList.add("pergunta");
  pergunta.textContent = perguntasShopee[contador].pergunta;
  container_pergunta.appendChild(pergunta);

  const container_resposta = document.createElement("div");
  container_resposta.classList.add("container_resposta");
  container_pergunta.appendChild(container_resposta);

  
  const btn_proximo = document.createElement("div");
  btn_proximo.classList.add("btn_responder");
  btn_proximo.style.display = "none";
  btn_proximo.textContent = "Próxima pergunta";
  btn_proximo.classList.add("posicionar")
  container_resposta.appendChild(btn_proximo);

 
  let credito_resposta = 0;


  perguntasShopee[contador].opcoes.forEach((res) => {
    const container = document.createElement("div");
    container.classList.add("container");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";

    const resposta = document.createElement("p");
    resposta.textContent = res.texto;

    container.appendChild(radio);
    container.appendChild(resposta);
    container_resposta.appendChild(container);

  
    radio.addEventListener("click", () => {
      btn_proximo.style.display = "flex";
      credito_resposta = res.creditos;
    });
  });

  btn_proximo.onclick = () => {
    contador++;
    valor += credito_resposta;
    creditos_texto.innerHTML = `Créditos: ${valor}`;
    carregamento += 5;
    criar_perguntas();
  };
  }
  
};





const btn_perguntas = document.querySelector(".btn_responder")
btn_perguntas.addEventListener("click",()=>{
  criar_perguntas()
})






comentarios()
criar_carrolsel()

