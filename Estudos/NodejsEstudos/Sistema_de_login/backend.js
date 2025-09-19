const express = require('express')
const cors = require('cors')
const servidor = express()
const fetch = require('node-fetch')

// esse aqui e um modulo nativo do node js que le um arquivo da pasta
const banco_dados = require('fs')
const { error } = require('console')

// esse comando permite qual origem acessar a api
servidor.use(cors())

// servidor. use(express.json()) ele literalmente recebe o objeto e ja transforma do json()
servidor.use(express.json())


servidor.post('/',(req,res)=>{

  async function name(params) {
            const CPF = "19219894670"
            const data = await fetch(`https://www.receitaws.com.br/v1/cpf/${CPF}`)
            const res = data.json()
            console.log(res)
        }

        name()

})

//e aqui so to falando para o servidor so aceitar a porta 3000
servidor.listen(3000, () => {
    console.log("Servidor rodando")
})