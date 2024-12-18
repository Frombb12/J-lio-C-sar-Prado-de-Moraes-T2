import Login from "../models/mLogin.js";

// Controlador para realizar o login com dados do banco
export const obterLogin = async (req, res) => {
  const { usuario, senha } = req.body; // Recebe os dados enviados pelo form

  try {
    // Busca as informações de usuário inseridas no forms dentro do banco que tenha o mesmo 'usuario' e 'senha'
    const user = await Login.findOne({
      where: { usuario, senha },
    });

    if (user) {
      // mensagem de sucesso no login
      res.status(200).json({ message: "Login realizado com sucesso!", user: user.usuario });
    } else {
      // mensagem enviada caso não encontre um usuário com os respectivos dados
      res.status(401).json({ error: "Usuário ou senha inválidos" });
    }
  } catch (err) {

    console.error("Erro ao realizar login:", err);
    res.status(500).json({ error: "Erro no servidor", details: err.message });
  }
};

export const cadastrarUsuario = async (req, res) => {
  const { usuario, senha, confirmSenha } = req.body;

  try {
    if (senha !== confirmSenha) { // método para verificar se as senhas estão iguais
      return res.status(400).json({ error: "As senhas não coincidem." });
    }

    // Verificar se o usuário já existe
    const usuarioExistente = await Login.findOne({ where: { usuario } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "Usuário já existe." });
    }

    // Criar o novo usuário
    const novoUsuario = await Login.create({ usuario, senha });

    res.status(201).json({ message: "Usuário criado com sucesso", user: novoUsuario });
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar usuário", details: err.message });
  }
};