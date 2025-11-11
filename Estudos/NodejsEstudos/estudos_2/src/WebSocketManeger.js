let io;
const usuariosConectados = new Map(); // userId -> socketId

const adicionarUsuario = (userId, socketId) => {
  usuariosConectados.set(userId, socketId);
  console.log(`✅ Usuário ${userId} adicionado. Total: ${usuariosConectados.size}`);
};

const removerUsuario = (socketId) => {
  for (const [userId, sId] of usuariosConectados.entries()) {
    if (sId === socketId) {
      usuariosConectados.delete(userId);
      console.log(`❌ Usuário ${userId} removido. Total: ${usuariosConectados.size}`);
      return { userId };
    }
  }
  return null;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io não foi inicializado!");
  }
  return io;
};

const filtrar_usuarios = (usuarios) => {
  return usuarios.map(usuario => ({
    ...usuario,
    online: usuariosConectados.has(usuario.id),
    socketId: usuariosConectados.get(usuario.id) || null
  }));
};

const inicializarSocketIO = (ioInstance) => {
  io = ioInstance;

  io.on("connection", (socket) => {
    console.log("✅ Novo cliente conectado:", socket.id);

    // ✅ Registrar usuário
    socket.on("registrar_usuario", (userId) => {
      if (userId === 16) {
        console.log(`👤 Usuário Patrão logado`);
         socket.join(`user_${userId}`);
      } else {
         socket.join(`user_${userId}`);
        console.log(`👤 Usuário ${userId} conectado com socket ${socket.id}`);
      }
      
      adicionarUsuario(userId, socket.id);
      
      // Entra na sala pessoal do usuário
      socket.join(`user_${userId}`);
      
      // Notifica todos sobre mudança de status
      io.emit("usuario_status_mudou", { userId, online: true });
    });

    // ✅ Entrar em conversa
    socket.on("entrar_conversa", (conversaId) => {
      socket.join(`conversa_${conversaId}`);
      console.log(`📥 Socket ${socket.id} entrou na conversa_${conversaId}`);
    });

    // ✅ Sair da conversa
    socket.on("sair_conversa", (conversaId) => {
      socket.leave(`conversa_${conversaId}`);
      console.log(`📤 Socket ${socket.id} saiu da conversa_${conversaId}`);
    });

    // ✅ Mensagens foram lidas
    socket.on("mensagens_lidas", ({ conversa_id, user_id }) => {
      console.log(`📖 Mensagens lidas na conversa ${conversa_id} pelo usuário ${user_id}`);
      
      socket.to(`conversa_${conversa_id}`).emit("atualizar_contador_lidos", {
        conversa_id,
        user_id
      });
    });

    // ✅ Mensagem específica foi lida
    socket.on("mensagem_lida", ({ conversa_id, mensagem_id, user_id }) => {
      console.log(`📖 Mensagem ${mensagem_id} lida pelo usuário ${user_id}`);
      
      socket.to(`conversa_${conversa_id}`).emit("mensagem_visualizada", {
        mensagem_id,
        user_id
      });
    });

    // ✅ Desconexão
    socket.on("disconnect", () => {
      console.log("❌ Cliente desconectado:", socket.id);
      

      
      const usuario = removerUsuario(socket.id);
      if (usuario) {
        io.emit("usuario_status_mudou", { userId: usuario.userId, online: false });
      }
    });
  });
};

module.exports = {
  adicionarUsuario,
  removerUsuario,
  inicializarSocketIO,
  getIO,
  filtrar_usuarios
};