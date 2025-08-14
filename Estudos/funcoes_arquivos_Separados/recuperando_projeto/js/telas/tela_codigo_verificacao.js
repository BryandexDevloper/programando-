
export function tela_verificar_codigo({nome,sobrenome,email,telefone,senha}) {
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
        Alterar_Perfil({email:usuario.email,codigo_user:codigo.value,novo_email:email,telefone:telefone})
    })

    btn_cancelar.addEventListener('click',()=>{
        location.reload()
    })

}





// async function Criar_conta({email, senha, codigo_verificacao, telefone, nome, sobrenome}) {
//     try {
//         const data = await fetch('http://localhost:3000/cadastro', {
//             method: 'POST',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 email: email,
//                 senha: senha,
//                 codigo_verificacao: codigo_verificacao,
//                 nome: nome,
//                 sobrenome: sobrenome,
//                 telefone: telefone
//             })
//         });

//         const resultado = await data.json();
        
//         if (resultado.sucesso) {
//             const titulo_criar_conta = document.querySelector('.titulo_criar_conta');
//             titulo_criar_conta.textContent = resultado.mensagem;

//             setTimeout(() => {
//                 tela_Login();
//             }, 3000);
            
//         } else {
//             const titulo_criar_conta = document.querySelector('.titulo_criar_conta');
//             titulo_criar_conta.textContent = resultado.mensagem;
//         }

//     } catch (err) {
//         throw new Error(err.message);
//     }
// }