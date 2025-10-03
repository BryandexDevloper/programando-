const express = require('express'); 
const router = express.Router();    
const mensagem = require('./bordao'); 
const {Login,Cadastro,ListarUsers,CadastrarAdmin} = require('./controlers')

router.post("/Login",Login)
router.post('/Cadastro',Cadastro)


router.use((req,res)=>{
    res.status(400).json({mensagem:'Essa rota não existe'})
})

module.exports = router;
