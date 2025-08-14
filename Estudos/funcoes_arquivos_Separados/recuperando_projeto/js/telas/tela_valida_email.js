 

export function tela_Validacao_Email() {
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
    btnValidarEmail.addEventListener('click', (event) => {
        event.preventDefault();
        Validar_cadastro(email_validacao.value)
    })
}
