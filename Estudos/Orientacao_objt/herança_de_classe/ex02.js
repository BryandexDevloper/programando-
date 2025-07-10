class veiculo{
    constructor(marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    infor(){
        console.log(`marcado do veiculo e: ${this.marca}`)
        console.log(`modelo do veiculo e: ${this.modelo}`)
        console.log(`o ano do veiculo e: ${this.ano}`)
        
    }

}

class carro extends veiculo{
    constructor(marca,modelo,ano,portas,airbag){
        super(marca,modelo,ano)
        this.portas = portas
        this.airbag = airbag
    }

    infor(){

 // aqui ta chamando as propiedades da função info do pai()       
        super.infor()
        
        if(this.airbag){
            console.log(`este veiculo tem airbags`)
        }else{
            console.log(`este veiculo nao tem airbags`)
        }
    }

    
}



let carro2 = new carro("fiat","uno",1999,1,true)






console.log()
console.log()
console.log()

carro2.infor()