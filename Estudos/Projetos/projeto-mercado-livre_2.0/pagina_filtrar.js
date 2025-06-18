const produtos = new Map();

// Adicionando manualmente cada produto usando o mesmo conteúdo do seu array:

produtos.set(1, {
  id: 1,
  nome: "Notebook",
  categoria: "Informática",
  precoAntigo: 3890,
  precoAtual: 3500,
  desconto: 10,
  freteGratis: true,
  envioFull: true,
  descricao: "Notebook com 8GB RAM e SSD 256GB",
  imagem: "https://th.bing.com/th/id/OIP.YGRsq17zR5dpiOsxDbGHbQHaHa?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
  estoque: 25,
  fabricante: "Dell",
  anoLancamento: 2022,
  avaliacao: 4.5,
  vendidos: 320,
  pesoKg: 1.8,
  quantidade: 0
});

produtos.set(2, {
  id: 2,
  nome: "Mouse Sem Fio",
  categoria: "Informática",
  precoAntigo: 100,
  precoAtual: 80,
  desconto: 20,
  freteGratis: true,
  envioFull: false,
  descricao: "Mouse óptico sem fio 2.4GHz",
  imagem: "https://th.bing.com/th/id/OIP.o7AQ67bm6ljZtXydYu-OTAHaHa?w=212&h=212&c=7&r=0&o=7&pid=1.7&rm=3",
  estoque: 150,
  fabricante: "Logitech",
  anoLancamento: 2021,
  avaliacao: 4.7,
  vendidos: 1200,
  pesoKg: 0.1,
  quantidade: 0
});

produtos.set(3, {
  id: 3,
  nome: "Geladeira Duplex",
  categoria: "Eletrodoméstico",
  precoAntigo: 3142,
  precoAtual: 2200,
  desconto: 30,
  freteGratis: false,
  envioFull: true,
  descricao: "Geladeira 400L Inox",
  imagem: "https://th.bing.com/th/id/OIP.JBZrQayP_NbBXP-eyTPXuAHaHa?w=196&h=202&c=7&r=0&o=7&pid=1.7&rm=3",
  estoque: 10,
  fabricante: "Brastemp",
  anoLancamento: 2020,
  avaliacao: 4.3,
  vendidos: 87,
  pesoKg: 60,
  quantidade: 0
});

produtos.set(4, {
  id: 4,
  nome: "Smartphone 128GB",
  categoria: "Eletrônico",
  precoAntigo: 2500,
  precoAtual: 1500,
  desconto: 40,
  freteGratis: true,
  envioFull: false,
  descricao: "Smartphone Android com 128GB de memória",
  imagem: "https://th.bing.com/th/id/OIP.hyiWMN9BfmgoB8M5rhoXlQHaHa?w=194&h=193&c=7&r=0&o=7&pid=1.7&rm=3",
  estoque: 60,
  fabricante: "Samsung",
  anoLancamento: 2023,
  avaliacao: 4.6,
  vendidos: 980,
  pesoKg: 0.18,
  quantidade: 0
});

produtos.set(5, {
  id: 5,
  nome: "TV 50\" 4K",
  categoria: "Eletrônico",
  precoAntigo: 6000,
  precoAtual: 3000,
  desconto: 50,
  freteGratis: false,
  envioFull: true,
  descricao: "Smart TV 50 polegadas 4K com HDR",
  imagem: "https://th.bing.com/th/id/OIP.4KtskGqzRE2XQI8Z5XWdzAHaGL?w=228&h=190&c=7&r=0&o=7&pid=1.7&rm=3",
  estoque: 34,
  fabricante: "LG",
  anoLancamento: 2021,
  avaliacao: 4.8,
  vendidos: 670,
  pesoKg: 12,
  quantidade: 0
});
//carrinho de compras
let carrinho_de_compras = new Map()
//carrinho de compras



//funcaçao para calcular os produtos indidividualmente

function calcularProduto(carrinho_de_compras){
 let acumulador = 0
  carrinho_de_compras.forEach((res)=>{
    const total = res.quantidade * res.valor
    acumulador+=total
    console.log( " Total dos produtos e: "+ acumulador)
    console.log(res.nome + " Total do produto "+total)
    
  })
  
}



//funcaçao para calcular os produtos indidividualmente

const colocar_produtos = (produtos,chave)=>{




  

const container_produtos_existentes = document.querySelector(".container-produtos-existentes")


//container de informaçoes produto
const container_caixa_produto = document.createElement("div")
container_caixa_produto.setAttribute("class","container-caixa-produto")
container_caixa_produto.style.width="100%"
container_caixa_produto.style.height="230px"
container_caixa_produto.style.borderBottom="2px solid grey"
container_caixa_produto.style.display="flex"
container_caixa_produto.style.justifyContent="space-between"
container_caixa_produto.style.gap="5px"
container_caixa_produto.style.backgroundColor="white"
container_produtos_existentes.appendChild(container_caixa_produto)
//container de informaçoes produto



//container foto do produto 
const container_foto_produto = document.createElement("div")
container_foto_produto.setAttribute("class","container-foto-produto")
container_foto_produto.style.width="20%"
container_foto_produto.style.height="100%"
container_foto_produto.style.display="flex"
container_foto_produto.style.justifyContent="center"
container_foto_produto.style.alignItems="center"


container_caixa_produto.appendChild(container_foto_produto)
//container foto do produto 


// imagem do produto 
const imagem_produto = document.createElement("img")
imagem_produto.setAttribute("class","imagem-produto")
imagem_produto.setAttribute("src",produtos.imagem)
imagem_produto.style.width="100%"
container_foto_produto.appendChild(imagem_produto)
//imagem do produto 





//container informacoes produto
const container_informacoes_produto = document.createElement("div")
container_informacoes_produto.setAttribute("class","container_informacoes_produto")
container_informacoes_produto.style.width="75%"
container_informacoes_produto.style.height="100%"
container_informacoes_produto.style.position="relative"
container_informacoes_produto.style.display="flex"
container_informacoes_produto.style.flexDirection="column"
container_informacoes_produto.style.padding="10px 0px 10px 0px"
container_caixa_produto.appendChild(container_informacoes_produto)
//container informacoes produto



//titulo produto
const titulo_produto = document.createElement("p")
titulo_produto.setAttribute("class","titulo_produto")
titulo_produto.style.fontSize="20px"
titulo_produto.innerHTML=produtos.nome
titulo_produto.style.marginBottom="10px"
container_informacoes_produto.appendChild(titulo_produto)
//titulo produto


//pequeno texto de onde a loja e 
const por_mercado = document.createElement("p")
por_mercado.classList.add("texto-pequeno-cinzaa")
por_mercado.innerHTML="Por 123Milhas"
por_mercado.style.marginBottom="10px"
container_informacoes_produto.appendChild(por_mercado)
//pequeno texto de onde a loja e 




//cont valor antigo e atual produot
const valor_antigo = document.createElement("s")
valor_antigo.setAttribute("class","valor_antigo")
valor_antigo.classList.add("texto-pequeno-cinza")
valor_antigo.innerHTML=produtos.precoAntigo.toLocaleString("pt-br",{
  style:"currency",
  currency:"BRL"
})
valor_antigo.style.marginBottom="10px"
container_informacoes_produto.appendChild(valor_antigo)


//container segura valor atual com desconto
const container_valor_atual_desconto = document.createElement("div")
container_valor_atual_desconto.setAttribute("class" , "container_valor_atual_desconto")
container_valor_atual_desconto.style.display="flex"
container_valor_atual_desconto.style.gap="10px"
container_valor_atual_desconto.style.marginBottom="10px"
container_informacoes_produto.appendChild(container_valor_atual_desconto)


//valor atual
const valor_atual = document.createElement("p")
valor_atual.setAttribute("class","valor-atual")
valor_atual.innerHTML=produtos.precoAtual.toLocaleString("pt-br",{
  style:"currency",
  currency:"BRL"
})
valor_atual.classList.add("texto-medio-preto")
container_valor_atual_desconto.appendChild(valor_atual)

const desconto_disponivel = document.createElement("p")
desconto_disponivel.setAttribute("class","desconto-disponivel")
desconto_disponivel.classList.add("texto-verde-medio")
desconto_disponivel.innerHTML=produtos.desconto + "% OFF"
container_valor_atual_desconto.appendChild(desconto_disponivel)
//cont valor antigo e atual produot



//const frete gratis
const frete_gratis = document.createElement("p")
frete_gratis.setAttribute("class","frete-gratis")
frete_gratis.classList.add("texto-verde-fundo-medio")
frete_gratis.innerHTML="Chegará grátis amanhã sábado"
container_informacoes_produto.appendChild(frete_gratis)
//const frete gratis


if(produtos.freteGratis === true){
  frete_gratis.style.display="flex"
}else{
  frete_gratis.style.display="none"
}


const botaoCompar = document.createElement("div")
botaoCompar.setAttribute("id",produtos.id)
botaoCompar.style.backgroundColor="blue"
botaoCompar.style.cursor="pointer"
botaoCompar.style.display="flex"
botaoCompar.style.color="white"
botaoCompar.style.width="200px"
botaoCompar.style.justifyContent="center"
botaoCompar.style.alignItems="center"
botaoCompar.style.padding="10px"
botaoCompar.style.marginTop="10px"
botaoCompar.style.borderRadius="8px"
container_informacoes_produto.appendChild(botaoCompar)


const btnComprarmenos = document.createElement("p")
btnComprarmenos.style.height="100%"
btnComprarmenos.style.width="50px"
btnComprarmenos.style.cursor="pointer"
btnComprarmenos.innerHTML="-"
btnComprarmenos.style.textAlign="center"
botaoCompar.appendChild(btnComprarmenos)

let quantidadeinfor= 0

const resultado_quantidade = document.createElement("p")
resultado_quantidade.style.height="100%"
resultado_quantidade.style.width="50px"
resultado_quantidade.style.cursor="pointer"
resultado_quantidade.style.textAlign="center"
resultado_quantidade.innerHTML= quantidadeinfor
botaoCompar.appendChild(resultado_quantidade)

const btnComprarmais = document.createElement("p")
btnComprarmais.style.height="100%"
btnComprarmais.style.textAlign="center"
btnComprarmais.style.width="50px"
btnComprarmais.style.cursor="pointer"
btnComprarmais.innerHTML="+"
botaoCompar.appendChild(btnComprarmais)



btnComprarmais.addEventListener("click",()=>{
quantidadeinfor++
if(quantidadeinfor > 0){
  btnColocarCarrinho.style.display="flex"
}

if(quantidadeinfor >= produtos.estoque){
  quantidadeinfor = produtos.estoque
  produtos.quantidade = produtos.estoque
 
}

produtos.quantidade = quantidadeinfor
resultado_quantidade.innerHTML= quantidadeinfor
console.log(produtos.quantidade)

/// Botão para colocar mais produtos no carrinho


})



btnComprarmenos.addEventListener("click",()=>{
  
  quantidadeinfor--
  if(quantidadeinfor <= 0){
    quantidadeinfor = 0
    btnColocarCarrinho.style.display="none"
    
  }
  produtos.quantidade = quantidadeinfor
  console.log(produtos.quantidade)

  
 resultado_quantidade.innerHTML= quantidadeinfor
  /// Botão para tirar produtos do carrinho



})



//carrinho de compra botao
const btnColocarCarrinho = document.createElement("div")
btnColocarCarrinho.style.width="200px"
btnColocarCarrinho.style.height="50px"
btnColocarCarrinho.style.backgroundColor="Blue"
btnColocarCarrinho.style.color="white"
btnColocarCarrinho.innerHTML="Adicionar ao carrinho"
btnColocarCarrinho.style.position="absolute"
btnColocarCarrinho.style.borderRadius="10px"
btnColocarCarrinho.style.cursor="pointer"
btnColocarCarrinho.style.top="70%"
btnColocarCarrinho.style.left="50%"
btnColocarCarrinho.style.display="none"
btnColocarCarrinho.style.justifyContent="center"
btnColocarCarrinho.style.alignItems="center"
container_informacoes_produto.appendChild(btnColocarCarrinho)
//carrinho de compra botao

btnColocarCarrinho.addEventListener("click",()=>{
  
let idProduto = produtos.id
let quantidadeProdutos = produtos.quantidade
let produtoNome = produtos.nome
let produtoValor = produtos.precoAtual
let produtoFoto = produtos.imagem
let ValorAntigo = produtos.precoAntigo
carrinho_de_compras.set(idProduto,{nome:produtoNome,valor:produtoValor,quantidade:quantidadeProdutos,imagem:produtoFoto,precoAntigo:ValorAntigo})
console.log(carrinho_de_compras)
calcularProduto(carrinho_de_compras)
  btncarrinho_finalizar.innerHTML = "Ver carrinho " + carrinho_de_compras.size;



  
})

//enviado pelo envio full
const envio_full = document.createElement("div")
envio_full.setAttribute("class","envio-full")
envio_full.style.display="flex"
envio_full.style.gap="10px"
container_informacoes_produto.appendChild(envio_full)

if(produtos.envioFull === true){
  envio_full.style.display="flex"
}else{
  envio_full.style.display="none"
}


const primeiro_paragrafo = document.createElement("p")
primeiro_paragrafo.setAttribute("class","primeiro-paragrafo")
primeiro_paragrafo.classList.add("texto-pequeno-cinzaa")
primeiro_paragrafo.innerHTML="Enviado pelo"
envio_full.appendChild(primeiro_paragrafo)

const segundo_paragrafo=document.createElement("p")
segundo_paragrafo.setAttribute("class","segundo-paragrafo")
segundo_paragrafo.classList.add("texto-medio-grosso")
segundo_paragrafo.innerHTML="FULL"

envio_full.appendChild(segundo_paragrafo)

//enviado pelo envio full

//container estrelas avaliaçoes e vendas etc..

const container_estrelas_avaliacoes = document.createElement("div")
container_estrelas_avaliacoes.setAttribute("class","container-estrelas-avaliacoes")
container_estrelas_avaliacoes.style.widht="100px"
container_estrelas_avaliacoes.style.height="30px"
container_estrelas_avaliacoes.style.display="flex"
container_estrelas_avaliacoes.style.justifyContent="center"
container_estrelas_avaliacoes.style.alignItems="center"
container_estrelas_avaliacoes.style.position="absolute"
container_estrelas_avaliacoes.style.top="30%"
container_estrelas_avaliacoes.style.right="10%"
container_informacoes_produto.appendChild(container_estrelas_avaliacoes)


//container estrelas avaliaçoes e vendas etc..


//container-quantidade-de-avaliacoes
const container_avaliacao = document.createElement("p")
container_avaliacao.setAttribute("class","avaliacaoes")

container_avaliacao.innerHTML="("+produtos.avaliacao +")"
//container-quantidade-de-avaliacoes
container_estrelas_avaliacoes.appendChild(container_avaliacao)

// SVG estrelas
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "90");
svg.setAttribute("height", "20");
svg.setAttribute("viewBox", "0 0 250 50");

const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
g.setAttribute("fill", "blue");

const pontos = [
  "10,1 13,10 23,10 15,16 18,25 10,19 2,25 5,16 -3,10 7,10",
  "60,1 63,10 73,10 65,16 68,25 60,19 52,25 55,16 47,10 57,10",
  "110,1 113,10 123,10 115,16 118,25 110,19 102,25 105,16 97,10 107,10",
  "160,1 163,10 173,10 165,16 168,25 160,19 152,25 155,16 147,10 157,10",
  "210,1 213,10 223,10 215,16 218,25 210,19 202,25 205,16 197,10 207,10"
];

pontos.forEach(pts => {
  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  polygon.setAttribute("points", pts);
  g.appendChild(polygon);
});

svg.appendChild(g);

// Agora adiciona o SVG no mesmo container onde está a avaliação
container_estrelas_avaliacoes.appendChild(svg);


//quantidade de vendas
const  quantidade_de_vendas = document.createElement("p")
quantidade_de_vendas.setAttribute("class","quantidade-vendas")

quantidade_de_vendas.innerHTML="("+produtos.vendidos + ")"
container_estrelas_avaliacoes.appendChild(quantidade_de_vendas)
//quantidade de vendas



}

//percorrer os produtos
produtos.forEach((res,chave)=>{
  colocar_produtos(res,chave)
})
//percorrer os produtos




const frete_check = document.getElementById("frete-check")


//filtrar produtos com frete gratis
frete_check.addEventListener("click",()=>{

  if(frete_check.checked === true){
    document.querySelector(".container-produtos-existentes").innerHTML = ""

    produtos.forEach((res)=>{
      if(res.freteGratis === true){
        colocar_produtos(res)
      }
    })
    
  }else{
    document.querySelector(".container-produtos-existentes").innerHTML = ""
    produtos.forEach((res)=>{
      colocar_produtos(res)
    })
  }
  
})
//filtrar produtos com frete gratis


//filtrar produtos com frete gratis e envio full

if(frete_check.checked === true && envio_full_check.checked === true){
  document.querySelector(".container-produtos-existentes").innerHTML = ""
  produtos.forEach((res)=>{
    if(res.freteGratis === true && res.envioFull === true){
      colocar_produtos(res)
    }
  })
}else{
  document.querySelector(".container-produtos-existentes").innerHTML = ""
  produtos.forEach((res)=>{
    colocar_produtos(res)
  })
}

//filtrar produtos com frete gratis e envio full


//filtrar frete full
const envio_full_check = document.querySelector("#envio-full-check")
envio_full_check.addEventListener("click",()=>{
  
if(envio_full_check.checked === true){
  document.querySelector(".container-produtos-existentes").innerHTML = ""
  produtos.forEach((res)=>{
    if(res.envioFull === true){
      colocar_produtos(res)
    }
  })
}else{
        document.querySelector(".container-produtos-existentes").innerHTML = ""
        produtos.forEach((res)=>{
          colocar_produtos(res)
        })

}


})
//filtrar frete full







//desconto off


// let contador = 0
// desconto10.addEventListener("click",()=>{
//   contador++
  
//   if(contador >= 2){
//   desconto10.style.color="green"
//   const resultado = produtos.filter(res => res.desconto == 10)
//   document.querySelector(".container-produtos-existentes").innerHTML = ""
//   resultado.forEach((res)=>{
//     colocar_produtos(res)
//     contador = 0
// })

//   }else if(contador >= 0){
//     desconto10.style.color="grey"
//     document.querySelector(".container-produtos-existentes").innerHTML = ""

//     produtos.forEach((res)=>{
//       colocar_produtos(res)
      
//     })
//   }
// })



// desconto20.addEventListener("click",()=>{
//   contador++
  
//   if(contador >= 2){
//   desconto20.style.color="green"
//   const resultado = produtos.filter(res => res.desconto == 20)
//   document.querySelector(".container-produtos-existentes").innerHTML = ""
//   resultado.forEach((res)=>{
//     colocar_produtos(res)
//     contador = 0
// })

//   }else if(contador >= 0){
//     desconto20.style.color="grey"
//     document.querySelector(".container-produtos-existentes").innerHTML = ""

//     produtos.forEach((res)=>{
//       colocar_produtos(res)
      
//     })
//   }
// })



// desconto30.addEventListener("click",()=>{
//   contador++
  
//   if(contador >= 2){
//   desconto30.style.color="green"
//   const resultado = produtos.filter(res => res.desconto == 30)
//   document.querySelector(".container-produtos-existentes").innerHTML = ""
//   resultado.forEach((res)=>{
//     colocar_produtos(res)
//     contador = 0
// })

//   }else if(contador >= 0){
//     desconto30.style.color="grey"
//     document.querySelector(".container-produtos-existentes").innerHTML = ""

//     produtos.forEach((res)=>{
//       colocar_produtos(res)
      
//     })
//   }
// })



// desconto40.addEventListener("click",()=>{
//   contador++
  
//   if(contador >= 2){
//   desconto40.style.color="green"
//   const resultado = produtos.filter(res => res.desconto == 40)
//   document.querySelector(".container-produtos-existentes").innerHTML = ""
//   resultado.forEach((res)=>{
//     colocar_produtos(res)
//     contador = 0
// })

//   }else if(contador >= 0){
//     desconto40.style.color="grey"
//     document.querySelector(".container-produtos-existentes").innerHTML = ""

//     produtos.forEach((res)=>{
//       colocar_produtos(res)
      
//     })
//   }
// })



// desconto50.addEventListener("click",()=>{
//   contador++
  
//   if(contador >= 2){
//   desconto50.style.color="green"
//   const resultado = produtos.filter(res => res.desconto == 50)
//   document.querySelector(".container-produtos-existentes").innerHTML = ""
//   resultado.forEach((res)=>{
//     colocar_produtos(res)
//     contador = 0
// })

//   }else if(contador >= 0){
//     desconto50.style.color="grey"
//     document.querySelector(".container-produtos-existentes").innerHTML = ""

//     produtos.forEach((res)=>{
//       colocar_produtos(res)
      
//     })
//   }
// })
//desconto off
const Filtrardescontos = [
  {
    element: document.getElementById("10%"),
    valor: 10
  },
  {
    element: document.getElementById("20%"),
    valor: 20
  },
  {
    element: document.getElementById("30%"),
    valor: 30
  },
  {
    element: document.getElementById("40%"),
    valor: 40
  },
  {
    element: document.getElementById("50%"),
    valor: 50
  }
];


Filtrardescontos.forEach((valor)=>{
  valor.element.addEventListener("click",()=>{
    contando++
    if(contando === 1){
      valor.element.style.color="green"
      document.querySelector(".container-produtos-existentes").innerHTML = "";
      produtos.forEach((res)=>{
        if(res.desconto ===  valor.valor){
          colocar_produtos(res)
        }
      })
    }else{
      contando = 0
      valor.element.style.color="grey"
      document.querySelector(".container-produtos-existentes").innerHTML = "";
      produtos.forEach((res)=>{
        colocar_produtos(res)
      })
    }
  })
})


const criar_carrinho_compra=(produto,chave)=>{


  if(carrinho_de_compras.size == 0){
    document.querySelector(".container-produtos-existentes").innerHTML=""
    document.querySelector(".container-produtos-existentes").innerHTML="Seu carrinho esta vazio!"
    produtos.forEach((res)=>{
      colocar_produtos(res)
    })
  }else{

  
  

  

  //container carrinho de compras !
  const container_carrinho = document.createElement("div")
  container_carrinho.style.width="100%"
  container_carrinho.style.height="auto"
  container_carrinho.style.backgroundColor="white"
  container_carrinho.style.padding="10px"
  container_carrinho.style.gap="10px"
  document.querySelector(".container-produtos-existentes").appendChild(container_carrinho)
//container carrinho de compras !

  const container_Inform = document.createElement("div")
  container_Inform.style.width="100%"
  container_Inform.style.height="50px"
  container_Inform.style.display="flex"
  container_Inform.style.alignItems="center"
  container_Inform.style.justifyContent="space-between"
  container_carrinho.appendChild(container_Inform)

  const produtos = document.createElement("p")
  produtos.style.color="grey"
  produtos.innerHTML=" Produtos "
  container_Inform.appendChild(produtos)

  const ContainerConjuntoInformativo = document.createElement("div")
  ContainerConjuntoInformativo.style.display="flex"
  ContainerConjuntoInformativo.style.gap="30px"
  container_Inform.appendChild(ContainerConjuntoInformativo)

  const precoUnitario = document.createElement("p")
  precoUnitario.innerHTML="Preço Unitario"
  precoUnitario.style.color="grey"
  ContainerConjuntoInformativo.appendChild(precoUnitario)


  const quantidade = document.createElement("p")
  quantidade.style.color="grey"
  quantidade.innerHTML="Quantidade"
  ContainerConjuntoInformativo.appendChild(quantidade)



  const preco_total = document.createElement("p")
  preco_total.style.color="grey"
  preco_total.innerHTML="Preço Total"
  ContainerConjuntoInformativo.appendChild(preco_total)

  const acoes = document.createElement("p")
  acoes.style.color="grey"
  acoes.innerHTML="Ações" 
  ContainerConjuntoInformativo.appendChild(acoes)
    
    calcularProduto(produto)
   
    

    produto.forEach((res,chave)=>{
      //container que segura tudo 
      const container_produto = document.createElement("div")
      container_produto.style.width="100%"
      container_produto.style.height="150px"
      container_produto.style.border="1px solid "
      container_produto.style.display="flex"
      container_produto.style.alignItems="center"
      container_produto.style.gap="10px"
      container_carrinho.appendChild(container_produto)
      //container que segura tudo 

      //container foto produto
      const container_foto_produto = document.createElement("div")
      container_foto_produto.style.width="20%"
      container_foto_produto.style.height="100%"
      container_foto_produto.style.border="1px solid"
      container_produto.appendChild(container_foto_produto)
      //container foto produto


      //foto do produto
      const img_produto = document.createElement("img")
      img_produto.setAttribute("src",res.imagem)
      img_produto.style.width="100%"
      container_foto_produto.appendChild(img_produto)
      //foto do produto

      // <!------>

      //Nome do produto
      const nome_produto= document.createElement("p")
      nome_produto.style.display="flex"
      nome_produto.style.color="black"
      nome_produto.style.flex="1"
      nome_produto.style.fontSize="20px"
      nome_produto.innerHTML=res.nome
      nome_produto.style.justifyContent="center"
      nome_produto.style.alignItems="center"
      container_produto.appendChild(nome_produto)
      //Nome do produto

      

      const container_preco_unitario = document.createElement("div")
      container_preco_unitario.style.display="flex"
      container_preco_unitario.style.gap="10px"
      container_preco_unitario.style.flex="1"
      container_produto.appendChild(container_preco_unitario)


      const precoAantigo = document.createElement("s")
      precoAantigo.style.color="grey"
      precoAantigo.innerHTML=res.precoAntigo.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
      })
      container_preco_unitario.appendChild(precoAantigo)

      const preco_atual_produto = document.createElement("p")
      preco_atual_produto.style.color="grey"
      preco_atual_produto.innerHTML=res.valor.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
      })
      container_preco_unitario.appendChild(preco_atual_produto)


            
      const botaoCompar = document.createElement("div")
      botaoCompar.setAttribute("id",produtos.id)
      botaoCompar.style.backgroundColor="blue"
      botaoCompar.style.cursor="pointer"
      botaoCompar.style.display="flex"
      botaoCompar.style.flex="1"
      botaoCompar.style.color="white"
      botaoCompar.style.width="100px"
      botaoCompar.style.justifyContent="center"
      botaoCompar.style.alignItems="center"
      botaoCompar.style.padding="10px"
      botaoCompar.style.marginTop="10px"
      botaoCompar.style.borderRadius="8px"
      container_produto.appendChild(botaoCompar)


      const btnComprarmenos = document.createElement("p")
      btnComprarmenos.style.height="100%"
      btnComprarmenos.style.width="50px"
      btnComprarmenos.style.cursor="pointer"
      btnComprarmenos.innerHTML="-"
      btnComprarmenos.style.textAlign="center"
      botaoCompar.appendChild(btnComprarmenos)



      const resultado_quantidade = document.createElement("p")
      resultado_quantidade.style.height="100%"
      resultado_quantidade.style.width="50px"
      resultado_quantidade.style.cursor="pointer"
      resultado_quantidade.style.textAlign="center"
      resultado_quantidade.innerHTML= res.quantidade
      botaoCompar.appendChild(resultado_quantidade)

      const btnComprarmais = document.createElement("p")
      btnComprarmais.style.height="100%"
      btnComprarmais.style.textAlign="center"
      btnComprarmais.style.width="50px"
      btnComprarmais.style.cursor="pointer"
      btnComprarmais.innerHTML="+"
      botaoCompar.appendChild(btnComprarmais)

      let calc = res.valor * res.quantidade


      let preco_total_produto = document.createElement("p")
      preco_total_produto.style.color="grey"
      preco_total_produto.innerHTML=calc.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
      })
      preco_total_produto.style.flex="1"
      container_produto.appendChild(preco_total_produto)

      const botaoExcuir = document.createElement("p")
      botaoExcuir.style.cursor="pointer"
      botaoExcuir.style.color="grey"
      botaoExcuir.innerHTML="Excluir"
          
      container_produto.appendChild(botaoExcuir)




      botaoExcuir.addEventListener("click",()=>{
        
        const confirmar = confirm("Tem certeza que desaja apagar este produto? ")

        if(confirmar){
          produto.delete(chave)
          container_produto.remove()
          console.log(carrinho_de_compras)
          
          
        }else{
          produtos.forEach((res)=>{
            criar_carrinho_compra(res)
          })
        }

       

      })
      btnComprarmenos.addEventListener("click",()=>{
        res.quantidade--
        if(res.quantidade < 1){
          res.quantidade = 0
          const confirmar = confirm("Deseja apagar este produto?")
          if(confirmar){
            produto.delete(chave)
            container_produto.remove()
          }else{
            res.quantidade = 1
            
          }
          
          
        }

         calc = res.valor * res.quantidade
        preco_total_produto.innerHTML=calc.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
      })
        resultado_quantidade.innerHTML= res.quantidade
        
       
        
      })

      btnComprarmais.addEventListener("click",()=>{
        res.quantidade++
        resultado_quantidade.innerHTML= res.quantidade
        calc = res.valor * res.quantidade
        preco_total_produto.innerHTML=calc.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL"
      })
        
      })
     

    })
    
  btncarrinho_finalizar.style.display="none"

    

}



      
}


carrinho_de_compras.forEach((produto)=>{
  criar_carrinho_compra(produto)
})



const carrinho_finalizar = document.querySelector(".container-opcoes2")
const btncarrinho_finalizar = document.createElement("div")
btncarrinho_finalizar.style.backgroundColor="blue"
btncarrinho_finalizar.style.height="50px"
btncarrinho_finalizar.style.width="130px"
btncarrinho_finalizar.style.borderRadius="10px"
btncarrinho_finalizar.style.display="flex"
btncarrinho_finalizar.style.alignItems="center"
btncarrinho_finalizar.style.justifyContent="center"
btncarrinho_finalizar.style.color="white"
btncarrinho_finalizar.style.cursor="pointer"
btncarrinho_finalizar.innerHTML="Ver carrinho " + carrinho_de_compras.size
carrinho_finalizar.appendChild(btncarrinho_finalizar)

btncarrinho_finalizar.addEventListener("click",()=>{
  document.querySelector(".container-produtos-existentes").innerHTML = "";
  criar_carrinho_compra(carrinho_de_compras)
  
})



//por preco

const filtrosPreco = [
  {
    element: document.getElementById("deate50"),
    min: 0,
    max: 50
  },
  {
    element: document.getElementById("de50a100"),
    min: 50,
    max: 100
  },
  {
    element: document.getElementById("de1000a2000"),
    min: 1000,
    max: 2000
  },
  {
    element: document.getElementById("de3000"),
    min: 3000,
    max: Infinity // sem limite superior
  }
];

let contando = 0
filtrosPreco.forEach((res)=>{
  res.element.addEventListener("click",()=>{
    contando++
    if(contando === 1){
      res.element.style.color="green"


      document.querySelector(".container-produtos-existentes").innerHTML = "";


     produtos.forEach((produto)=>{
      if(produto.precoAtual >= res.min && produto.precoAtual <= res.max){
        colocar_produtos(produto)
      }
     })


    }else{
      contando = 0
      res.element.style.color="grey"
      document.querySelector(".container-produtos-existentes").innerHTML = "";
      produtos.forEach((res)=>{
        colocar_produtos(res)
      })
    }

    
  })
})

let contador = 0
