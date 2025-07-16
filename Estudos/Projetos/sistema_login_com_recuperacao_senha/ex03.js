const prompt = require('prompt-sync')()

let guardar_pecoas = []

class cadastro { /// Corrigido nome da classe: estava "cadatro"
    
    static GerarCodigo() {
        let passCode = Math.floor(Math.random() * 40000)
        
        if (guardar_pecoas.some(res => res.passCode === passCode)) {
            return cadastro.GerarCodigo()
        }
        
        return passCode
    }
    
    constructor(user, email, _senha) {
        this.user = user
        this.email = email
        this.passCode = cadastro.GerarCodigo()
        this._senha = _senha
    }
    
    setsenha(nova_senha) {
        this._senha = nova_senha
    }
}

guardar_pecoas.push(new cadastro("bryandex", "momo123@gmail.com", "Momo123."))
guardar_pecoas.push(new cadastro("fernandim", "fernandim123@gmail.com", "fernando123."))

const criar_conta = () => {
    let escolha 
    console.log(" Crie sua conta \n")

    let usuario = prompt("Digite um nome de usuario: ")
    while (usuario.length <= 5) {
        usuario = prompt("O nome de usuario precisa de 6 ou mais caracteres: ")
    }

    if (guardar_pecoas.some(res => res.user === usuario)) { /// estava res.usuario, mas o nome correto do atributo é user
        console.log("Este usuario ja existe ")
        escolha = prompt("Digite [1] para fazer login \nDigite [2] para colocar outro nome de usuario: ")
    
        switch (Number(escolha)) {
            case 1:
                Fazerlogin()
                return /// interrompe a criação da conta
            case 2:
                usuario = prompt("Digite um nome de usuario: ")
                break
            default:
                console.log("Opção inválida.")
                return
        }
    }

    let email = prompt("Agora digite um email: ")

    while (!email.includes("@") || !email.includes(".")) {
        email = prompt("O email precisa ter (@) e (.): ")
    }

    if (guardar_pecoas.some(res => res.email === email)) {
        console.log("Este email já existe ")
        escolha = prompt("Digite [1] para fazer login \nDigite [2] para colocar outro email: ")
        switch (Number(escolha)) {
            case 1:
                Fazerlogin()
                return /// encerra cadastro
            case 2:
                email = prompt("Digite seu novo email: ")
                break
            default:
                console.log("Opção inválida.")
                return
        }
    }

    let senha = prompt("Agora digite sua senha (mínimo 6 caracteres): ")
    while (senha.length <= 5) {
        senha = prompt("Sua senha deve ter 6 ou mais caracteres: ")
    }

    console.log(`Parabéns, sua conta foi criada, ${usuario}!`)

    let Nova_conta = new cadastro(usuario, email, senha)
    guardar_pecoas.push(Nova_conta)
}

const Fazerlogin = () => {
    console.log("Fazer login: \n")

    let email = prompt("Digite seu email: ")
    while (!email.includes("@") || !email.includes(".")) {
        email = prompt("O email precisa ter (@) e (.): ")
    }

    let senha = prompt("Agora digite sua senha: ")
    while (senha.length <= 5) {
        senha = prompt("Sua senha deve ter 6 ou mais caracteres: ")
    }

    let tentativa = true
    let contador = 5

    while (tentativa) { 
        const usuario_encontrado = guardar_pecoas.find(res => res.email === email && res._senha === senha)

        if (!usuario_encontrado) { /// Aqui estava incorreto: seu código usava `some(res => res._senha != senha)`, o que dava falso mesmo se UM estivesse errado
            contador--
            if (contador < 1) {
                tentativa = false
                console.log("Acesso bloqueado, tente mais tarde.")
                return
            }

            let escolha = prompt(`Digite [1] para redefinir sua senha \nDigite [2] para tentar novamente (Você ainda tem ${contador} tentativas): `)
            switch (Number(escolha)) {
                case 1:
                    Redefinir_senha()
                    return
                case 2:
                    senha = prompt("Digite sua senha novamente: ")
                    break
                default:
                    console.log("Opção inválida.")
                    return
            }

        } else {
            console.log("Acesso permitido!")
            tentativa = false
        }
    }
}

const Redefinir_senha = () => {
    console.log("Redefinir sua senha")

    let usuario = prompt("Digite seu nome de usuário: ")
    while (usuario.length <= 5) {
        usuario = prompt("O nome de usuário precisa de 6 ou mais caracteres: ")
    }

    while (!guardar_pecoas.find(res => res.user === usuario)) {
        console.log("Este usuário não existe.")
        usuario = prompt("Digite seu nome de usuário correto: ")
    }

    let email = prompt("Digite seu email: ")
    while (!email.includes("@") || !email.includes(".")) {
        email = prompt("O email precisa ter (@) e (.): ")
    }

    while (!guardar_pecoas.find(res => res.email === email)) {
        console.log("Este email não está cadastrado.")
        email = prompt("Digite seu endereço de email: ")
    }

    let passCode = prompt("Digite seu código de verificação: ")
    while (!guardar_pecoas.find(res => res.passCode == passCode)) {
        passCode = prompt("Código de verificação inválido, tente novamente: ")
    }

    console.log("Acesso permitido. Altere sua senha: \n")

    let senha = prompt("Digite sua nova senha (deve ser diferente da antiga): ")
    while (senha.length <= 5) {
        senha = prompt("Sua nova senha deve ter 6 ou mais caracteres: ")
    }

    while (guardar_pecoas.find(res => res._senha === senha)) {
        senha = prompt("Digite uma senha diferente da anterior: ")
    }

    const pessoa = guardar_pecoas.find(res => res.email === email)
    pessoa.setsenha(senha)
    console.log("Senha redefinida com sucesso!")
    console.log(guardar_pecoas)
}

console.log(guardar_pecoas)

console.log(" [1] Criar conta ")
console.log(" [2] Fazer Login ")
console.log(" [3] Redefinir senha ")
console.log("\n")

let escolha = prompt(" ---SISTEMA DE LOGIN--- \n")

switch (Number(escolha)) {
    case 1:
        criar_conta()
        break
    case 2:
        Fazerlogin()
        break
    case 3:
        Redefinir_senha()
        break
    default:
        console.log("Opção inválida")
}
