import express from "express";
const router = express.Router();
import { obterLogin } from "../controllers/loginController.js"; // importa os controles da pasta controllers

// Renderiza a tela de login
router.get("/", (req, res) => { //rota de acesso pro html exibido no site
  res.render("login.ejs", {
  });
});

router.get("/index", (req, res) => { //rota de acesso para o usuário ir imediatamente para a página home quando realizar o Login
  res.render("index.ejs");
});

router.post("/login", obterLogin); // rota de envio dos dados para o backend

export default router;