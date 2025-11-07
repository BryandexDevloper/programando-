const app = require('./app');
const http = require('http');
const socket = require('socket.io');
const mensagem = require('./bordao');
const { adicionarUsuario, removerUsuario,inicializarSocketIO } = require('./WebSocketManeger');

const server = http.createServer(app);
const PORTA = process.env.PORT || 3000;

const io = socket(server, {
  path: '/socket.io',
  cors: { origin: '*' }
});


inicializarSocketIO(io)

  io.on("connection", (socket) => {
  console.log("✅ Novo cliente conectado:", socket.id);

  // ✅ ADICIONE: Registrar usuário ao conectar
  socket.on("registrar_usuario", (userId) => {
   if(userId === 16){
     console.log(`👤 Usuário Patrão logado `);
   }else{
     console.log(`👤 Usuário ${userId} conectado com socket ${socket.id}`);
   }
    adicionarUsuario(userId, socket.id);
    
    // Notifica todos sobre mudança de status
    io.emit("usuario_status_mudou", { userId, online: true });
  });

  // Entrar em uma sala de conversa
  socket.on("entrar_conversa", (conversaId) => {
    socket.join(`conversa_${conversaId}`);
   
  });

  // Sair da sala
  socket.on("sair_conversa", (conversaId) => {
    socket.leave(`conversa_${conversaId}`);
    
  });

  // ✅ ADICIONE: Desconexão
  socket.on("disconnect", () => {
    console.log("❌ Cliente desconectado:", socket.id);
    
    // Remove usuário e notifica todos
    const usuario = removerUsuario(socket.id);
    if (usuario) {
      io.emit("usuario_status_mudou", { userId: usuario.userId, online: false });
    }
  });
});

module.exports = { io };

server.listen(PORTA, () => {
  console.log(mensagem);
  console.log(`Servidor rodando na porta ${PORTA}`);
});
