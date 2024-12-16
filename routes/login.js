import express from 'express';
const router = express.Router();
import { criarLogin } from '../controllers/loginController.js';

router.get('/', (req, res) => {
    res.render('login.ejs', {
      title: 'Login - One Piece',
    });
  });
  
  // Rota para processar o login
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Validação simplificada
    if (username === 'teste@teste' && password === 'teste') {
      res.redirect('/dashboard'); // Redireciona para o painel do usuário
    } else {
      res.status(401).send('Usuário ou senha inválidos'); // Exibe erro de autenticação
    }
  });
  

export default router;