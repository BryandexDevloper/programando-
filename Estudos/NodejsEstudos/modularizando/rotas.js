const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    { curso: 'node', info: 'curso de node' },
    { curso: 'react', info: 'curso de react' },
    { curso: 'express', info: 'curso de express' },
    { curso: 'mysql', info: 'curso de mysql' }
]

rotas.get('/', (req, res) => {
    return res.json({ ola: "seja bem vindo" })
})

// Rota dinâmica corrigida
rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid
    let cursoEncontrado = cursosInfo.find(c => c.curso === curso)

    if (!cursoEncontrado) {
        res.status(404).json({ erro: 'Dados não encontrados', curso: curso })
    } else {
        res.status(200).json({ curso: cursoEncontrado })
    }
})

module.exports = rotas
    