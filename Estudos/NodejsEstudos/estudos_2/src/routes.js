const express = require('express'); 
const router = express.Router();    
const mensagem = require('./bordao'); 
const {Login,Cadastro,alterar_email,Validar_email,Alterar_senha,recuperar_senha,validar_senha,Buscar_Portfolios,Buscar_tecnologia,buscarId, enviarImagens,Buscar_projetos_user,buscar_produto_id,Buscar_recursos_ad,buscar_produtos_dinamico,Buscar_comentarios,criar_conversa,buscar_conversas,buscar_conversas_ativas,enviar_mensagem} = require('./controlers')
const {verificar_login_MW,verificar_cadastro_MW,verificar__alterar_senha_MW,vefiricar_alterar_email_MW,varificar_email_MW,verificar_recuperar_senha_MW,verificar_senha_MW,verificar_campos_MW,verificar_email_campo_MW,verificar_novoemail_campo_MW,veficar_tokem_MW,upload,censurarContatos} = require('./Midwares')

router.post("/Login",verificar_email_campo_MW,verificar_campos_MW,verificar_login_MW,Login)
router.post('/Cadastro',verificar_email_campo_MW,verificar_campos_MW,verificar_cadastro_MW,Cadastro)
router.get('/buscar_desenvolvedor',Buscar_Portfolios)
router.get('/Buscar_tecnologia',Buscar_tecnologia)
router.get('/buscarId',buscarId)
router.get('/Buscar_projetos_user',Buscar_projetos_user)
router.get('/criar_conversa',criar_conversa)
router.get('/buscar_conversas',buscar_conversas)
router.post('/enviar_mensagem',censurarContatos,enviar_mensagem)
router.get('/buscar_produto_id',buscar_produto_id)
router.get('/Buscar_recursos_ad',Buscar_recursos_ad)
router.get('/buscar_produtos_dinamico',buscar_produtos_dinamico)
router.get('/Buscar_comentarios',Buscar_comentarios)
router.get('/buscar_conversas_ativas',buscar_conversas_ativas)

router.post('/upload',upload.array('imagem',5),enviarImagens)
router.use((req,res)=>{
    res.status(400).json({mensagem:'Essa rota não existe'})
})
router.use(veficar_tokem_MW)
router.post('/alterar_email',verificar_email_campo_MW,verificar_novoemail_campo_MW,verificar_campos_MW,vefiricar_alterar_email_MW,alterar_email)
router.put('/Validar_email',verificar_campos_MW,varificar_email_MW,Validar_email)
router.put('/alterar_senha',verificar_campos_MW,verificar__alterar_senha_MW,Alterar_senha)
router.post('/recuperar_senha',verificar_email_campo_MW,verificar_campos_MW,verificar_recuperar_senha_MW,recuperar_senha)
router.put('/validar_senha',verificar_campos_MW,verificar_senha_MW,validar_senha,)






module.exports = router;
