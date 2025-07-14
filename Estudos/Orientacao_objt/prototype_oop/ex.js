class Nave{
    constructor(energia){
        this.energia = energia
        this.disparos = 100

    }

}


const n1 = new Nave(1000)
Nave.prototype.vidas=3

Nave.prototype.dispara =function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)

n1.dispara()

console.log(n1.disparos)