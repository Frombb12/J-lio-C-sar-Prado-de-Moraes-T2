import Login from "../models/mLogin.js";
import sequelize from "../config/database.js"; // Adicionar a importação para sequelize


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
