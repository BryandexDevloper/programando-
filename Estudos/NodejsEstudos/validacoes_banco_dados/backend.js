const express = require('express')
const mysql = require('mysql2')
const porta = process.env.PORT
const servidor = express()
servidor.use(express.json())

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'loja'
})

servidor.post('/login',(req,res)=>{
    conexao.query('SELECT * FROM usuarios',(error,resultado)=>{
        const {email,senha} = req.body
        if(error){
           return res.status(400).json({mensagem:'Ocorreu algum erro inesperado'})
        }

        const usuarioEncontrado = resultado.find(res =>res.email === email && res.senha === senha)
        if(usuarioEncontrado){
            return res.status(200).json({mensagem:'Usuario logado com sucesso'})
        }else{
            return res.status(400).json({mensagem:'Credenciais incorretas'})
        }
    })
    

})


servidor.post('/cadastro',(req,res)=>{
    conexao.query('SELECT * FROM usuarios',(error,resultado)=>{
        const {email,senha} = req.body
        if(error){
            return res.status(400).json({mensagem:'Ocorreu algum erro inesperado'})
        }

        const usuarioEncontrado = resultado.find(res => res.email === email)

        if(usuarioEncontrado){
            return res.status(403).json({mensagem:'Esse usuario ja existe faça login ou tente outro email'})
        }else{
            conexao.query('INSERT INTO usuarios (email,senha) VALUES (?,?)',[email,senha],(error,resultado1)=>{
                if(error){
                    return res.status(400).json({mensagem:'Ocorreu algum erro inesperado'})
                }

                res.status(200).json({mensagem:'Usuario cadastrado com exito'})
            })
        }
    })
})


servidor.listen(porta||3000,()=>{console.log('Servidor Rodando...')})