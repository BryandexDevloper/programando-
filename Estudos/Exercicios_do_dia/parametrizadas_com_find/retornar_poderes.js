const prompt = require('prompt-sync')();
const pokemons = [
  { pokemon_nome: "Pikachu", poder: 100, vida: 80 },
  { pokemon_nome: "Charizard", poder: 150, vida: 120 },
  { pokemon_nome: "Bulbasaur", poder: 90, vida: 100 },
];

function infoPokemon(nome) {
  
    const resultado = pokemons.find((res)=>{
        return res.pokemon_nome === nome
    })

    console.log("Poder de: "+resultado.poder +"  "+ "Vida de: "+resultado.vida)
   
}

// Exemplo:
infoPokemon("Charizard")
// Esperado: "Poder: 150, Vida: 120"