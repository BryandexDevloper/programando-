
function login(){

    document.body.innerHTML=""

const container = document.createElement('div');
container.className = 'container-inputs';

const titulo = document.createElement('h1');
titulo.id = 'atividade';
titulo.textContent = 'Login';

const campoEmail = document.createElement('div');
campoEmail.className = 'container-campos';
campoEmail.innerHTML = `
  <label for="email">Email</label>
  <input type="email" name="email" id="email">
`;

const campoSenha = document.createElement('div');
campoSenha.className = 'container-campos';
campoSenha.innerHTML = `
  <label for="senha">Senha</label>
  <input type="email" name="senha" id="senha">
`;

const containerCriarConta = document.createElement('div');
containerCriarConta.className = 'container-criar-conta';

const btn_recuperar = document.createElement("p")
btn_recuperar.textContent=`Recuperar senha`
btn_recuperar.addEventListener("click",()=>{
    recuperarSenha()
})
containerCriarConta.appendChild(btn_recuperar)


const btn_cadastrar = document.createElement("p")
btn_cadastrar.textContent=`Cadastrar-se`
btn_cadastrar.addEventListener("click",()=>{
    cadastrar()
})
containerCriarConta.appendChild(btn_cadastrar)


const botaoLogar = document.createElement('div');
botaoLogar.className = 'btn_logar';
botaoLogar.textContent = 'Logar';

// Juntando tudo
container.appendChild(titulo);
container.appendChild(campoEmail);
container.appendChild(campoSenha);
container.appendChild(containerCriarConta);
container.appendChild(botaoLogar);

// Adiciona ao body ou a outro elemento principal
document.body.appendChild(container);

botaoLogar.addEventListener("click",()=>{
    const campoEmail = document.querySelector("#email")
    const campoSenha = document.querySelector("#senha")

    Logar(campoEmail.value,campoSenha.value)
    campoEmail.value=""
    campoSenha.value=""
})

}


function cadastrar(){
    document.body.innerHTML=""
    const container = document.createElement('div');
container.className = 'container-inputs';

const titulo = document.createElement('h1');
titulo.id = 'atividade';
titulo.textContent = 'Cadastrar-se';

const campoEmail = document.createElement('div');
campoEmail.className = 'container-campos';
campoEmail.innerHTML = `
  <label for="email">Email</label>
  <input type="email" name="email" id="email">
`;
// parei aqui

const campoEmailConfirmar = document.createElement('div');
campoEmailConfirmar.className = 'container-campos';
campoEmailConfirmar.innerHTML = `
  <label for="email">Confirmar Email</label>
  <input type="email" name="confirmaremail" id="confirmaremail">
`;

const campoSenha = document.createElement('div');
campoSenha.className = 'container-campos';
campoSenha.innerHTML = `
  <label for="senha">Senha</label>
  <input type="email" name="senha" id="senha">
`;

const containerCriarConta = document.createElement('div');
containerCriarConta.className = 'container-criar-conta';

const btn_login = document.createElement("p")
btn_login.textContent=`Fazer Login`
btn_login.addEventListener("click",()=>{
    login()
})
containerCriarConta.appendChild(btn_login)


const botaoLogar = document.createElement('div');
botaoLogar.className = 'btn_logar';
botaoLogar.textContent = 'Cadastrar-se';

// Juntando tudo
container.appendChild(titulo);
container.appendChild(campoEmail);
container.appendChild(campoEmailConfirmar)
container.appendChild(campoSenha);
container.appendChild(containerCriarConta);
container.appendChild(botaoLogar);

// Adiciona ao body ou a outro elemento principal
document.body.appendChild(container);

botaoLogar.addEventListener("click",()=>{
    const campoEmail = document.querySelector("#email")
    const campoEmailConfirmar = document.querySelector("#confirmaremail")
    const campoSenha = document.querySelector("#senha")

    cadastroUser(campoEmail.value,campoEmailConfirmar.value,campoSenha.value)
    campoEmail.value=""
    campoEmailConfirmar.value=""
    campoSenha.value=""
})

}


function recuperarSenha(){
    document.body.innerHTML=""
    const container = document.createElement('div');
container.className = 'container-inputs';

const titulo = document.createElement('h1');
titulo.id = 'atividade';
titulo.textContent = 'Recuperar senha';

const campoEmail = document.createElement('div');
campoEmail.className = 'container-campos';
campoEmail.innerHTML = `
  <label for="email">Email</label>
  <input type="email" name="email" id="email">
`;


const campoSenha = document.createElement('div');
campoSenha.className = 'container-campos';
campoSenha.innerHTML = `
  <label for="senha">Senha</label>
  <input type="email" name="senha" id="senha">
`;

const campoSenha_nova = document.createElement('div');
campoSenha_nova.className = 'container-campos';
campoSenha_nova.innerHTML = `
  <label for="senha_nova">Nova_senha</label>
  <input type="email" name="senha_nova" id="senha_nova">
`;

const containerCriarConta = document.createElement('div');
containerCriarConta.className = 'container-criar-conta';

const btn_cadastrar = document.createElement("p")
btn_cadastrar.textContent=`Cadastrar-se`
btn_cadastrar.addEventListener("click",()=>{
    cadastrar()
})
containerCriarConta.appendChild(btn_cadastrar)


const btn_login = document.createElement("p")
btn_login.textContent=`Fazer Login`
btn_login.addEventListener("click",()=>{
    login()
})
containerCriarConta.appendChild(btn_login)

const botaoLogar = document.createElement('div');
botaoLogar.className = 'btn_logar';
botaoLogar.textContent = 'Recuperar Senha';

// Juntando tudo
container.appendChild(titulo);
container.appendChild(campoEmail);
container.appendChild(campoSenha);
container.appendChild(campoSenha_nova)
container.appendChild(containerCriarConta);
container.appendChild(botaoLogar);

// Adiciona ao body ou a outro elemento principal
document.body.appendChild(container);

    botaoLogar.addEventListener("click",()=>{
        const email = document.querySelector("#email")
        const senha = document.querySelector("#senha")
        const nova_senha = document.querySelector("#senha_nova")

        RecuperarUser(email.value,senha.value,nova_senha.value)
        email.value=""
        senha.value=""
        nova_senha.value=""
        
    })

}


async function Logar(email,senha) {

    

    const resultado = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: email.value,
            senha: senha.value
        })
    })

    const resposta = await resultado.json()

    if (resposta) {
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    } else {
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    }

    
}



async function cadastroUser(email,confirmaremail,senha) {
    
    const resultado = await fetch('http://localhost:3000/cadastro',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:email,
            confirmaremail:confirmaremail,
            senha:senha
        })
    })

    const resposta = await resultado.json()
    if(resposta){
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    }else{
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    }
}


async function RecuperarUser(email,senha,nova_senha) {
    const resultado = await fetch('http://localhost:3000/recuperarSenha',{
        meth    od:'PUT',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({
            email:email,
            senha:senha,
            nova_senha:nova_senha
        })
    })

    const resposta = await resultado.json()

    if(resposta){
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    }else{
        const nome = document.getElementById('atividade')
        nome.textContent = resposta.mensagem
    }
}


login()