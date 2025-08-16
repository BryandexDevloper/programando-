import {tela_Login} from './tela_login.js';
import { Criar_conta } from '../requisicoes/alteracoes_mutua.js';

export function tela_Criar_conta() {
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
           Criar_conta({nome:nome,sobrenome:sobrenome,email:email,telefone:telefone,senha:senha})
        }
    })

}


