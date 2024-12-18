const cadastrarForm = document.getElementById("cadastrarForm");

cadastrarForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(cadastrarForm);
  const cadastrarData = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastrarData),
    });

    const result = await response.json();

    if (response.status === 201) {
      // Sucesso no cadastro
      Swal.fire({
        title: "Sucesso!",
        text: "Usuário cadastrado com sucesso!",
        icon: "success",
        confirmButtonText: "OK",
      });
      window.location.href = "/login"; // Redirecionar para a página de login
    } else {
      // Erro ao cadastrar
      Swal.fire({
        title: "Erro!",
        text: result.error, // Exibe a mensagem de erro retornada do backend
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  } catch (err) {
    Swal.fire({
      title: "Erro!",
      text: `Erro: ${err.message}`,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});
