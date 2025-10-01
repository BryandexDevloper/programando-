const app = require('./app');
const mensagem = require('./bordao');

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log(mensagem);
    console.log(`Servidor rodando na porta ${PORTA}`);
    
});
