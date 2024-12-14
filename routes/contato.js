const express = require("express");
import { criarContato } from '../controllers/contatoController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contato.ejs'); // Renderiza o arquivo contatos.ejs
  });
  
  /* Rota para processar o formulário
  router.post('/salvarContato', (req, res) => {
    const { Nome, Email, phoneNumber, descricao } = req.body;
  */

    router.post('/salvar', criarContato);

export default router;