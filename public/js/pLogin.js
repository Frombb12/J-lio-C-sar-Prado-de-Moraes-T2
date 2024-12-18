const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  console.log("Formulário de login enviado")
  event.preventDefault();

  // Coleta os dados do formulário
  const formData = new FormData(loginForm);
  const loginData = Object.fromEntries(formData.entries());

  console.log("Dados enviados para o backend:", loginData);

  try {
    // Faz uma requisição POST ao backend
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log("Login bem-sucedido:", data);
      window.location.href = "/index"; // URL da rota para index.ejs
    } else {
      const error = await response.json();
      Swal.fire({
        title: "Erro!",
        text: `Falha no login: ${error.error}`,
        icon: "error",
        confirmButtonText: "Tentar novamente",
      });
    }
  } catch (err) {
    Swal.fire({
      title: "Erro!",
      text: `Erro ao conectar com o servidor: ${err.message}`,
      icon: "error",
      confirmButtonText: "OK",
    });
    console.error("Erro:", err);
  }
});