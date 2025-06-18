const pokemons = [
  {
    pokemon_nome: "Pikachu",
    poder: 100,
    vida: 80,
    tipo: "Elétrico",
    defesa: 60,
    link: "https://media.tenor.com/6XLsvhpU61wAAAAj/run-pikachu.gif"
  },
  {
    pokemon_nome: "Charizard",
    poder: 150,
    vida: 120,
    tipo: "Fogo/Voador",
    defesa: 85,
    link: "https://media.tenor.com/9nBgEcu8e2IAAAAi/charizard-pokemon.gif"
  },
  {
    pokemon_nome: "Bulbasaur",
    poder: 90,
    vida: 100,
    tipo: "Planta/Veneno",
    defesa: 70,
    link: "https://media.tenor.com/6nHb-yHC2pkAAAAi/bulbasaur.gif"
  },
  {
    pokemon_nome: "Squirtle",
    poder: 85,
    vida: 95,
    tipo: "Água",
    defesa: 80,
    link: "https://media.tenor.com/1kwghmR6tkQAAAAi/gggg.gif"
  },
  {
    pokemon_nome: "Gengar",
    poder: 130,
    vida: 90,
    tipo: "Fantasma/Veneno",
    defesa: 65,
    link: "https://media.tenor.com/EbqrdobATpAAAAAi/gengar.gif"
  },
  {
    pokemon_nome: "Lucario",
    poder: 145,
    vida: 110,
    tipo: "Lutador/Metálico",
    defesa: 90,
    link: "https://media.tenor.com/o-pvxUmxF_MAAAAi/lucario.gif"
  },
  {
    pokemon_nome: "Dragonite",
    poder: 160,
    vida: 150,
    tipo: "Dragão/Voador",
    defesa: 100,
    link: "https://media.tenor.com/uiWSnK1MQq0AAAAi/dragonite-pokemon.gif"
  },
  {
    pokemon_nome: "Jigglypuff",
    poder: 60,
    vida: 130,
    tipo: "Fada",
    defesa: 55,
    link: "https://media.tenor.com/bmsL9mv6FQYAAAAm/floating-pink.webp"
  },
  {
    pokemon_nome: "Alakazam",
    poder: 155,
    vida: 75,
    tipo: "Psíquico",
    defesa: 50,
    link: "https://media.tenor.com/lDABrz9A5rAAAAAi/pokemon-kanto.gif"
  },
  {
    pokemon_nome: "Snorlax",
    poder: 120,
    vida: 200,
    tipo: "Normal",
    defesa: 95,
    link: "https://media.tenor.com/3Qj2zvHVl40AAAAi/snorlax-sleeping.gif"
  }
];

const inicio_pokemon = document.querySelector(".container-inicio-pokemon")
const pokemon = document.querySelector(".video-pokemon")
const nome_pokemon = document.querySelector("#nome-pokemon")
const btn_proximo = document.querySelector("#proximo")
const btn_anterior = document.querySelector("#anterior")
const img_pokemon = document.querySelector("#imagem-pokemon")

//poderes
const poderes = document.querySelector("#poder")
const vidas = document.querySelector("#vida")
const tipos = document.querySelector("#tipo")
const defesas = document.querySelector("#defesa")


let contador = 0
const atualizarTela=()=>{
    const atual = pokemons[contador]
    img_pokemon.setAttribute("src",atual.link)
    nome_pokemon.innerHTML=atual.pokemon_nome
    poderes.innerHTML=atual.poder
    vidas.innerHTML=atual.vida
    tipos.innerHTML=atual.tipo
    defesas.innerHTML=atual.defesa
}


btn_proximo.addEventListener("click",()=>{
   contador++
   if(contador >= pokemons.length){
    contador = 0
   }

   atualizarTela()
})

btn_anterior.addEventListener("click",()=>{
    contador--
    if(contador < 0){
        contador = pokemons.length -1
    }

    atualizarTela()
})

const input_nome = document.querySelector("#pesquisa")


input_nome.addEventListener("input",()=>{
   const nome = input_nome.value

   const pesquisa = pokemons.find((res)=>{
    return res.pokemon_nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
   })

   
    
   if(pesquisa){
    
    img_pokemon.setAttribute("src",pesquisa.link)
    nome_pokemon.innerHTML=pesquisa.pokemon_nome
    poderes.innerHTML=pesquisa.poder
    vidas.innerHTML=pesquisa.vida
    tipos.innerHTML=pesquisa.tipo
    defesas.innerHTML=pesquisa.defesa
   }
   
    
})



// input_nome.addEventListener("input",()=>{
  
//   const resultado = pokemons.find((res)=>{
//     return res.pokemon_nome.toLocaleLowerCase() === input_nome.value.toLocaleLowerCase()
//   })


//     if(pokemons){
//       img_pokemon.setAttribute("src",pesquisa.link)
//       nome_pokemon.innerHTML=pesquisa.pokemon_nome
//       poderes.innerHTML=pesquisa.poder
//       vidas.innerHTML=pesquisa.vida
//       tipos.innerHTML=pesquisa.tipo
//       defesas.innerHTML=pesquisa.defesa
//     }
   
    

   
// })



inicio_pokemon.addEventListener("click",()=>{
    contador = 0
    atualizarTela()
})

atualizarTela()


