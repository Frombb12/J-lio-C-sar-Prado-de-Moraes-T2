const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('produtos.ejs'); // Renderiza o arquivo produtos.ejs
  });

export default router;