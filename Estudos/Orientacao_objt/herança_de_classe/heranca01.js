class carro{
    constructor(nome,portas,foto){
        this.portas = portas
        this.nome = nome
        this.cor = undefined
        this.lidado = false
        this.foto = foto
    }

    ligar_veiculo(){
        this.lidado = true
    }

    desligar_vaiculo(){
        this.lidado = false
    }

    setCor(cor){
        this.cor = cor
    }

    mostrarCarro(){
        const veiculo = document.querySelector("#veiculo")
        veiculo.setAttribute("src",this.foto)
    }

}

class militar extends carro{
    constructor(nome,portas,foto,quantidade,blindagem){
        super(nome,portas,foto)
        this.municao = quantidade
        this.blindagem = blindagem
    }

    atirar(){
        if(this.municao > 0){
            this.municao--
            console.log("tiro: pa pa pa")
        }
    }

}

let suv = new militar("suv",6,"https://tse4.mm.bing.net/th/id/OIP.21eutUiUOMrOzpAoL0EXEgHaEy?pid=ImgDet&w=203&h=131&c=7&o=7&rm=3",100)
suv.setCor("green")
suv.mostrarCarro()
suv.atirar()

let novoCarro = new carro("toyota",4)
novoCarro.setCor("blue")
novoCarro.desligar_vaiculo()



console.log(novoCarro)
console.log(suv)