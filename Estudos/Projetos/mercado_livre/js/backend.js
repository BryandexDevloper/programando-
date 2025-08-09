const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const porta = process.env.PORT || 3000
const servidor = express()

servidor.use(cors())
servidor.use(express.json())



servidor.listen(porta,()=>{
    console.log('servidor rodando ')
})