import Contato from "../models/mContato.js";
import sequelize from "../config/database.js";


export const criarContato = async (req, res) => { // função para criar um contato no banco
  try {
    const contato = await Contato.create(req.body);
    res.status(201).json(contato);
  } catch (err) {
    if (err.name === "SequelizeConnectionError") {
      // mensagem caso encontre algum erro de conexão com o banco de dados
      res.status(500).json({ error: "Erro de conexão com o banco de dados" });
    } else if (err.name === "SequelizeValidationError") {
      // Erro de validação do sequelize
      res.status(400).json({
        error: "Erro de validação",
        details: err.errors.map((e) => e.message), // meio para conferir de forma mais facil o erro
      });
    } else {
      res.status(500).json({ error: "Erro ao criar contato", details: err.message }); // mensagem para outros erros que não entram no caso acima
    }
  }
};

export const listarContatos = async (req, res) => { // função para listar todos os Contatos presentes no banco
  try {
    const contatos = await Contato.findAll();
    res.status(200).json(contatos);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao listar os contatos", details: err.message });
  }
};

export const obterContatos = async (req, res) => { // encontra o contato específico a partir do parâmetro ID
  try {
    const contato = await Contato.findByPk(req.params.id);
    if (contato) {
      res.status(200).json(contato);
    } else {
      res.status(404).json({ error: "Contato não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao obter o contato", details: err.message });
  }
};

export const atualizarContato= async (req, res) => { // método para atualizar as informações de algum contato, encontrando ele a partir do ID
  try {
    const [updated] = await Contato.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const contato = await Contato.findByPk(req.params.id);
      res.status(200).json(contato);
    } else {
      res.status(404).json({ error: "Contato não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar o Contato", details: err.message });
  }
};

export const deletarContato = async (req, res) => { // função para deletar algum contato da tabela
  try {
    const [results, metadata] = await sequelize.query(
      "DELETE FROM Contatos WHERE id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.DELETE }
    );
    if (metadata.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Contato não encontrado" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao deletar o Contato", details: err.message });
  }
};