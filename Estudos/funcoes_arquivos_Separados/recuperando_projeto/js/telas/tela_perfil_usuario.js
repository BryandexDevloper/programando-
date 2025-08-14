
import {Tela_editar_perfil} from './tela_editar_perfil_usuario.js'

export function telaPerfilusuario() {
    const main = document.querySelector("#principal")
    main.innerHTML = ""
    const conteudo = document.createElement("div")
    conteudo.innerHTML = `

 <div class="container_perfil">
        <div class="header_perfil">
            <div class="foto_perfil">
                <img id="foto" src="https://via.placeholder.com/120" alt="Foto do Perfil">
            </div>
            <h1 class="nome_usuario">Nome do Usuário</h1>
            <p class="email_usuario">usuario@exemplo.com</p>
        </div>
        <div class="container_info_perfil">
            <div class="grupo_info">
                <label>Telefone</label>
                <p class ="numero">(11) 98765-4321</p>
            </div>
            <div class="grupo_info">
                <label>Endereco</label>
                <p class ="rua">Rua Exemplo, 123, São Paulo, SP</p>
            </div>
            <div class="container_opcoes">
                <div class="opcao_perfil">
                    <span>Histórico de Compras</span>
                    <span class="icone">➔</span>
                </div>
                <div class="opcao_perfil">
                    <span>Favoritos</span>
                    <span class="icone">➔</span>
                </div>
                <div class="opcao_perfil">
                    <span>Configurações de Notificação</span>
                    <span class="icone">➔</span>
                </div>
            </div>
            <button class="btn_editar_perfil">Editar Perfil</button>
            <button class="btn_logout">Sair</button>
        </div>
    </div>
    
    `
    main.appendChild(conteudo)
    const btn_sair = document.querySelector(".btn_logout")
    const foto = document.querySelector("#foto")
    const nome_usuario = document.querySelector(".nome_usuario")
    const email_usuario = document.querySelector(".email_usuario")
    const numero = document.querySelector(".numero")
    const Endereco = document.querySelector(".rua")
    email_usuario.style.color="white"
    
    // foto.setAttribute('src', usuario.foto || 'https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-768x768.jpg')

    // nome_usuario.textContent = `${usuario.nome} ${usuario.sobrenome}`
    // email_usuario.textContent = `${usuario.email}`
    // numero.textContent = `${usuario.numero}`
    // Endereco.textContent = `${usuario.endereco}`
    // console.log(usuario)

    btn_sair.addEventListener("click", () => {
        location.reload()
    })

   const btn_editar_perfil = document.querySelector(".btn_editar_perfil");
btn_editar_perfil.style.backgroundColor = 'red';
btn_editar_perfil.addEventListener('click', () => {
    Tela_editar_perfil()
});


    
}

