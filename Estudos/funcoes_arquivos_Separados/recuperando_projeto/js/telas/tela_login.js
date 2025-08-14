

export function tela_Login() {
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