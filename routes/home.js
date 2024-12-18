import express from 'express';
const router = express.Router();

router.get('/', (req, res) => { //rota de acesso pro html exibido no site
    res.render('index.ejs', {
    });
  });

  
  export default router;