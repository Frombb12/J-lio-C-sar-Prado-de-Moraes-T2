import express from "express";
const router = express.Router();
import { obterLogin } from "../controllers/loginController.js";

// Renderiza a tela de login
router.get("/", (req, res) => {
  res.render("login.ejs", {
  });
});

router.get("/index", (req, res) => {
  res.render("index.ejs");
});

// Rota POST para validar o login
router.post("/login", obterLogin);

export default router;