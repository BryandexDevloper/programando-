const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const porta = process.env.PORT || 3000
const servidor = express()
const validator = require('validator')
const {confirmar_cadastro_html} = require('./confirmar_cadastro')

servidor.use(cors())
servidor.use(express.json())

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sistema_loja'
})


const sql_usuarios_incerir = 'INSERT INTO usuarios (email,senha,nome,sobrenome,telefone) VALUES (?,?,?,?,?)'
const sql_validar_cadastro = 'INSERT INTO verificacoes (codigo_verificacao) VALUES (?)'
const sql_validar_codigo = 'SELECT * FROM verificacoes'
const sql_usuarios = 'SELECT * FROM usuarios'
const sql_confirmar_novos_cadastros = ''
const sql_produtos_1 = 'SELECT * FROM produtos1'
const sql_produtos_2 = 'SELECT * FROM produtos2'
const sql_produtos_3 = 'SELECT * FROM produtos3'
const sql_deletar_codigo_cadastro = 'DELETE FROM verificacoes WHERE id = ?'

servidor.post('/login',(req,res)=>{
    const {email,senha} = req.body
    const email_limpo = validator.whitelist(email,'A-Za-z0-9@_.-')
    const senha_limpa = validator.escape(senha)
    if(validator.isEmail(email_limpo)){
        // aqui vem o banco de dados
        conexao.query(sql_usuarios,(err,banco)=>{
            if(err){
                return res.status(400).json({mensagem:'Erro ao consultar o banco',sucesso:false})
            }

            const usuariosEncontado = banco.find(res => res.email === email_limpo && res.senha === senha_limpa)
            if(usuariosEncontado){
                return res.status(200).json({mensagem:'acesso permitido',sucesso:true,usuario:usuariosEncontado})
            }else{
                return res.status(400).json({mensagem:'Senha ou email encorretos',sucesso:false})
            }
        })

    }
})



servidor.post('/validar_cadastro',(req,res)=>{
    const {email} = req.body
    const email_limpo = validator.whitelist(email,'a-zA-Z0-9@_-.')
    let codigo = Math.floor(Math.random * 145751) 
    const htmlEmail = confirmar_cadastro_html(codigo) 
    conexao.query(sql_validar_cadastro,[codigo],(err,resultado)=>{
            if(err){
                return res.status(400).json({mensagem:'Erro ao consultar o banco',sucesso:false})
            }
        
        async function enviarEmail() {

            try{

            
            const data = await fetch('https://api-envio-email-bryandex.onrender.com/enviar_mail',{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({
                    service:'gmail',
                    email:'adrianbryan072@gmail.com',
                    password:'fnfb gmzw sefz gaem',
                    to:email,
                    subject:'Codigo de verificação para criação de conta',
                    html:htmlEmail
                })
            })

            const resultado = await data.json()
            if(resultado){
                res.status(200).json({mensagem:resultado.mensagem,sucesso:true})
            }else{
                return res.status(400).json({mensagem:resultado.mensagem,sucesso:false})
            }

            }catch(err){
                if(err){
                    return res.status(400).json({mensagem:'Erro ao enviar o email tente novamente',sucesso:false,erro:err})
                }
            }
          
        }

        enviarEmail()
    })

})

servidor.post('/cadastro', (req, res) => {
  const { email, senha, codigo_verificacao,nome,sobrenome,telefone } = req.body;

  const email_limpo =  validator.whitelist(email,'A-Za-z0-9@._-');
  const codigo_limpo = validator.whitelist(codigo_verificacao,'0-9')
  const senha_limpa = validator.escape(senha)
  const nome_limpo = validator.whitelist(nome,'A-Za-z')
  const sobrenome_limpo = validator.whitelist(sobrenome,'A-Za-z')
  const telefone_limpo = validator.whitelist(telefone,'0-9')

  conexao.query(sql_validar_codigo, (err, banco) => {
    if (err) {
      return res.status(400).json({ mensagem: 'Erro ao consultar o banco' });
    }

    const codigoEncontrado = banco.find(res => res.codigo_verificacao === codigo_limpo);
    if (!codigoEncontrado) {
      return res.status(400).json({ mensagem: 'Código de verificação inválido' });
    }

    let id = codigoEncontrado.id;

    conexao.query(sql_usuarios_incerir, [email_limpo, senha_limpa,nome_limpo,sobrenome_limpo,telefone_limpo], (erro) => {
      if (erro) {
        return res.status(400).json({ mensagem: 'Erro ao inserir usuário' });
      }

      conexao.query(sql_deletar_codigo_cadastro, [id], (errDelete) => {
        if (errDelete) {
          console.error('Erro ao apagar código:', errDelete);
          // Mesmo com erro na exclusão, usuário já foi inserido
          return res.status(200).json({ mensagem: 'Usuário criado, mas erro ao apagar código', sucesso: true });
        }

        return res.status(200).json({ mensagem: 'Cadastro realizado com sucesso', sucesso: true });
      });
    });
  });
});




servidor.listen(porta,()=>{
    console.log('servidor rodando ')
})