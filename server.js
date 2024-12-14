const express = require("express");
const bodyParser = require("body-parser"); 
const app = express();

	app.set("view engine", "ejs");

	app.use(express.static('public'));

	app.use(express.urlencoded({ extended: true }));
	app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
	app.use("/js", express.static("./node_modules/bootstrap/dist/js"));

	app.use(bodyParser.urlencoded({ extended: true })); 
	app.use(bodyParser.json());

	const homeRoutes = require("./routes/home");
	const contatoRoutes = require("./routes/contato");
	const loginRoutes = require("./routes/login");
	const produtosRoutes = require ("./routes/produtos");

	app.use("/", homeRoutes);
	app.use("/contato", contatoRoutes);
	app.use("/login", loginRoutes);
	app.use("/produtos", produtosRoutes);

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
});
