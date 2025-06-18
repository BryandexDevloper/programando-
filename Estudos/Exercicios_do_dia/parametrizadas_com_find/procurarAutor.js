const prompt = require('prompt-sync')();

const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", ano: 1881 },
  { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 },
  { titulo: "1984", autor: "George Orwell", ano: 1949 },
];

const nomeAutor = prompt(" Digite o nome do autor ")


function buscarLivroPorAutor(nomeAutor) {
    const resultado = livros.find((res)=>{
        return res.autor.toLocaleLowerCase() === nomeAutor.toLocaleLowerCase()
    })

    if(resultado){
    
        console.log(resultado.titulo +"  "+ resultado.autor +"  "+ resultado.ano)

    }
}

// Exemplo de uso:
buscarLivroPorAutor(nomeAutor)
// Esperado: { titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988 }
