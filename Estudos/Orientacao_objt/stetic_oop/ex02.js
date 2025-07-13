class cadastro{
    static GerarCodigo(){
       
        let max = 10000
        let min = 99999


        return Math.floor(Math.random() * (max-min) + min)
    }

    constructor(nome){
        this.nomeUser = nome
        this.GerarCodigo = cadastro.GerarCodigo()
    }
}





let pessoa1 = new cadastro("mario")
let pessoa2 = new cadastro("Ana")
console.log(pessoa1)
console.log(pessoa2)

