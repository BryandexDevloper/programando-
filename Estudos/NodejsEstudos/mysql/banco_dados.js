const mysql = require('mysql2')
const express = require('express')
const servidor = express()
const porta = process.env.PORT

servidor.use(express.json())

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'loja'
})

servidor.get('/produtos',(req,res)=>{
    conexao.query('SELEC * FROM produtos',(error,resposta)=>{
        if(error){
            return res.status(500).json({erro:'Erro foi mal'})
        }else{
            res.json({resultado:resposta})
        }
    })
})


servidor.listen(porta||3000,()=>{console.log("Sevidor iniciado")})