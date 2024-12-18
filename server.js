import bodyParser from "body-parser";
import express from "express";
import homeRoutes from "./routes/home.js";
import contatoRoutes from "./routes/contato.js";
import loginRoutes from "./routes/login.js";
import produtosRoutes from "./routes/produtos.js"; 
import sequelize from "./config/database.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use("/", homeRoutes);
app.use("/contato", contatoRoutes);
app.use("/login", loginRoutes);
app.use("/produtos", produtosRoutes);

app.use(loginRoutes)

const PORT = process.env.PORT || 4000;

const startServer = async () => {
	try {
	await sequelize.authenticate();
	console.log("Conexão com o banco de dados foi estabelecida com sucesso.");
	app.listen(PORT, () => {
		console.log(`Servidor rodando na porta ${PORT}`);
	});
	} catch (err) {
		console.error("Não foi possível conectar ao banco de dados:", err);
	}
};

startServer();
		
