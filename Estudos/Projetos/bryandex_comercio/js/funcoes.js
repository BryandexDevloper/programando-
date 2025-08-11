



let logadoo = false
const subcategoria = document.querySelector('.subcategoria')
localStorage.setItem("valor_boo", JSON.stringify(logadoo))

let logado = JSON.parse(localStorage.getItem('valor_boo'))


async function PegarCep(cep) {
    try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const resultado = await data.json()
        const informe_cep = document.querySelector('.informe_cep')
        const cep_text = document.querySelector('.cep')
        const cep_text_mob = document.querySelector('.cep_text_mob')
        informe_cep.textContent = 'Enviar para'
        cep_text.textContent = `${resultado.logradouro}`
        cep_text_mob.textContent = `${resultado.logradouro}`
        //logradouro
    } catch (err) {
        if (err) {
            console.log('Desculpe ocorreu um erro ' + err)
            const cep_text_mob = document.querySelector('.cep_text_mob')
            const cep_text = document.querySelector('.cep')
            cep_text.textContent = 'Desculpe tente mais tarde'
            cep_text_mob.textContent = 'Desculpe tente mais tarde'
        }
    }
}


function ColocarCep() {
    const container_localizacao_box = document.querySelector(".container_localizacao_box")
    container_localizacao_box.style.display = "block"

    const aceitar = document.querySelector('.aceitar')
    const cancelar = document.querySelector('.cancelar')
    cancelar.addEventListener('click', () => {
        container_localizacao_box.style.display = "none"
    })

    aceitar.addEventListener('click', () => {
        const container_filtro_escuro = document.querySelector('.container_filtro_escuro')
        container_filtro_escuro.style.display = "block"

        const container_localizacao_box = document.querySelector(".container_localizacao_box")
        container_localizacao_box.style.display = "none"

        const container_btn_close = document.querySelector('#btn_close_container_cep')
        container_btn_close.addEventListener('click', () => {
            container_filtro_escuro.style.display = 'none'

        })


        const input_cep = document.querySelector('#cep')
        const btn_usar_cep = document.querySelector('.btn_usar_cep')
        btn_usar_cep.addEventListener('click', () => {

            PegarCep(input_cep.value)
            input_cep.value = ""
            container_filtro_escuro.style.display = 'none'



        })
    })


}

const container_localiza = document.querySelector('.container_localiza')
const container_localizacao_mobile = document.querySelector('.container_localizacao_mobile')

container_localiza.addEventListener('click', () => {
    ColocarCep()
})

container_localizacao_mobile.addEventListener('click', () => {
    ColocarCep()
})


if (!logado) {

    setTimeout(() => {
        ColocarCep()
    }, 5000)

    document.addEventListener('DOMContentLoaded', () => {

        document.addEventListener('DOMContentLoaded', () => {

            async function obter() {
                try {
                    const data = await obterLocaliza()
                    console.log(data.coords.longitude, data.coords.latitude)
                } catch (err) {
                    console.log('Erro ao obter localização:', err)
                }
            }

            obter()

            async function obterLocaliza() {
                return new Promise((resolve, reject) => {
                    if (!navigator.geolocation) {
                        reject('Geolocalização não suportada pelo navegador')
                    } else {
                        navigator.geolocation.getCurrentPosition(
                            (posicao) => resolve(posicao),
                            (erro) => reject(erro)
                        )
                    }
                })
            }
        })


    })


} else {
    console.log('voce esta logado')

}


subcategoria.addEventListener('mouseover', () => {

    const container_listaa = document.querySelector('.container_listaa')
    container_listaa.style.display = "flex"
    container_listaa.addEventListener('mouseleave', (evet) => {

        container_listaa.style.display = "none"
    })
})
const container_carrosel = document.querySelector(".container_carrosel")
const btn_voltar = document.querySelector('.btn_voltar')
const btn_avancar = document.querySelector('.btn_avancar')
const inputs = document.querySelectorAll('.input_carrolssel')
let contador = 0


const cores_carrossel = [
    '#FF5733', // laranja avermelhado
    '#33FF57', // verde limão
    '#3357FF', // azul vibrante
    '#F1C40F', // amarelo ouro
    '#9B59B6', // roxo
    '#E67E22', // laranja queimado
    '#1ABC9C'  // verde água
]


setInterval(() => {
    contador++
    if (contador >= cores_carrossel.length) {
        contador = 0
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
}, 5000)

inputs[contador].checked = true
container_carrosel.style.backgroundColor = cores_carrossel[contador]

btn_avancar.addEventListener('click', () => {
    contador++
    if (contador >= cores_carrossel.length) {
        contador = 0
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
})

btn_voltar.addEventListener('click', () => {
    contador--
    if (contador < 0) {
        contador = cores_carrossel.length - 1
    }
    container_carrosel.style.backgroundColor = cores_carrossel[contador]
    inputs[contador].checked = true
})


function tela_Criar_conta() {
    const main = document.querySelector('#principal'); // ou 'main' se for tag
    main.innerHTML = ''; // limpa o conteúdo anterior

    // Container principal
    const container = document.createElement('div');
    container.className = 'container_criar_conta';

    // Header
    const header = document.createElement('div');
    header.className = 'header_criar_conta';
    header.innerHTML = `
        <div class="logo_conta">Bryandex Dev</div>
        <h1 class="titulo_criar_conta">Criar Conta</h1>
        <p class="subtitulo_criar_conta">Junte-se à nossa plataforma de comércio online</p>
    `;

    // Formulário (HTML puro para fácil edição)
    const form = document.createElement('form');
    form.className = 'form_criar_conta';
    form.id = 'formCriarConta';
    form.innerHTML = `
        <div class="grupo_duplo">
            <div class="grupo_input">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome" required>
                <div class="mensagem_erro" id="erro_nome">Nome é obrigatório</div>
            </div>
            <div class="grupo_input">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" placeholder="Seu sobrenome" required>
                <div class="mensagem_erro" id="erro_sobrenome">Sobrenome é obrigatório</div>
            </div>
        </div>

        <div class="grupo_input">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="seu@email.com" required>
            <div class="mensagem_erro" id="erro_email">Email é obrigatório</div>
        </div>

        <div class="grupo_input">
            <label for="codigo_verificacao">Código de Verificação</label>
            <div class="input_com_botao">
                <input type="number" id="codigo_verificacao" name="codigo_verificacao" placeholder="Digite o código de 6 dígitos" maxlength="6" pattern="[0-9]{6}">
            </div>
            <div class="mensagem_erro" id="erro_codigo_verificacao">Código de verificação inválido</div>
            <small class="info_codigo">O código de verificação já foi enviado para o seu e-mail. Confira sua caixa de entrada ou a pasta de spam.</small>
        </div>

        <div class="grupo_input">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999">
            <div class="mensagem_erro" id="erro_telefone">Formato inválido</div>
        </div>

        <div class="grupo_input">
            <label for="senha">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Mínimo 6 caracteres" required>
            <div class="mensagem_erro" id="erro_senha">Senha deve ter pelo menos 6 caracteres</div>
        </div>

        <div class="grupo_input">
            <label for="confirmar_senha">Confirmar Senha</label>
            <input type="password" id="confirmar_senha" name="confirmar_senha" placeholder="Repita sua senha" required>
            <div class="mensagem_erro" id="erro_confirmar_senha">Senhas não coincidem</div>
        </div>

        <div class="info_seguranca">
            <p>🔒 Seus dados estão seguros conosco. Utilizamos criptografia avançada para proteger suas informações pessoais.</p>
        </div>

        <div class="checkbox_grupo">
            <input type="checkbox" id="termos" name="termos" required>
            <label for="termos" class="checkbox_texto">
                Aceito os <a href="#" target="_blank">Termos de Uso</a> e a 
                <a href="#" target="_blank">Política de Privacidade</a> da Bryandex Developer
            </label>
        </div>

        <div class="checkbox_grupo">
            <input type="checkbox" id="newsletter" name="newsletter">
            <label for="newsletter" class="checkbox_texto">
                Quero receber ofertas e novidades por email
            </label>
        </div>

        <button type="submit" class="btn_criar_conta" id="btnCriar">
            Criar Minha Conta
        </button>

        <div class="divider">
            <span>ou continue com</span>
        </div>

        <div class="login_social">
            <button type="button" class="btn_social btn_google">Google</button>
            <button type="button" class="btn_social btn_facebook">Facebook</button>
        </div>

        <div class="link_login">
            <p>Já tem uma conta? <a href="#" id="linkLogin">Entre aqui</a></p>
        </div>
    `;

    // Monta tudo
    container.append(header, form);
    main.appendChild(container);

    // variaveis dos inputs vvvvv
    const nome = document.querySelector('#nome');
    const sobrenome = document.querySelector('#sobrenome');
    const email = document.querySelector('#email');
    const codigoVerificacao = document.querySelector('#codigo_verificacao');
    const telefone = document.querySelector('#telefone');
    const senha = document.querySelector('#senha');
    const confirmarSenha = document.querySelector('#confirmar_senha');

    const btnCriar = document.querySelector('#btnCriar')

    btnCriar.addEventListener('click', (event) => {
         event.preventDefault(); 
        if (senha.value != confirmarSenha.value) {
            return alert('Senhas não coincidem')
        } else {
            Criar_conta(email.value, senha.value, codigoVerificacao.value, telefone.value, nome.value, sobrenome.value)
        }
    })

}



function tela_Validacao_Email() {
    const main = document.querySelector('#principal');
    main.innerHTML = '';

    // Container principal
    const container = document.createElement('div');
    container.className = 'container_criar_conta';

    // Header
    const header = document.createElement('div');
    header.className = 'header_criar_conta';
    header.innerHTML = `
        <div class="logo_conta">Bryandex Dev</div>
        <h1 class="titulo_criar_conta">Começar Cadastro</h1>
        <p class="subtitulo_criar_conta">Primeiro, vamos validar seu email</p>
    `;

    // Formulário
    const form = document.createElement('form');
    form.className = 'form_criar_conta';
    form.id = 'formValidacaoEmail';
    form.innerHTML = `
        <div class="info_passo">
            <p>📧 <strong>Passo 1 de 2</strong> - Validação de Email</p>
        </div>

        <div class="grupo_input">
            <label for="email_validacao">Seu Email</label>
            <input type="email" id="email_validacao" name="email" placeholder="Digite seu melhor email" required>
            <div class="mensagem_erro" id="erro_email_validacao">Email é obrigatório</div>
        </div>

        <div class="info_seguranca">
            <p>🔒 Enviaremos um código de verificação para este email. Certifique-se de que está correto e que você tem acesso a ele.</p>
        </div>

        <button class="btn_criar_conta" id="btnValidarEmail">
            Continuar
        </button>

        <div class="divider">
            <span>ou continue com</span>
        </div>

        <div class="login_social">
            <button type="button" class="btn_social btn_google">Google</button>
            <button type="button" class="btn_social btn_facebook">Facebook</button>
        </div>

        <div class="beneficios_conta">
            <h3>Por que criar uma conta?</h3>
            <ul>
                <li>✅ Acompanhe seus pedidos em tempo real</li>
                <li>✅ Salve seus produtos favoritos</li>
                <li>✅ Receba ofertas exclusivas</li>
                <li>✅ Checkout mais rápido</li>
            </ul>
        </div>

        <div class="link_login">
            <p>Já tem uma conta? <a href="#" id="linkLogin">Entre aqui</a></p>
        </div>
    `;

    // Monta tudo
    container.append(header, form);
    main.appendChild(container);

    const email_validacao = document.querySelector('#email_validacao');
    const btnValidarEmail = document.querySelector('#btnValidarEmail')
    btnValidarEmail.addEventListener('click',(event)=>{
        event.preventDefault(); 
        Validar_cadastro(email_validacao.value)
    })
}




function tela_Login() {
    const main = document.querySelector('#principal'); // ou 'main' se for tag
    main.innerHTML = ''; // limpa o conteúdo anterior

    // Container principal
    const container = document.createElement('div');
    container.className = 'container_criar_conta';

    // Header
    const header = document.createElement('div');
    header.className = 'header_criar_conta';
    header.innerHTML = `
        <div class="logo_conta">Bryandex Dev</div>
        <h1 class="titulo_criar_conta">Entrar</h1>
        <p class="subtitulo_criar_conta">Acesse sua conta na plataforma</p>
    `;

    // Formulário (HTML puro para fácil edição)
    const form = document.createElement('form');
    form.className = 'form_criar_conta';
    form.id = 'formLogin';
    form.innerHTML = `
        <div class="grupo_input">
            <label for="email_login">Email</label>
            <input type="email" id="email_login" name="email" placeholder="seu@email.com" required>
            <div class="mensagem_erro" id="erro_email_login">Email é obrigatório</div>
        </div>

        <div class="grupo_input">
            <label for="senha_login">Senha</label>
            <input type="password" id="senha_login" name="senha" placeholder="Digite sua senha" required>
            <div class="mensagem_erro" id="erro_senha_login">Senha é obrigatória</div>
        </div>

        <div class="checkbox_grupo">
            <input type="checkbox" id="lembrar" name="lembrar">
            <label for="lembrar" class="checkbox_texto">
                Manter-me conectado
            </label>
        </div>

        <button type="submit" class="btn_criar_conta" id="btnEntrar">
            Entrar
        </button>

        <div class="link_esqueci_senha">
            <a href="#" id="linkEsqueciSenha">Esqueci minha senha</a>
        </div>

        <div class="divider">
            <span>ou continue com</span>
        </div>

        <div class="login_social">
            <button type="button" class="btn_social btn_google">Google</button>
            <button type="button" class="btn_social btn_facebook">Facebook</button>
        </div>

        <div class="info_seguranca">
            <p>🔒 Sua segurança é nossa prioridade. Nunca compartilharemos seus dados pessoais.</p>
        </div>

        <div class="link_login">
            <p>Não tem uma conta? <a href="#" id="linkCriarConta">Criar conta</a></p>
        </div>
    `;

    // Monta tudo
    container.append(header, form);
    main.appendChild(container);

    const email_login = document.querySelector('#email_login')
    const senha_login = document.querySelector('#senha_login')
    const btnEntrar = document.querySelector('#btnEntrar')

    btnEntrar.addEventListener('click', (event) => {
         event.preventDefault(); 
        Login(email_login.value, senha_login.value)
        email_login.value = ""
        senha_login.value = ""
    })

}



const crie_sua_conta = document.querySelector('#crie_sua_conta')
const entre = document.querySelector('#entre')
const compras = document.querySelector('#compras')



crie_sua_conta.addEventListener('click', () => {
    tela_Validacao_Email()
})

compras.addEventListener('click',()=>{
    tela_Login()
})

entre.addEventListener('click', () => {
    tela_Login()
})


async function Login(email, senha) {

    try {

        const data = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        })
        // titulo_criar_conta  titulo da tela login 
        const resultado = await data.json();
        if (resultado.sucesso) {
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
            titulo_criar_conta.textContent = resultado.mensagem
            const usuario = {
                email: resultado.usuario.email,
                nome: resultado.usuario.nome,
                foto: resultado.usuario.foto,
                carrinho_de_compras: resultado.usuario.carrinho_de_compras
            }
            localStorage.setItem('usuario', JSON.stringify(usuario));
            logado = true
           
            setTimeout(()=>{
                location.reload()
            },3000)
        } else {
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
            titulo_criar_conta.textContent = resultado.mensagem
        }

    } catch (err) {
        alert('Desculpe ocorreu um erro inesperado ' + err);
    }

}



async function Validar_cadastro(email) {
    const data = await fetch('http://localhost:3000/validar_cadastro', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            email: email
        })
    })

    const resultado = await data.json()
    if (resultado.sucesso) {
        const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
        titulo_criar_conta.textContent = `${resultado.mensagem} voce sera redirecionado...`

        setTimeout(() => {
            tela_Criar_conta()
        }, 3000);
    } else {
        const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
        titulo_criar_conta.textContent = resultado.mensagem
    }
}



async function Criar_conta(email, senha, codigo_verificacao, telefone, nome, sobrenome) {


    try {
        const data = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
                senha: senha,
                codigo_verificacao:codigo_verificacao,
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone
            })
        })

        const resultado = await data.json()
        if (resultado.sucesso) {
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
            titulo_criar_conta.textContent = resultado.mensagem

            setTimeout(() => {
                tela_Login()
            }, 3000)
        }else{
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta')
            titulo_criar_conta.textContent = resultado.mensagem
        }

    } catch (err) {
        console.log(err)
    }


}



const usuario = JSON.parse(localStorage.getItem('usuario'))

if (usuario) {
    // aqui vem as mudanças de layolt
}