const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
      title: 'O que é One Piece?',
    });
  });

module.exports = router;