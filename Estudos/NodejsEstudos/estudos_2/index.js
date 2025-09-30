import express from "express"
import cors from "cors"
import figlet from "figlet"
import chalk from "chalk"
const port = process.env.PORT || 3000

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

const mensagem = figlet.textSync('Bryandex API REST',{
    font:'Standard',
    horizontalLayout: 'default', 
    verticalLayout: 'default'
})

const db = [
    { id: 1, nome: 'gust123', email: 'exempe@email.com', senha: '123456', token: 'abc123' },
    { id: 2, nome: 'ana_silva', email: 'ana.silva@email.com', senha: 'senha123', token: 'def456' },
    { id: 3, nome: 'joao_dev', email: 'joao.dev@email.com', senha: 'devjoao', token: 'ghi789' },
    { id: 4, nome: 'maria_gamer', email: 'maria.gamer@email.com', senha: 'gamer2025', token: 'jkl012' },
    { id: 5, nome: 'carlos_ti', email: 'carlos.ti@email.com', senha: 'ti2025', token: 'mno345' },
    { id: 6, nome: 'bia_code', email: 'bia.code@email.com', senha: 'codebia', token: 'pqr678' }
]



servidor.post('/cadastrar',(req,res)=>{
    const dados = req.query
    const usuario_encontrado = db.find(ress =>ress.email === dados.email)
    if(!usuario_encontrado){
        let id = db.length + 1
        db.push({id:id,nome:dados.nome,email:dados.email})
        res.status(200).json({mensagem:'Usuario cadastrado com sucesso',db:db})
        
    }else{
        res.status(400).json({mensagem:'Esse usuario ja esta cadastrado '})
    }
})


servidor.post('/login',(req,res)=>{
    const dados = req.query

    const usuario_encontrado = db.find(ress=>ress.email === dados.email)
    if(!usuario_encontrado){
        return res.status(400).json({mensagem:'Usuario nao encontrado'})
    }

    if(usuario_encontrado.senha != dados.senha){
        return res.status(400).json({mensagem:'Senha encorreta'})
    }else{
        return res.status(200).json({mensagem:'Usuario logado com sucesso'})
    }
   
})


servidor.put('/alteracao',(req,res)=>{
    const dados = req.query

    if(dados.alterar === 'email'){
        const usuario_encontrado = db.find(ress => ress.email === dados.email)
        if(!usuario_encontrado){
            return res.status(400).json({mensagem:'Usuario nao encontrado'})
        }
        
        if(usuario_encontrado.senha != dados.senha){
            return res.status(400).json({mensagem:'Senha incorreta'})
        }else{
            usuario_encontrado.email = dados.novo_email
            return res.status(200).json({mensagem:`Endereço de email alterado com sucesso para ${dados.novo_email}`,db:db})
        }
    }


    if(dados.alterar === 'senha'){
        const usuario_encontrado = db.find(ress => ress.email === dados.email)

        if(!usuario_encontrado){
            return res.status(400).json({mensagem:'Usuario nao encontrado'})
        }

         if(usuario_encontrado.senha != dados.senha){
            return res.status(400).json({mensagem:'Senha incorreta'})
        }else{
            usuario_encontrado.senha = dados.nova_senha
            return res.status(200).json({mensagem:`Endereço de email alterado com sucesso para ${dados.nova_senha}`,db:db})
        }
    }


     if(dados.alterar === 'nome'){
        const usuario_encontrado = db.find(ress => ress.nome === dados.nome)

        if(!usuario_encontrado){
            return res.status(400).json({mensagem:'Usuario nao encontrado'})
        }else{
            usuario_encontrado.nome = dados.nome
            return res.status(400).json({mensagem:`Nome alterado com sucesso para ${dados.nome}`})
        }

         
    }

})


servidor.listen(port,()=>{console.log(`${chalk.green(mensagem)}  Servidor rodando na porta ${port}`)})