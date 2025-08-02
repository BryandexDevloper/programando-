const express = require('express')
const servidor = express()
const porta = process.env.PORT

const rotas = require('./rotas')

servidor.use('/',rotas)
servidor.get('*',(req,res)=>{

    return res.send("Cursos padrao")
    
})

servidor.listen(porta || 3000,()=>{console.log("----- Servidor rodando -----")})