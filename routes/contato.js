import express from 'express';
import { criarContato } from '../controllers/contatoController.js'; // importa os controles da pasta controllers

const router = express.Router();

router.get('/', (req, res) => { //rota de acesso pro html exibido no site
    res.render('contato.ejs'); 
  });
  
    router.post('/salvarContato', criarContato); // rota de envio dos dados para o backend
   
export default router;