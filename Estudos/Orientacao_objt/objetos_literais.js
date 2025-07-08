let Pessoal = new Map()

class Pessoas {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  guardar_pessoa() {
    let id = Pessoal.size + 1
    Pessoal.set(id,{idade:this.idade , nome:this.nome})
  }
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  const nome = document.querySelector("#nome").value
  const idade = Number(document.querySelector("#idade").value)

  const pessoa = new Pessoas(nome, idade)
  pessoa.guardar_pessoa()

  console.log(Pessoal)
  console.log("Tamanho do Map:", Pessoal.size)


    const mostrar = document.createElement("p")
     const div = document.querySelector(".nomes")
     div.innerHTML=""

  Pessoal.forEach((res,index)=>{

    mostrar.textContent=` eu sou ${res.nome} com a idade de ${res.idade} anos com o id de ${res,index}`
     div.appendChild(mostrar)

  })
})
