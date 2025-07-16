let lista = []
let dados = localStorage.getItem("numero")
let resultado = JSON.parse(dados)
lista.push(resultado)


/// para mandarmos isso para outro arquivo fazemos a seguinte funçao

localStorage.setItem("fenando",JSON.stringify(resultado)) // fazendo esta sintaxe estamos fazendo o seguinte transformando a lista em strings

///segue  no proximo arquivo 


console.log(lista)


