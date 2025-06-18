    const conteudo = document.querySelector(".container-cadastro-produtos")
                                                

    const produtos = [
    {
        imagemproduto: "https://th.bing.com/th/id/OIP.5rSJWfPlYa5ZmMqC-x_FjAHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7",
        titulo: "Fone de Ouvido Bluetooth",
        descricao: "Fone sem fio com cancelamento de ruído, bateria de até 20h e microfone embutido.",
        preco: 149.90,
        valor: "R$ 149,90"
    },
    {
        imagemproduto: "https://th.bing.com/th/id/OIP.Mz3Htz1ksP4vMq0_7HNlTgHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7",
        titulo: "Mouse Gamer RGB",
        descricao: "Mouse ergonômico com 6 botões programáveis e iluminação RGB.",
        preco: 89.99,
        valor: "129488"
    },
    {
        imagemproduto: "https://th.bing.com/th/id/OIP.PQRYxpxA8tot0xTCw6xF7gHaEl?w=309&h=191&c=7&r=0&o=5&pid=1.7",
        titulo: "Teclado Mecânico ABNT2",
        descricao: "Teclado mecânico com switches br azuis, ideal para digitação e jogos.",
        preco: 239.50,
        valor: "R$ 239,50"
    },
    {
        imagemproduto: "https://th.bing.com/th/id/OIP.0Ykkce0q8lBMTzaa82BvFgHaHa?w=210&h=210&c=7&r=0&o=5&pid=1.7",
        titulo: "Monitor 24\" Full HD",
        descricao: "Tela LED de 24 polegadas com resolução 1080p e conexão HDMI/VGA.",
        preco: 749.00,
        valor: "R$ 749,00"
    },
    {
        imagemproduto: "https://th.bing.com/th/id/OIP.5JgbaRqUwYnWlSUGPuwRUAHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
        titulo: "Cadeira Gamer Reclinável",
        descricao: "Cadeira ergonômica com apoio lombar e regulagem de altura.",
        preco: 1299.99,
        valor: "R$ 1.299,99"
    }
    ];



    const criarProdutos=(res,indice)=>{
        //container informações do produtop
        const div_produto_container = document.createElement("div")
        div_produto_container.setAttribute("id","c"+indice)
        div_produto_container.style.width="100%"
        div_produto_container.style.height="100px"
        div_produto_container.style.display="flex"
        div_produto_container.style.alignItems="center"
        div_produto_container.style.justifyContent = "center";
        div_produto_container.style.textAlign="center"

        conteudo.appendChild(div_produto_container)
        //container da imagem do produto//
        const foto_produto_container = document.createElement("div")
        foto_produto_container.setAttribute("id","f"+indice)
        foto_produto_container.style.width="80px"
        foto_produto_container.style.height="100%"
        foto_produto_container.style.display="flex"
        div_produto_container.appendChild(foto_produto_container)

        //imagem do produto
        const img_produto = document.createElement("img")
        img_produto.setAttribute("src",res.imagemproduto)
        img_produto.classList.add("fontes")
        foto_produto_container.appendChild(img_produto)

        //titulo
        const titulo_produto = document.createElement("p")
        titulo_produto.classList.add("fontes")
        titulo_produto.innerHTML=res.titulo
        div_produto_container.appendChild(titulo_produto)
        //descriçao
        const descricao_produto = document.createElement("p")
        descricao_produto.classList.add("fontes")
        descricao_produto.innerHTML=res.descricao
        div_produto_container.appendChild(descricao_produto)

        //valor antigo
        const valor_produto_antigo=document.createElement("s")
        valor_produto_antigo.classList.add("fontes")
        valor_produto_antigo.innerHTML="De "+res.valor
        div_produto_container.appendChild(valor_produto_antigo)

        //valor atual
        const valor_produto_atual=document.createElement("p")
        valor_produto_atual.classList.add("fontes")
        valor_produto_atual.innerHTML=res.preco.toLocaleString("pt-BR",{
            style:"currency",
            currency:"BRL"
        })
        div_produto_container.appendChild(valor_produto_atual)

        
    }


    produtos.forEach((res,indice)=>{
        criarProdutos(res,indice)
    })



    const titulo_add = document.querySelector("#titulo");
    const descri_add = document.querySelector("#descri");
    const valor_antigo_add = document.querySelector("#valor_antigo");
    const valor_atual_add = document.querySelector("#valor_atual");
    const foto_produto_add = document.querySelector("#foto_produto");




    const adicionar_produtos = document.querySelector(".add-svg")
    const fechar_adicionar_produtos=document.querySelector("#confirmar")
    const container_informacoes_produto=document.querySelector(".container-informacoes-produto-add")


    adicionar_produtos.addEventListener("click",()=>{
    container_informacoes_produto.style.display="flex"
    })


    fechar_adicionar_produtos.addEventListener("click",()=>{
        container_informacoes_produto.style.display="none"

        const novoProduto = {
        imagemproduto: foto_produto_add.value,
        titulo: titulo_add.value,
        descricao: descri_add.value,
        preco: parseFloat(valor_atual_add.value),
        valor: parseFloat(valor_antigo_add.value)
        }

        produtos.push(novoProduto)
        criarProdutos(novoProduto,produtos.length -1)

        titulo_add.value = ""
        descri_add.value  = ""
        valor_antigo_add.value = ""
        valor_atual_add.value = ""
        foto_produto_add.value = ""


        
    })


 

    //metodo find


    const BuscarProdutos=(nome)=>{
        const resultado = produtos.find((res)=>{
            return res.titulo.toLocaleLowerCase() === nome.toLocaleLowerCase()
        })
        return resultado
    }




const btn_pesquisar = document.querySelector(".botao-pesquisar")
btn_pesquisar.addEventListener("click", () => {
const input_pesquisar = document.querySelector("#pesquisa") 


const resultado = Buscardrofutos(input_pesquisar.value)
console.log(resultado)
});


