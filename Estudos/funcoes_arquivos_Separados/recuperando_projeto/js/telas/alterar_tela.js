
    import {menuHamburer} from './tela_menu_hamburguer.js'
    import {telaPerfilusuario} from './tela_perfil_usuario.js'; 

export function alterar_tela({usuario,logado}) {

    const crie_sua_conta = document.querySelector('#crie_sua_conta');
    const entre = document.querySelector('#entre');
    const compras = document.querySelector('#compras');
    const menu_hambur = document.querySelector("#menu_hambur");

    crie_sua_conta.textContent=`${usuario.nome}`

    crie_sua_conta.addEventListener('click',()=>{
       telaPerfilusuario({usuario:usuario})
    })

    menu_hambur.addEventListener('click',()=>{
        menuHamburer({usuario:usuario,logado:logado})
    })




}