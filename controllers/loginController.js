import Login from "../models/mLogin.js";
import sequelize from "../config/database.js"; // Adicionar a importação para sequelize

/**
 * Cria uma nova pergunta.
 */
export const criarLogin = async (req, res) => {
  try {
    const login = await Login.create(req.body);
    res.status(201).json(login);
  } catch (err) {
    if (err.name === "SequelizeConnectionError") {
      // Erro de conexão com o banco de dados
      res.status(500).json({ error: "Erro de conexão com o banco de dados" });
    } else if (err.name === "SequelizeValidationError") {
      // Erro de validação
      res.status(400).json({ error: "Erro de validação", details: err.errors });
    } else {
      // Outros erros
      res
        .status(500)
        .json({ error: "Erro ao criar login", details: err.message });
    }
  }
};

/**
 * Lista todas as perguntas.
 */
export const listarLogins = async (req, res) => {
  try {
    const logins = await Login.findAll();
    res.status(200).json(logins);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao listar os contatos", details: err.message });
  }
};

/**
 * Obtém uma pergunta específica pelo ID.
 */
export const obterLogin = async (req, res) => {
  try {
    const login = await Login.findByPk(req.params.id);
    if (login) {
      res.status(200).json(login);
    } else {
      res.status(404).json({ error: "Login não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao obter o Login", details: err.message });
  }
};

/**
 * Atualiza uma pergunta específica pelo ID.
 */
export const atualizarLogin = async (req, res) => {
  try {
    const [updated] = await Login.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const login = await Login.findByPk(req.params.id);
      res.status(200).json(login);
    } else {
      res.status(404).json({ error: "Login não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar o login", details: err.message });
  }
};

/**
 * Deleta uma pergunta específica pelo ID usando SQL puro.
 */
export const deletarLogin = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      "DELETE FROM Logins WHERE id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.DELETE }
    );
    if (metadata.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Login não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao deletar o login", details: err.message });
  }
};