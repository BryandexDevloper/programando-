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
const {confirmar_alteracao_telefone_html} = require('../js/telas_email/confirmar_alteracao_telefone')
const {notificacao_login_html} = require('../js/telas_email/notificacao_login_html')
const {Enviaremail} = require('../js/func_backend/enviar_email')


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
const sql_validar_cadastro = 'INSERT INTO verificacoes (codigo_verificacao) VALUES (?)'
const sql_validar_codigo = 'SELECT * FROM verificacoes WHERE codigo_verificacao = ?'
const sql_usuarios = 'SELECT * FROM usuarios WHERE email = ?'
const sql_mudar_nome = 'UPDATE usuarios set nome = ? WHERE = email ?'
const sql_mudar_telefone = 'UPDATE usuarios set telefone = ? WHERE = email ?'
const sql_verificar_email_existe = 'SELECT id FROM usuarios WHERE email = ?'
const sql_confirmar_novos_cadastros = ''
const sql_produtos_1 = 'SELECT * FROM produtos1'
const sql_produtos_2 = 'SELECT * FROM produtos2'
const sql_produtos_3 = 'SELECT * FROM produtos3'
const sql_deletar_codigo_cadastro = 'DELETE FROM verificacoes WHERE id = ?'


servidor.post('/login', (req, res) => {
    const { email, senha } = req.body
    const ip = req.clientIp
    const agent = pegar_navegador.parse(req.headers['user-agent'])
    const email_limpo = validator.whitelist(email, 'a-zA-Z0-9@_.-')
    const senha_limpa = validator.escape(senha)

    let calendario = new Date
    let dia = calendario.getDay()
    let mes  = calendario.getMonth()
    let ano = calendario.getFullYear()
    let hora = calendario.getHours()
    let minuto = calendario.getMinutes()

    let tempo = `${dia} de ${mes}, ${ano} às ${hora}:${minuto}`

    let geo = pegar_cidade.lookup(ip)
    let cidade = geo ? geo.city : 'Desconhecido'
    let pais = geo ? geo.country : 'Desconhecido'
    let estado = geo ? geo.region : 'Desconhecido'
    const html = notificacao_login_html({hora:tempo,ip:ip,Navegador:agent.family,sistema:agent.os,dispositivo:agent.device.family,cidade:cidade,estado:estado,pais:pais})

    if (validator.isEmail(email_limpo)) {
        // aqui vem o banco de dados
        conexao.query(sql_usuarios, [email_limpo], (err, banco) => {
            if (err) {
                return res.status(400).json({ mensagem: 'Erro ao consultar o banco', sucesso: false })
            }

            const usuariosEncontado = banco.find(u => u.email === email_limpo && u.senha === senha_limpa)
            if (usuariosEncontado) {
                Enviaremail({to:email,email_user:email,html:html})
                return res.status(200).json({ mensagem: 'acesso permitido', sucesso: true, usuario: usuariosEncontado })
            } else {
                return res.status(400).json({ mensagem: 'Senha ou email encorretos', sucesso: false })
            }
        })


    } else {
        return res.status(400).json({ mensagem: 'ocorreu um erro inesperado', sucesso: false })
    }
})


servidor.listen(porta, () => {
    console.log('servidor rodando ')
})