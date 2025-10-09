const express = require('express'); 
const router = express.Router();    
const mensagem = require('./bordao'); 
const {Login,Cadastro,alterar_email,Validar_email,Alterar_senha,recuperar_senha,validar_senha,Buscar_Portfolios} = require('./controlers')
const {verificar_login_MW,verificar_cadastro_MW,verificar__alterar_senha_MW,vefiricar_alterar_email_MW,varificar_email_MW,verificar_recuperar_senha_MW,verificar_senha_MW,verificar_campos_MW,verificar_email_campo_MW,verificar_novoemail_campo_MW} = require('./Midwares')

router.post("/Login",verificar_email_campo_MW,verificar_campos_MW,verificar_login_MW,Login)
router.post('/Cadastro',verificar_email_campo_MW,verificar_campos_MW,verificar_cadastro_MW,Cadastro)
router.post('/alterar_email',verificar_email_campo_MW,verificar_novoemail_campo_MW,verificar_campos_MW,vefiricar_alterar_email_MW,alterar_email)
router.put('/Validar_email',verificar_campos_MW,varificar_email_MW,Validar_email)
router.put('/alterar_senha',verificar_campos_MW,verificar__alterar_senha_MW,Alterar_senha)
router.post('/recuperar_senha',verificar_email_campo_MW,verificar_campos_MW,verificar_recuperar_senha_MW,recuperar_senha)
router.put('/validar_senha',verificar_campos_MW,verificar_senha_MW,validar_senha,)
router.get('/buscar_desenvolvedor',Buscar_Portfolios)

router.use((req,res)=>{
    res.status(400).json({mensagem:'Essa rota não existe'})
})



module.exports = router;
