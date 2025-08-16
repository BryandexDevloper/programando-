const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 3000
const servidor = express()
servidor.use(cors())
servidor.use(express.json())



servidor.post('/test',(req,res)=>{
    const {nome,idade,profissao} = req.body

    if(nome){
       return console.log(nome)
    }

    if(idade){
        return console.log(idade)
    }

    if(profissao){
        return console.log(profissao)
    }

})


servidor.listen(port,()=>{console.log("servidor rodando")})

