const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const porta = process.env.PORT
const nodemailer = require('nodemailer')
const servidor = express()


servidor.use(cors())
servidor.use(express.json())


const envio_de_email = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'adrianbryan072@gmail.com',
        pass: 'fnfb gmzw sefz gaem'
    }
})

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
})

servidor.post('/login', (req, res) => {
    conexao.query('SELECT * FROM usuarios', (error, resultado) => {
        const { email, senha } = req.body
        if (error) {
            return res.status(400).json({ mensagem: 'Ocorreu algum erro inesperado' })
        }

        const usuarioEncontrado = resultado.find(res => res.email === email && res.senha === senha)
        if (usuarioEncontrado) {
            return res.status(200).json({ mensagem: 'Usuario logado com sucesso' })
        } else {
            return res.status(400).json({ mensagem: 'Credenciais incorretas' })
        }
    })


})


servidor.post('/cadastro', (req, res) => {
    conexao.query('SELECT * FROM usuarios', (error, resultado) => {
        const { email, senha } = req.body
        if (error) {
            return res.status(400).json({ mensagem: 'Ocorreu algum erro inesperado' })
        }

        const usuarioEncontrado = resultado.find(res => res.email === email)

        if (usuarioEncontrado) {
            return res.status(403).json({ mensagem: 'Esse usuario ja existe faça login ou tente outro email' })
        } else {
            conexao.query('INSERT INTO usuarios (email,senha) VALUES (?,?)', [email, senha], (error, resultado1) => {
                if (error) {
                    return res.status(400).json({ mensagem: 'Ocorreu algum erro inesperado' })
                }

                res.status(200).json({ mensagem: 'Usuario cadastrado com exito' })
            })
        }
    })
})


servidor.post('/recuperarsenha', async (req, res) => {

    const { email } = req.body;

    conexao.query('SELECT * FROM usuarios', async (error, resultado) => {
        if (error) {
            return res.status(400).json({ mensagem: 'Desculpe, algo deu errado' });
        }

        const Usuario_encontrado = resultado.find(user => user.email === email);
        if (!Usuario_encontrado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const codigo = Math.floor(Math.random() * 10000);
        const id = Usuario_encontrado.id;

        conexao.query('UPDATE usuarios SET codigo_verificacao = ? WHERE id = ?', [codigo, id], async (erroAtualizar) => {
            if (erroAtualizar) {
                return res.status(400).json({ mensagem: 'Erro ao atualizar o código' });
            }

            try {
                await envio_de_email.sendMail({
                    from: 'adrianbryan072@gmail.com',
                    to: email,
                    subject: 'Código de verificação para redefinição de senha',
                    html: `<h1>Olá, ${Usuario_encontrado.email}</h1><p>Seu código de verificação é: <strong>${codigo}</strong></p>`
                });

                res.status(200).json({ mensagem: 'Código enviado para o e-mail', email: email });
            } catch (err) {
                res.status(500).json({ mensagem: 'Erro ao enviar o e-mail', erro: err });
            }
        });
    });


});

servidor.put('/validarcodigo', (req, res) => {
    const { email, passcode, nova_senha } = req.body

    conexao.query('SELECT * FROM usuarios',async (error, resposta) => {
        if (error) {
            return res.status(500).json({ mensagem: 'Erro ao buscar usuários' })
        }

        const Usuario_encontrado = resposta.find(res => res.email === email)
        if (!Usuario_encontrado) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' })
        }

        const codigoConvertido = Number(passcode)
        if (isNaN(codigoConvertido)) {
            return res.status(400).json({ mensagem: 'Código inválido' })
        }

        if (Usuario_encontrado.codigo_verificacao !== codigoConvertido) {
            return res.status(400).json({ mensagem: 'Código incorreto' })
        }

        conexao.query('UPDATE usuarios SET senha = ? WHERE id = ?', [nova_senha, Usuario_encontrado.id], (error1) => {
            if (error1) {
                return res.status(500).json({ mensagem: 'Erro ao atualizar senha' })
            }
            
            conexao.query('UPDATE usuarios SET codigo_verificacao = NULL WHERE id = ?',[Usuario_encontrado.id],(erro)=>{
                if(erro){
                    return res.status(500).json({mensagem:'Erro inesperado'})
                }
            })
            
            return res.status(200).json({ mensagem: 'Senha atualizada com sucesso' })
        })
        
        try{
            await envio_de_email.sendMail({
                    from: 'adrianbryan072@gmail.com',
                    to: email,
                    subject: 'Sua senha foi redefinida',
                    html: `<h1>Olá, ${Usuario_encontrado.email}</h1><p>Sua senha acabou de ser redenifinida</p>`
            })
        }catch(err){
            res.status(500).json({mensagem:'Erro inesperado',erro:err})
        }
    })
})


servidor.listen(porta || 3000, () => { console.log('Servidor Rodando...') })