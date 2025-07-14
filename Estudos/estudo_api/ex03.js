
const prompt = require('prompt-sync')()


let guardar_pecoas = [{usuario:"bryandex",email:"bryan@gmail.com"}]
console.log(" Crie sua conta \n")


let usuario = prompt("Digite seu nome de usuario: ")


while(usuario.length <= 5){
    usuario = prompt(" Digite um nome de usuario com 5 ou mais caracteres: ")
}


while(guardar_pecoas.some(res => res.usuario === usuario)){
     usuario = prompt(" Esse nome de usuario ja existe tente novamente ")
}

let email = prompt(" Agora digite seu emal:")

while(!email.includes('@') || !email.includes('.')){
    email = prompt(" Agora digite seu emal: ")
}


while(guardar_pecoas.some(res => res.email === email)){
    email = prompt(" Esse email ja existe tente novamente ")
}


class cadatro{

    static GerarCodigo(){
        let passCode = Math.floor(Math.random() * 40000)

        if(guardar_pecoas.some(res => res.passCode === passCode)){
            return cadatro.GerarCodigo()
        }

        return passCode

    }

    constructor(user,email){
        this.user = user
        this.email = email
        this.passCode = cadatro.GerarCodigo()
    }
}

let pessoa = new cadatro(usuario,email)
guardar_pecoas.push(pessoa)

console.log(guardar_pecoas)