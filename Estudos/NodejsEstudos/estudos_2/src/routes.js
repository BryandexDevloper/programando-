const express = require('express'); 
const router = express.Router();    
const mensagem = require('./bordao'); 
const {Login,Cadastro,alterar_email} = require('./controlers')

router.post("/Login",Login)
router.post('/Cadastro',Cadastro)
router.post('/alterar_email',alterar_email)

router.use((req,res)=>{
    res.status(400).json({mensagem:'Essa rota não existe'})
})

module.exports = router;
