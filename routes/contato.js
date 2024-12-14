const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contato'); // Renderiza o arquivo contatos.ejs
  });
  
  // Rota para processar o formulário
  router.post('/salvarContato', (req, res) => {
    const { Nome, Email, phoneNumber, descricao } = req.body;
  
    // Exemplo de manipulação: salvar no console ou banco de dados
    console.log('Dados recebidos:');
    console.log(`Nome: ${Nome}`);
    console.log(`Email: ${Email}`);
    console.log(`Telefone: ${phoneNumber}`);
    console.log(`Descrição: ${descricao}`);
  
    // Enviar uma resposta ao usuário
    res.send('Seu contato foi recebido! Entraremos em contato em breve.');
  });

module.exports = router;