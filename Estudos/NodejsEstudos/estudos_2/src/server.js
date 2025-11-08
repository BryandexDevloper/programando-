const app = require('./app');
const http = require('http');
const socket = require('socket.io');
const mensagem = require('./bordao');
const { inicializarSocketIO } = require('./WebSocketManeger');

const server = http.createServer(app);
const PORTA = process.env.PORT || 3000;

const io = socket(server, {
  path: '/socket.io',
  cors: { origin: '*' }
});

// ✅ Passa toda lógica para o WebSocketManager
inicializarSocketIO(io);

server.listen(PORTA, () => {
  console.log(mensagem);
  console.log(`Servidor rodando na porta ${PORTA}`);
});

module.exports = { io };