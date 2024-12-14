const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('produtos'); // Renderiza o arquivo produtos.ejs
  });

module.exports = router;