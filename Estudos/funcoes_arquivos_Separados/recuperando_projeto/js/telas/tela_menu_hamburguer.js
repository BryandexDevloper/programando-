
import { tela_Login } from './tela_login.js'
import { tela_Criar_conta } from './tela_cadastro.js'
import { telaPerfilusuario } from './tela_perfil_usuario.js'


const logado = JSON.parse(localStorage.getItem('logado')); // vai retornar true ou false
const usuario = JSON.parse(localStorage.getItem('usuario')); // retorna o objeto salvo



export function menuHamburer({logado, usuario}) {
    const main = document.querySelector("#principal")
    main.innerHTML = ""

    const div = document.createElement("div")
    div.style.height = "100%"
    div.innerHTML = `

        <div class="menu_hamburguer">
        <div class="perfil_area">
            <div class="foto_perfil">
                <img class='img' src="https://via.placeholder.com/80" alt="Foto de Perfil">
            </div>
            <div class="bem_vindo">Bem-vindo!</div>
            <div class="email_usuario">exemplo@dominio.com</div>
        </div>
        <div class="menu_opcoes">
            <ul>
                <li id='incio'>Início</li>
                <li id='perfil'>Perfil</li>
                <li id='carrinho'>Minhas Compras</li>
                <li id='favoritos'>Favoritos</li>
                <li id='configuracoes'>Configurações</li>
            </ul>
        </div>
        <div class="menu_botoes">
            <button class="btn_criar_conta">Criar Conta</button>
            <button class="btn_login">Login</button>
        </div>
    </div>
    
    `
    main.appendChild(div)

    const foto_perfil = document.querySelector(".img")
    const email_usuario = document.querySelector(".email_usuario")
    const btn_criar_conta = document.querySelector('.btn_criar_conta')
    const btn_login = document.querySelector(".btn_login")
    const btn_bem_vindo = document.querySelector(".bem_vindo")

    // lista desorsenada

    const inicio = document.querySelector('#incio'); // cuidado com o "incio" no ID
    const perfil = document.querySelector('#perfil');
    const carrinho = document.querySelector('#carrinho');
    const favoritos = document.querySelector('#favoritos');
    const configuracoes = document.querySelector('#configuracoes');

    if (logado) {

        foto_perfil.setAttribute("src", usuario.foto || 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg')
        email_usuario.textContent = usuario.email
        btn_bem_vindo.textContent = `${btn_bem_vindo.textContent} ${usuario.nome}`
        btn_login.remove()
        btn_criar_conta.remove()

        perfil.addEventListener('click', () => {
            telaPerfilusuario({usuario:usuario})
        })


        carrinho.addEventListener('click', () => {
            telaCarrinho()
        })


    } else {

        foto_perfil.setAttribute("src", 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg')
        btn_criar_conta.addEventListener('click', () => {
            tela_Criar_conta()
        })


        btn_login.addEventListener('click', () => {
            tela_Login()
        })
    }

    inicio.addEventListener('click', () => {
        location.reload()
    })







}