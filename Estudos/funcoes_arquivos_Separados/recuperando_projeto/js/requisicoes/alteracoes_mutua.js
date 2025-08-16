
import {tela_Login} from '../telas/tela_login.js'
import {tela_verificar_codigo} from '../telas/tela_codigo_verificacao.js'


// cadastro
 export async function Criar_conta({email, senha, telefone, nome, sobrenome}) {
    try {
        const data = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
            })
        });

        const resultado = await data.json();
        const titulo_criar_conta = document.querySelector(".titulo_criar_conta")
        if (resultado.sucesso) {
            
            titulo_criar_conta.textContent = resultado.mensagem;
            setTimeout(()=>{
                tela_verificar_codigo({email:email,senha:senha,telefone:telefone,nome:nome,sobrenome:sobrenome})
            },3000)
            
            
        } else {
            
            titulo_criar_conta.textContent = resultado.mensagem;
        }

    } catch (err) {
        throw new Error(err.message);
    }
}



  export  async function verificar_codigo({email,senha,codigo_verificacao,telefone,nome,sobrenome}) {
        const data = await fetch('http://localhost:3000/verificar',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                email:email,
                senha:senha,
                nome:nome,
                sobrenome:sobrenome,
                telefone:telefone,
                codigo_verificacao:codigo_verificacao
            })
        })

        const resultado = await data.json()
        const mensagem = document.querySelector(".mensagem")

        if(resultado.sucesso){
            mensagem.textContent = resultado.mensagem
            setTimeout(()=>{
                tela_Login()
            },3000)
        }
    }


// login

 export async function Login(email, senha) {
    try {
        const data = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });
        
        const resultado = await data.json();
        
        if (resultado.sucesso) {
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta');
            titulo_criar_conta.textContent = resultado.mensagem;
            
            // Criar objeto usuário
            const usuario = {
                email: resultado.usuario.email,
                nome: resultado.usuario.nome,
                sobrenome: resultado.usuario.sobrenome,
                foto: resultado.usuario.foto_perfil,
                numero: resultado.usuario.telefone,
                endereco: resultado.usuario.endereco,
                carrinho_de_compras: resultado.usuario.carrinho_de_compras
            };

            // Salvar no localStorage
            localStorage.setItem('usuario', JSON.stringify(usuario));
            localStorage.setItem('logado', JSON.stringify(true));

            // Recarregar página após 3 segundos
            setTimeout(() => {
                location.reload();
            }, 3000);
            
        } else {
            const titulo_criar_conta = document.querySelector('.titulo_criar_conta');
            titulo_criar_conta.textContent = resultado.mensagem;
        }

    } catch (err) {
        alert('Desculpe ocorreu um erro inesperado ' + err);
    }
}