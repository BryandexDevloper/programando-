
import {tela_verificar_codigo} from './tela_codigo_verificacao.js'
        
export function Tela_editar_perfil({usuario}) {
    const main = document.querySelector("#principal")
    main.innerHTML = ""
    const div = document.createElement("div")

    div.innerHTML = `
        <div class="container_editar_perfil">
        <div class="header_editar_perfil">
            <div class="foto_perfil">
                <img id="foto" src="https://via.placeholder.com/120" alt="Foto do Perfil">
                <input type="file" id="foto_upload" name="foto_upload" accept="image/*">
                <label for="foto_upload">Alterar Foto</label>
            </div>
            <h1 class ='mensagem_telaperfil'>Editar Perfil</h1>
        </div>
        <div class="container_form_perfil">
            <div class="grupo_form">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" required placeholder=${usuario.nome}>
            </div>
            <div class="grupo_form">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder=${usuario.email}">
            </div>
            <div class="grupo_form">
                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" pattern="^\(\d{2}\)\s\d{5}-\d{4}$" placeholder=${usuario.telefone}>
            </div>
            <div class="grupo_form">
                <label for="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" placeholder=${usuario.endereco}>
            </div>
            <div class="container_botoes">
                <button type="button" class="btn_salvar">Salvar Alterações</button>
                <button type="button" class="btn_cancelar">Cancelar</button>
            </div>
        </div>
    </div>
    `

    main.appendChild(div)

    // Inputs
    const inputFoto = document.querySelector('#foto_upload');
    const inputNome = document.querySelector('#nome');
    const inputEmail = document.querySelector('#email');
    const inputTelefone = document.querySelector('#telefone');
    const inputEndereco = document.querySelector('#endereco');

    // Botões
    const btnSalvar = document.querySelector('.btn_salvar');
    const btnCancelar = document.querySelector('.btn_cancelar');

    btnSalvar.addEventListener('click',()=>{
     
        if(inputNome.value){
             jm
        }

    })

    btnCancelar.addEventListener('click',()=>{
        location.reload()
    })

}
