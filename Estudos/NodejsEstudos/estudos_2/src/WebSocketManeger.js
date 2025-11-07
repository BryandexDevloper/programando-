// src/socketManager.js
const usuarios = [];

// Adiciona um usuário novo
function adicionarUsuario(userId, socketId) {
  // evita duplicar usuários
  if (!usuarios.find(u => u.userId === userId)) {
    usuarios.push({ userId, socketId });
  }
}

// Remove usuário ao desconectar
function removerUsuario(socketId) {
  const index = usuarios.findIndex(u => u.socketId === socketId);
  if (index !== -1) usuarios.splice(index, 1);
}

// Filtra usuários do banco, marcando quem está online
function filtrar_usuarios(array) {
  // array = lista de usuários vinda do banco (id, name, fotoPerfil)

  const users_filtrados = array.map(user => {
    // procura se o usuário está conectado
    const conectado = usuarios.find(u => u.userId === user.id);

    return {
      id: user.id,
      name: user.name,
      fotoPerfil: user.fotoPerfil,
      online: !!conectado,
      socketId: conectado ? conectado.socketId : null
    };
  });

  return users_filtrados;
}

// Retorna todos os conectados
function pegarUsuarios() {
  return usuarios;
}



let io = null;

function inicializarSocketIO(ioInstance) {
  io = ioInstance;
}

function getIO() {
  if (!io) throw new Error("Socket.io não foi inicializado");
  return io;
}

module.exports = {
  adicionarUsuario,
  removerUsuario,
  pegarUsuarios,
  filtrar_usuarios,
  inicializarSocketIO,
  getIO
};
