const express = require('express')
const servidor = express()
const port = 3000

servidor.get('/ola',(req,res)=>{
    res.send('<h1>Servidor rodadndo</h1')
})


servidor.listen(port,()=>{console.log("Servidor rodando")})