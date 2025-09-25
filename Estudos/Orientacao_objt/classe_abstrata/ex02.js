// class Animal{
//     constructor(nome){
//         this.nome = nome
//         if(new.target === Animal){
//            throw new Error('Essa classe não pode ser instanciada')
//         }
//     }

//     FazerSom(){
//         throw new Error('Som deve ser implementado')
//     }

// }

// class Cachorro extends Animal{
//     constructor(nome){
//         super(nome)
//         this.nome = nome
//     }

//     FazerSom(){
//         console.log('au au ')
//     }
// }


// class Gato extends Animal{
//     constructor(nome){
//         super(nome)
//         this.nome = nome
//     }

//     FazerSom(){
//         console.log('miau miau')
//     }
// }

// const animal = new Cachorro('puddle')
// const gato = new Gato('gato cinzento')
// console.log(animal)
// console.log(gato)
// animal.FazerSom()

class User{
    constructor(
        Nome,
        Email,
        Telefone,
        Foto,
        Autencacao
    ){
        this.Nome = Nome
        this.Email = Email
        this.Telefone = Telefone || null
        this.Foto = Foto || null 
        this.Autencacao = Autencacao || null
    }

    Alteracoes(Nome,Email,Telefone,Foto,Autencacao){
            if(Nome){
                this.Nome = Nome
            }if(Email){
                this.Email = Email
            }if(Telefone){
                this.Telefone = Telefone
            }if(Foto){
                this.Foto = Foto
            }if(Autencacao){
                this.Autencacao = Autencacao
                this.Autenticacao()
            }
    }

    Autenticacao(){
        console.log("AUTENTICADO")
    }

}


class Modificacao extends User{
    constructor(
         Nome,
        Email,
        Telefone,
        Foto,
        Autencacao
    ){
        super( Nome,
        Email,
        Telefone,
        Foto,
        Autencacao)
    }
}


let user = new User('Rogerio felipe','exemple@email')
console.log(user)
user.Alteracoes('romario alberto','example2mail.com',169987587,null,true)
console.log(user)