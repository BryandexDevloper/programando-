class carro{
    constructor(){
        if(this.constructor === carro){
            throw new Error("ESSA CLASSSE NAO PODE SER INSTANCIADA")
        }
        this.rodas = 4
        this.portas = 4
    }
}



let carro1 = new carro()

console.log(carro1)