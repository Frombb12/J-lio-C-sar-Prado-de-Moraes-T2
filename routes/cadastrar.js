import express from 'express';
import { obterLogin, cadastrarUsuario } from "../controllers/loginController.js"; // importa os controles da pasta controllers

const router = express.Router();

router.get('/cadastro', (req, res) => { //rota de acesso pro html exibido no site
    res.render('cadastrar.ejs',);
  });

router.get('/login', (req, res) => { // rota para voltar a página login quando realizar o cadastro
  res.render('login.ejs', );
});

router.post('/login', obterLogin); // rota de envio dos dados para o backend
router.post('/cadastrar', cadastrarUsuario);

export default router;