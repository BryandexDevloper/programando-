class carro{
    constructor(pnome,ptipo){
        this.nome = pnome
        this.tipo = ptipo
        if(this.tipo == 1){
            this.tipo = "Esportivo"
            this.veloc = 300
        }else if(this.tipo == 2){
            this.tipo = "Utilitario"
            this.veloc = 120

        }else if(this.tipo == 3){
            this.tipo = "Passeio"
            this.veloc = 160
        }else{
            this.tipo="Militar"
            this.veloc = 120
        }
    }

    getTipo(){ // GET PERGAR INFORMAÇÕES E MOSTRAR DA PROPIEDADE
        return this.tipo
    }

    getveloc(){
        return this.veloc
    }
    getInfo(){
        return [this.nome,this.tipo,`Velocidade maxima ${this.veloc}Kmh`]
    }
    setNome(novo){ // E SET E PRA COLOCAR VALORES DENTRO DA PROPIEDADE
        this.nome = novo
    }
    info(){
        console.log(`Nome do carro: ${this.nome}`)
        console.log(`Tipo de carro: ${this.tipo}`)
        console.log(`Velocidade maxima: ${this.veloc}`)
        console.log("--------------------------------")
    }
    
}



let p1 = new carro("Sandeiro",3)
let p2 = new carro("Corsa",2)
let p3 = new carro("Astra",1)
let p4 = new carro("Volvo 6x6",4)

p1.info()
p2.info()
p3.info()
p4.info()

p3.setNome("Vectra")
console.log(p3.getInfo())

