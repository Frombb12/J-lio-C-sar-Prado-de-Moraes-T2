import express from 'express';
import { obterLogin, cadastrarUsuario } from "../controllers/loginController.js";

const router = express.Router();

router.get('/cadastro', (req, res) => {
    res.render('cadastrar.ejs',);
  });

router.get('/login', (req, res) => {
  res.render('login.ejs', );
});

router.post('/login', obterLogin);
router.post('/cadastrar', cadastrarUsuario);

export default router;