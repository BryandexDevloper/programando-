const app = require('./app');
const mensagem = require('./bordao');
const http = require('http')
const socket = require('socket.io');
const { patch } = require('./routes');
const server = http.createServer(app)
const PORTA = process.env.PORT || 3000;

const io = socket(server, {
  path: '/socket.io', 
  cors: { origin: '*' } 
});

io.on('connection', (socket) => {
  console.log('Novo usuário conectado:', socket.id);

    socket.on('mensagem',(msg)=>{
        console.log(msg)
    })
});


server.listen(PORTA, () => {
    console.log(mensagem);
    console.log(`Servidor rodando na porta ${PORTA}`);
    
});



