
    let guardar_Carros = new Map()

class carro {

    static Gerarnumero(){

        return Math.floor(Math.random() * 100)

    }

    constructor(portas){
        this.portas = portas
        this.numero_serie = carro.Gerarnumero()
    }


    Guardar_carro(carro){
        let id = guardar_Carros.size + 1
        guardar_Carros.set(id,carro)
    }

}


let carro1 = new carro(4)
let carro2 = new carro(2)


carro1.Guardar_carro(carro1)
carro2.Guardar_carro(carro2)

console.log(carro1)
console.log(carro2)


console.log(guardar_Carros)