
import {verificar_codigo} from '../requisicoes/alteracoes_mutua.js'

export function tela_verificar_codigo({nome,sobrenome,email,telefone,senha,email_user}) {
    const main = document.querySelector("#principal")
    main.innerHTML = ""
    const div = document.createElement('div')
    div.classList.add('container_editar_perfill')
    div.innerHTML = `
        <div class="container_verificacao">
        <div class="header_verificacao">
            <h1 class='mensagem'>Verificação de Código</h1>
            <p>Insira o código de verificação enviado para seu email ou telefone</p>
        </div>
        <div class="container_form_verificacao">
            <div class="grupo_form">
                <label for="codigo">Código de Verificação</label>
                <input type="text" id="codigo" name="codigo" placeholder="Digite o código" required>
            </div>
            <div class="container_botoes">
                <button type="button" class="btn_verificar">Verificar Código</button>
                <button type="button" class="btn_cancelar">Cancelar</button>
            </div>
        </div>
    </div>
    `

    main.appendChild(div)

    // inputs e botões

    const codigo = document.querySelector("#codigo")
    const btn_verificar = document.querySelector(".btn_verificar")
    const btn_cancelar = document.querySelector(".btn_cancelar")

    btn_verificar.addEventListener("click",()=>{
        verificar_codigo({nome:nome,sobrenome:sobrenome,email:email,telefone:telefone,senha:senha,codigo_verificacao:codigo.value})
    })

    btn_cancelar.addEventListener('click',()=>{
        location.reload()
    })

}




