const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const porta = process.env.PORT || 3000
const servidor = express()
const validator = require('validator')
const pegar_navegador = require('useragent')
const pegar_ip = require('request-ip')
const pegar_cidade = require('geoip-lite')

const { confirmar_cadastro_html } = require('../js/telas_email/confirmar_cadastro')
const { confirmar_alteracao_telefone_html } = require('../js/telas_email/confirmar_alteracao_telefone')
const { notificacao_login_html } = require('../js/telas_email/notificacao_login_html')
const { Enviaremail } = require('../js/func_backend/enviar_email')



servidor.use(cors())
servidor.use(express.json())
servidor.use(pegar_ip.mw())

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_loja'
})

const sql_usuarios_incerir = 'INSERT INTO usuarios (email,senha,nome,sobrenome,telefone) VALUES (?,?,?,?,?)'
const sql_colocar_codigo = 'INSERT INTO verificacoes (codigo_verificacao) VALUES (?)'
const sql_validar_codigo = 'SELECT * FROM verificacoes WHERE codigo_verificacao = ?'
const sql_usuarios = 'SELECT * FROM usuarios WHERE email = ?'
const sql_mudar_nome = 'UPDATE usuarios set nome = ? WHERE = email ?'
const sql_mudar_telefone = 'UPDATE usuarios set telefone = ? WHERE = email ?'
const sql_verificar_email_existe = 'SELECT id FROM usuarios WHERE email = ?'
const sql_confirmar_novos_cadastros = ''
const sql_produtos_1 = 'SELECT * FROM produtos1'
const sql_produtos_2 = 'SELECT * FROM produtos2'
const sql_produtos_3 = 'SELECT * FROM produtos3'
const sql_deletar_codigo = 'DELETE FROM verificacoes WHERE id = ?'


servidor.post('/login', (req, res) => {
    const ip = req.clientIp
    const agent = pegar_navegador.parse(req.headers['user-agent'])

    const { email, senha } = req.body
    const email_limpo = validator.whitelist(email,'a-zA-Z0-9@_.-')
    const senha_limpa = validator.escape(senha)

    let calendario = new Date
    let dia = calendario.getDay()
    let mes = calendario.getMonth()
    let ano = calendario.getFullYear()
    let hora = calendario.getHours()
    let minuto = calendario.getMinutes()

    let tempo = `${dia} de ${mes}, ${ano} às ${hora}:${minuto}`

    let geo = pegar_cidade.lookup(ip)
    let cidade = geo ? geo.city : 'Desconhecido'
    let pais = geo ? geo.country : 'Desconhecido'
    let estado = geo ? geo.region : 'Desconhecido'
    const html_tentativalogin = notificacao_login_html({ hora: tempo, ip: ip, Navegador: agent.family, sistema: agent.os, dispositivo: agent.device.family, cidade: cidade, estado: estado, pais: pais })

    if (validator.isEmail(email_limpo)) {
        // aqui vem o banco de dados
        conexao.query(sql_usuarios, [email_limpo], (err, banco) => {
            if (err) {
                return res.status(400).json({ mensagem: 'Erro ao consultar o banco', sucesso: false })
            }

            const usuariosEncontado = banco.find(u => u.email === email_limpo && u.senha === senha_limpa)
            if (usuariosEncontado) {
                Enviaremail({ to: email, email_user: email, html: html_tentativalogin, subject: 'Tentativa de login nesse endereço' })
                return res.status(200).json({ mensagem: 'acesso permitido', sucesso: true, usuario: usuariosEncontado })
            } else {
                return res.status(400).json({ mensagem: 'Senha ou email encorretos', sucesso: false })
            }
        })


    } else {
        return res.status(400).json({ mensagem: 'ocorreu um erro inesperado', sucesso: false })
    }
})


servidor.post('/cadastro', (req, res) => {
    const { email } = req.body

   
    const email_limpo = validator.whitelist(email,'a-zA-Z0-9@_.-')
   

   
    conexao.query(sql_usuarios, [email_limpo], (err, resultado) => {
        if (err) {
            return res.status(400).json({ mensagem: 'Desculpe ocorreu um erro', sucesso: false })
        }

        const usuariosEncontado = resultado.find(u => u.email == email_limpo)

        if (usuariosEncontado) {
            return res.status(400).json({ mensagem: 'Esse usario ja existe faça login ou cadastre outro email', sucesso: false })
        }

        let codigo = Math.floor(Math.random() * 100000)
        const html_confirmar_cadastro = confirmar_cadastro_html(codigo)
        Enviaremail({ to: email_limpo, email_user: email_limpo, html: html_confirmar_cadastro, subject: 'Confirmação de código para ativação de conta' })

        conexao.query(sql_colocar_codigo, [codigo], (erro) => {
            if (erro) {
                return res.status(400).json({ mensagem: 'Desculpe ocorreu um erro', sucesso: false })
            }

            return res.status(200).json({mensagem:'Prosseguindo para validação do cadastro...',sucesso:true})

        })

    })


})


servidor.post('/verificar', (req, res) => {
    const { email, nome, sobrenome, senha, codigo_verificacao,telefone } = req.body

    const sobrenome_limpo = validator.whitelist(sobrenome, 'a-zA-Z0-9@_.-')
    const codigo_verificacao_limpo = validator.whitelist(codigo_verificacao, 'a-zA-Z0-9@_.-')
    const telefone_limpo = validator.whitelist(telefone, 'a-zA-Z0-9@_.-')
    const nome_limpo = validator.whitelist(nome, 'a-zA-Z0-9@_.-')
    const email_limpo = validator.whitelist(email, 'a-zA-Z0-9@_.-')
    const senha_limpa = validator.escape(senha)


    conexao.query(sql_validar_codigo, [codigo_verificacao_limpo], (err, resultado) => {
                if (err) {
                    return res.status(400).json({ mensagem: 'Desculpe ocorreu um erro', sucesso: false })
                }

                const codigo_encontrado = resultado.find(u => u.codigo_verificacao === codigo_verificacao_limpo)
                if (codigo_encontrado.codigo_verificacao !== codigo_verificacao_limpo) {
                    return res.status(400).json({ mensagem: 'Codigo de verificação incorreto ', sucesso: false })
                }else{

                    conexao.query(sql_deletar_codigo, [codigo_encontrado.id], (err) => {
                    if (err) {
                        return res.status(400).json({ mensagem: 'Desculpe ocorreu um erro', sucesso: false })
                    }

                    conexao.query(sql_usuarios_incerir, [email_limpo, senha_limpa, nome_limpo, sobrenome_limpo, telefone_limpo], (err) => {
                        if (err) {
                            return res.status(400).json({ mensagem: 'Desculpe ocorreu um erro ', sucesso: false })
                        }

                        return res.status(200).json({ mensagem: 'Cadastro realizado com sucesso', sucesso: true })
                    })

                })

                }
                

            })

})

servidor.listen(porta, () => {
    console.log('servidor rodando ')
})