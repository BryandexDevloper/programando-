console.clear()
const fs = require('fs')
const path = require('path');
const mensagem = require('./bordao');




class BancoDados{
    constructor(){
        this.arquivo = path.join(__dirname,'dataBase.json')
        this.dados = JSON.parse(fs.readFileSync(this.arquivo,'utf-8'))
    }


    Salvar(object){
        fs.writeFileSync(this.arquivo,JSON.stringify(object,null,2),'utf-8')
    }
}
const dados = new BancoDados



const Login = (req,res)=>{
    
    const pessoa = req.query
    
    const pessoaEncontrada = dados.dados.usuarios.find(ress => ress.email === pessoa.email)
    if(!pessoaEncontrada){
        return res.status(400).json({mensagem:'Usuario nao encontrado'})
    }

    if(pessoaEncontrada.senha != pessoa.senha){
        return res.status(400).json({mensagem:'Senha incorreta'})
    }else{
        return res.status(200).json({mensagem:'Login efetivado com sucesso'})
    }
   
}


const Cadastro = (req,res)=>{
   const pessoa = req.query
    
    const pessoaEncontrada = dados.dados.usuarios.find(ress => ress.email === pessoa.email)
    if(pessoaEncontrada){
        return res.status(400).json({mensagem:'Usuario ja cadastrado faça login ou entre com outra senha'})
    }else{
        let id = dados.dados.usuarios.length + 1
       const novoUsurio = {
            id:id,
            nome:pessoa.nome,
            email:pessoa.email,
            senha:pessoa.senha,
            telefone:pessoa.telefone || null,
            enderecoId:null,
            role:'user',
            criado_em:new Date().toISOString()
        }


        dados.dados.usuarios.push(novoUsurio)
        dados.Salvar(dados.dados)

        return res.status(200).json({mensagem:'Usuario Cadastrado com sucesso'})
    }

    
}


    const ListarUsers = (req,res)=>{
        const Pessoa = req.query

        if(Pessoa.role === 'admin'){
            const pessoaEncontrada = dados.dados.usuarios
            return res.status(200).json({mensagem:pessoaEncontrada})
            
        }else{
             return res.status(400).json({mensagem:'Somente administradores podem ver todos os usuarios'})
        }
    }


    const CadastrarAdmin = (req,res)=>{
    
    const pessoa = req.query
    const pessoaEncontrada = dados.dados.usuarios.find(ress => ress.email === pessoa.email)
    if(pessoaEncontrada){
       pessoaEncontrada.role = 'admin'
        dados.Salvar(dados.dados)
    }
    
    
    else{
        let id = dados.dados.usuarios.length + 1
       const novoUsurio = {
            id:id,
            nome:pessoa.nome,
            email:pessoa.email,
            senha:pessoa.senha,
            telefone:pessoa.telefone || null,
            enderecoId:null,
            role:'admin',
            criado_em:new Date().toISOString()
        }


        dados.dados.usuarios.push(novoUsurio)
        dados.Salvar(dados.dados)

        return res.status(200).json({mensagem:'Usuario Cadastrado com sucesso como administrador'})
    }

    }




module.exports = {Login,Cadastro,ListarUsers,CadastrarAdmin}