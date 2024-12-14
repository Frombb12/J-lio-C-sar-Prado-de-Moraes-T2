import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
      title: 'O que é One Piece?',
    });
  });

  
  export default router;