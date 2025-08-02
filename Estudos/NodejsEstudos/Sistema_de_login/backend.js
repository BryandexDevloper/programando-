const express = require('express')
const cors = require('cors')
const servidor = express()

// esse aqui e um modulo nativo do node js que le um arquivo da pasta
const banco_dados = require('fs')
const { error } = require('console')

// esse comando permite qual origem acessar a api
servidor.use(cors())

// servidor. use(express.json()) ele literalmente recebe o objeto e ja transforma do json()
servidor.use(express.json())

servidor.post('/login', (requisicao, resposta) => {

    //aqui eu to pegando os dados da requisição post do front end
    const email = requisicao.body.email
    const senha = requisicao.body.senha

    console.log(email)
    console.log(senha)

    banco_dados.readFile('banco.json', 'utf8', (error, res) => {
        if (error) {
            return res.status(500).json({ sucesso: false, mensagem: 'Desculpe ocorrreu um erro inesperado' })
        }

        const usuarios = JSON.parse(res)
        const usuarioValido = usuarios.usuarios.find(res => res.email == email && res.senha == senha)

        if (usuarioValido) {
            resposta.json({ sucesso: true, mensagem: 'Login autorizado com sucesso...' })
        } else {
            resposta.json({ sucesso: false, mensagem: 'Credenciais incorretas' })
        }
    })

})


servidor.post('/cadastro', (requisicao, resposta) => {

    const email = requisicao.body.email
    const confirmaremail = requisicao.body.confirmaremail
    const senha = requisicao.body.senha

    banco_dados.readFile('banco.json', 'utf8', (error, res) => {
        if (error) {
            return res.status(500).json({ sucesso: false, mensagem: 'Desculpe ocorreu um erro inesperado' })
        }

        const usuarios = JSON.parse(res)
        const usuarioValido = usuarios.usuarios.find(res => res.email === email)

        if (email != confirmaremail) {
            return resposta.json({ sucesso: false, mensagem: 'Email invalido ' })
        }

        if (usuarioValido) {
            return resposta.json({ sucesso: false, mensagem: 'Este email ja existe' })

        } else {
            usuarios.usuarios.push({ id: usuarios.usuarios.length + 1, email: email, senha: senha })
             resposta.json({ sucesso: true, mensagem: 'Usuario cadastrado com sucesso...' })
        }

        banco_dados.writeFile('banco.json', JSON.stringify(usuarios, null, 2), (erro) => {
            if (erro) {
                return resposta.status(500).json({ sucesso: false, mensagem: 'Ocorreu um erro inesperado' })
            }
        })
        console.log(res)
    })



})


servidor.put('/recuperarSenha', (requisicao, resposta) => {

    const email = requisicao.body.email
    const senha = requisicao.body.senha
    const nova_senha = requisicao.body.nova_senha

    banco_dados.readFile('banco.json', 'utf8', (error, res) => {

        if (error) {
            return res.status(500).json({ sucesso: false, mensagem: 'Desculpe ocorreu um erro inesperado' })
        }

        const usuarios = JSON.parse(res)
        const usuarioValido = usuarios.usuarios.find(res => res.email == email && res.senha == senha)
        if (!usuarioValido) {
            return resposta.json({ sucesso: false, mensagem: 'Credenciais incorretas ou invalidas' })
        } else {

            usuarioValido.senha = nova_senha
        }



        banco_dados.writeFile('banco.json', JSON.stringify(usuarios, null, 2), (erro) => {
            if (erro) {
                return resposta.status(500).json({ sucesso: false, mensagem: 'Erro ao salvar usuario no banco de dados' })
            }

            resposta.json({ sucesso: true, mensagem: 'Senha atualizada com sucesso' })
        })

    })



})


//e aqui so to falando para o servidor so aceitar a porta 3000
servidor.listen(3000, () => {
    console.log("Servidor rodando")
})