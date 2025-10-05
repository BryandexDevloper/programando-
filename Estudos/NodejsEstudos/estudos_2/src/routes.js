const express = require('express'); 
const router = express.Router();    
const mensagem = require('./bordao'); 
const {Login,Cadastro,alterar_email,Validar_email,Alterar_senha,recuperar_senha,validar_senha,verificar_login_MW,verificar_cadastro_MW,verificar__alterar_senha_MW,vefiricar_alterar_email_MW} = require('./controlers')

router.post("/Login",verificar_login_MW,Login)
router.post('/Cadastro',verificar_cadastro_MW,Cadastro)
router.post('/alterar_email',vefiricar_alterar_email_MW,alterar_email)
router.put('/Validar_email',Validar_email)
router.put('/alterar_senha',verificar__alterar_senha_MW,Alterar_senha)
router.post('/recuperar_senha',recuperar_senha)
router.put('/validar_senha',validar_senha,)

router.use((req,res)=>{
    res.status(400).json({mensagem:'Essa rota não existe'})
})



module.exports = router;
