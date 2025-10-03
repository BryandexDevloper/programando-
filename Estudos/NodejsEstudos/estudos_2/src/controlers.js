console.clear();
const mensagem = require("./bordao");
const dataBase = require("./Database");
const bcrypt = require("bcrypt"); // CORRIGIDO


async function enviarEmail(params) {
    const data = await fetch('https://api-envio-email-bryandex.onrender.com',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
        service:'gmail',
        email:'adrianbryan072@gmail.com',
        password:
      })
    })
}




const Login = async (req, res) => {
  const data = req.body;
  try {
    if (!data.email || !data.senha) {
      return res
        .status(400)
        .json({ mensagem: "Ainda faltam dados importantes" });
    }

    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length === 0) {
      return res.status(400).json({ mensagem: "Usuario nao encontrado" });
    }

    const usuario = ress[0];

    const senhaValida = await bcrypt.compare(data.senha, usuario.passwordHash);
    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Senha invalida" });
    }

    return res.status(200).json({
      mensagem: "Login autorizado",
      user: {
        nome: usuario.name,
        email: usuario.email,
        tipo: usuario.role,
        dataCriacao: usuario.createdAt,
      },
    });
  } catch (err) {
    return res.status(400).json({ mensagem: err.message });
  }
};

const Cadastro = async (req, res) => {
  try {
    const data = req.body;

    if (!data.email || !data.senha) {
      return res
        .status(400)
        .json({ mensagem: "Ainda faltam dados importantes" });
    }

    const ress = await dataBase.query("SELECT * FROM users WHERE email = ?", [
      data.email,
    ]);

    if (ress.length > 0) {
      return res
        .status(400)
        .json({ mensagem: "Esse usuário já está cadastrado" });
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    const insertQuery = `
            INSERT INTO users (name, email, passwordHash, role, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, NOW(), NOW())
        `;
    await dataBase.query(insertQuery, [
      data.nome,
      data.email,
      senhaHash,
      "cliente",
    ]);

    return res.status(201).json({ mensagem: "Cadastrado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ mensagem: err.message });
  }
};

module.exports = { Login, Cadastro };
