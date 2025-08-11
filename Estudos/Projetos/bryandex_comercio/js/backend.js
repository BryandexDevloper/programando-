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
const sql_validar_codigo = 'SELECT * FROM verificacoes WHERE codigo_verificacao = ?'
const sql_usuarios = 'SELECT * FROM usuarios WHERE email = ?'
const sql_verificar_email_existe = 'SELECT id FROM usuarios WHERE email = ?'
const sql_confirmar_novos_cadastros = ''
const sql_produtos_1 = 'SELECT * FROM produtos1'
const sql_produtos_2 = 'SELECT * FROM produtos2'    
const sql_produtos_3 = 'SELECT * FROM produtos3'
const sql_deletar_codigo_cadastro = 'DELETE FROM verificacoes WHERE id = ?'

servidor.post('/login',(req,res)=>{
    const {email,senha} = req.body
    const email_limpo = validator.whitelist(email,'a-zA-Z0-9@_.-')
    const senha_limpa = validator.escape(senha)
    if(validator.isEmail(email_limpo)){
        // aqui vem o banco de dados
        conexao.query(sql_usuarios,[email_limpo],(err,banco)=>{
            if(err){
                return res.status(400).json({mensagem:'Erro ao consultar o banco',sucesso:false})
            }

            const usuariosEncontado = banco.find(u => u.email === email_limpo && u.senha === senha_limpa)
            if(usuariosEncontado){
                return res.status(200).json({mensagem:'acesso permitido',sucesso:true,usuario:usuariosEncontado})
            }else{
                return res.status(400).json({mensagem:'Senha ou email encorretos',sucesso:false})
            }
        })

        
    }else{
        return res.status(400).json({mensagem:'ocorreu um erro inesperado',sucesso:false})
    }
})

servidor.post('/validar_cadastro',(req,res)=>{
    try {
        const {email} = req.body
        
        if (!email) {
            return res.status(400).json({mensagem:'Email é obrigatório', sucesso:false})
        }
        
        const email_limpo = validator.whitelist(email,'a-zA-Z0-9@_.-')
        
        if (!validator.isEmail(email_limpo)) {
            return res.status(400).json({mensagem:'Email inválido', sucesso:false})
        }
        
        console.log('Validando email:', email_limpo) // DEBUG
        
        // Verifica se email já existe
        conexao.query(sql_verificar_email_existe, [email_limpo], (err, resultado) => {
            if(err){
                console.error('Erro ao consultar banco:', err) // DEBUG
                return res.status(400).json({mensagem:'Erro ao consultar o banco',sucesso:false})
            }
            
            if(resultado.length > 0){
                return res.status(400).json({mensagem:'Email já cadastrado',sucesso:false})
            }
            
            let codigo = Math.floor(Math.random() * 145751) 
            const htmlEmail = confirmar_cadastro_html(codigo) 
            
            console.log('Código gerado:', codigo) // DEBUG
            
            conexao.query(sql_validar_cadastro,[codigo],(err,resultado)=>{
                    if(err){
                        console.error('Erro ao inserir código:', err) // DEBUG
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
                            to:email_limpo,
                            subject:'Codigo de verificação para criação de conta',
                            html:htmlEmail,
                            email_user:email_limpo
                        })
                    })

                    const resultado_email = await data.json()
                    console.log('Resultado do email:', resultado_email) // DEBUG
                    
                    if(resultado_email && resultado_email.mensagem){
                        res.status(200).json({mensagem: resultado_email.mensagem, sucesso:true})
                    } else {
                        return res.status(400).json({mensagem: 'Erro ao enviar email', sucesso:false})
                    }

                    }catch(err){
                        console.error('Erro ao enviar email:', err) // DEBUG
                        return res.status(400).json({mensagem:'Erro ao enviar o email tente novamente',sucesso:false})
                    }
                  
                }

                enviarEmail()
            })
        })
    } catch (err) {
        console.error('Erro geral validar_cadastro:', err) // DEBUG
        return res.status(500).json({mensagem:'Erro interno do servidor',sucesso:false})
    }
})

servidor.post('/cadastro', (req, res) => {
  const { email, senha, codigo_verificacao,nome,sobrenome,telefone } = req.body;

 const email_limpo = validator.whitelist(String(email), 'a-zA-Z0-9@_.-');
const codigo_limpo = validator.whitelist(String(codigo_verificacao), '0-9');
const senha_limpa = validator.escape(String(senha));
const nome_limpo = validator.whitelist(String(nome), 'A-Za-z');
const sobrenome_limpo = validator.whitelist(String(sobrenome), 'A-Za-z');
const telefone_limpo = validator.whitelist(String(telefone), '0-9');

  conexao.query(sql_validar_codigo, [codigo_limpo], (err, banco) => {
    if (err) {
      return res.status(400).json({ mensagem: 'Erro ao consultar o banco' });
    }

    const codigoEncontrado = banco.find(u => u.codigo_verificacao === codigo_limpo);
    if (!codigoEncontrado) {
      return res.status(400).json({ mensagem: 'Código de verificação inválido' });
    }

    let id = codigoEncontrado.id;

    conexao.query(sql_usuarios_incerir, [email_limpo, senha_limpa,nome_limpo,sobrenome_limpo,telefone_limpo], (erro) => {
      if (erro) {
        if(erro.code === 'ER_DUP_ENTRY'){
          return res.status(400).json({ mensagem: 'Email já cadastrado' });
        }
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