const main = document.querySelector(".container_conteudo")

function Telalogin() {
    main.innerHTML = ""
    const form = document.createElement("div")
    form.classList.add('form')
    main.appendChild(form)

    const logintext = document.createElement("h3")
    logintext.classList.add('logintext')
    logintext.setAttribute('id', 'logintext')
    logintext.textContent = `Login`
    form.appendChild(logintext)

    const container_input_email = document.createElement('div')
    container_input_email.classList.add('container_input')
    container_input_email.innerHTML = `<label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Digite seu email'>`

    form.appendChild(container_input_email)



    const container_input_senha = document.createElement('div')
    container_input_senha.classList.add('container_input')
    container_input_senha.innerHTML = `<label for="senha">Senha</label>
            <input type="email" name="senha" id="senha" placeholder='Digite sua senha'>`

    form.appendChild(container_input_senha)

    const container_opcoes = document.createElement("div")
    container_opcoes.classList.add('container_opcoes')
    form.appendChild(container_opcoes)
    container_opcoes.innerHTML = `<p class="btn_esqueci_senha">Esqueceu sua senha?</p><p class="btn_cadastrar-se">Cadastrar-se</p>`

    const btn_login = document.createElement("div")
    btn_login.classList.add('btn_login')
    btn_login.textContent = `Logar`
    form.appendChild(btn_login)

    const esqueci_senha = document.querySelector(".btn_esqueci_senha")
    const btn_cadastrar = document.querySelector(".btn_cadastrar-se")

    const email = document.querySelector("#email")
    const senha = document.querySelector("#senha")

    btn_login.addEventListener("click", () => {
        Login(email.value, senha.value)
        email.value = ""
        senha.value = ""
    })

    esqueci_senha.addEventListener("click", () => {
        Telacadastro()
    })

    esqueci_senha.addEventListener("click", () => {
        RecuperarSenha()
    })
}


function Telacadastro() {
    main.innerHTML = ""
    const form = document.createElement("div")
    form.classList.add('form')
    main.appendChild(form)

    const logintext = document.createElement("h3")
    logintext.classList.add('logintext')
    logintext.setAttribute('id', 'logintext')
    logintext.textContent = `Cadastrar-se`
    form.appendChild(logintext)

    const container_input_email = document.createElement('div')
    container_input_email.classList.add('container_input')
    container_input_email.innerHTML = `<label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Digite seu email'>
            <label for="confirmar_email">Confirmar Email</label>
            <input type="email" name="confirmar_email" id="confirmar_email" placeholder='Confirme seu email'>`

    form.appendChild(container_input_email)



    const container_input_senha = document.createElement('div')
    container_input_senha.classList.add('container_input')
    container_input_senha.innerHTML = `<label for="senha">Senha</label>
            <input type="email" name="senha" id="senha" placeholder='Digite sua senha'>`

    form.appendChild(container_input_senha)

    const container_opcoes = document.createElement("div")
    container_opcoes.classList.add('container_opcoes')
    form.appendChild(container_opcoes)
    container_opcoes.innerHTML = `<p class="btn_fazer_login">Fazer login</p><p class="btn_recuperar_senha">Recuperar senha</p>`

    const btn_login = document.createElement("div")
    btn_login.classList.add('btn_login')
    btn_login.textContent = `Cadastrar-se`
    form.appendChild(btn_login)

    const btn_recuperar_senha = document.querySelector(".btn_recuperar_senha")
    const btn_fazer_login = document.querySelector(".btn_fazer_login")

    btn_fazer_login.addEventListener("click", () => {
        Telalogin()
    })

    btn_recuperar_senha.addEventListener("click", () => {
        RecuperarSenha()
    })

    const input_email = document.querySelector("#email")
    const input_confirmar_email = document.querySelector("#confirmar_email")
    const input_senha = document.querySelector("#senha")

    btn_login.addEventListener("click", () => {
        Cadastro(input_email.value, input_confirmar_email.value, input_senha.value)
        input_email.value = ""
        input_senha.value = ""
        input_confirmar_email.value = ""
    })
}

function RecuperarSenha() {
    main.innerHTML = ""
    const form = document.createElement("div")
    form.classList.add('form')
    main.appendChild(form)

    const logintext = document.createElement("h3")
    logintext.classList.add('logintext')
    logintext.setAttribute('id', 'logintext')
    logintext.textContent = `Recuperação de senha`
    form.appendChild(logintext)

    const container_input_email = document.createElement('div')
    container_input_email.classList.add('container_input')
    container_input_email.innerHTML = `<label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Digite seu email'>`

    form.appendChild(container_input_email)



    const container_opcoes = document.createElement("div")
    container_opcoes.classList.add('container_opcoes')
    form.appendChild(container_opcoes)
    container_opcoes.innerHTML = `<p class="btn_esqueci_senha">Fazer Login</p><p class="btn_cadastrar-se">Cadastrar-se</p>`

    const btn_login = document.createElement("div")
    btn_login.classList.add('btn_login')
    btn_login.textContent = `Recuperar Senha`
    form.appendChild(btn_login)

    const esqueci_senha = document.querySelector(".btn_esqueci_senha")
    const btn_cadastrar = document.querySelector(".btn_cadastrar-se")

    const email = document.querySelector("#email")


    btn_login.addEventListener("click", () => {
        Recupearsenha(email.value)
        email.value = ""

    })

    esqueci_senha.addEventListener("click", () => {
        Login()
    })

    btn_cadastrar.addEventListener("click", () => {
        Telacadastro()
    })
}

function ValidarCodigo(email) {
    main.innerHTML = ""
    const form = document.createElement("div")
    form.classList.add('form')
    main.appendChild(form)

    const logintext = document.createElement("h3")
    logintext.classList.add('logintext')
    logintext.setAttribute('id', 'logintext')
    logintext.textContent = `Validar codigo`
    form.appendChild(logintext)

    const container_input_email = document.createElement('div')
    container_input_email.classList.add('container_input')
    container_input_email.innerHTML = `<label for="ValidarCodigo">Validação de codigo</label>
            <input type="email" name="ValidarCodigo" id="ValidarCodigo" placeholder='Digite seu Codigo de verificação'>
            <input type="Password" name="novasenha" id="novasenha" placeholder="Digite sua nova senha"> `

    form.appendChild(container_input_email)



    const container_opcoes = document.createElement("div")
    container_opcoes.classList.add('container_opcoes')
    form.appendChild(container_opcoes)
    container_opcoes.innerHTML = `<p class="btn_esqueci_senha">Fazer Login</p><p class="btn_cadastrar-se">Cadastrar-se</p>`

    const btn_login = document.createElement("div")
    btn_login.classList.add('btn_login')
    btn_login.textContent = `Recuperar Senha`
    form.appendChild(btn_login)

    const esqueci_senha = document.querySelector(".btn_esqueci_senha")
    const btn_cadastrar = document.querySelector(".btn_cadastrar-se")

    const ValidarCodigo = document.querySelector("#ValidarCodigo")
    const novasenha = document.querySelector("#novasenha")

    btn_login.addEventListener("click", () => {
        validarcodigo(email, ValidarCodigo.value, novasenha.value)
        ValidarCodigo.value = ""
        novasenha.value = ""
    })

    esqueci_senha.addEventListener("click", () => {
        Login()
    })

    btn_cadastrar.addEventListener("click", () => {
        Telacadastro()
    })
}

function Mostrarinformacoes() {

}

async function Login(email, senha) {
    const data = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })

    const resultado = await data.json()
    const texto = document.querySelector("#logintext")
    texto.textContent = `${resultado.mensagem}`
}

async function Cadastro(email, confirmar_email, senha) {
    const data = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: email,
            confirmar_email: confirmar_email,
            senha: senha
        })
    })

    const resultado = await data.json()
    const texto = document.querySelector("#logintext")
    texto.textContent = `${resultado.mensagem}`
}
async function validarcodigo(email, ValidarCodigo, novasenha) {
    try {
        const data = await fetch('http://localhost:3000/validarcodigo', {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
                passcode: ValidarCodigo,
                nova_senha: novasenha
            })
        })

        const resultado = await data.json()
        const texto = document.querySelector("#logintext")
        texto.textContent = resultado.mensagem
    } catch (error) {
        const texto = document.querySelector("#logintext")
        texto.textContent = "Erro inesperado ao validar código"
        console.error(error)
    }
}



async function Recupearsenha(email) {
    const data = await fetch('http://localhost:3000/recuperarsenha', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: email
        })
    })

    const resultado = await data.json()
    const texto = document.querySelector("#logintext")
    texto.textContent = `${resultado.mensagem}`

    const id = setTimeout(() => {

        if (resultado) {
            ValidarCodigo(resultado.email)
        } else {
            texto.textContent = `${resultado.mensagem}`
            clearTimeout(id)
        }
    }, 4000)
}

Telalogin()