import express from 'express';
import { criarContato } from '../controllers/contatoController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('contato.ejs'); // Renderiza o arquivo contatos.ejs
  });
  
    router.post('/salvarContato', criarContato);
   
export default router;