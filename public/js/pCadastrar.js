const cadastrarForm = document.getElementById("cadastrarForm");

cadastrarForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(cadastrarForm);
  const cadastrarData = Object.fromEntries(formData.entries()); // recebe as informações inseridas no forms

  try {
    const response = await fetch("/cadastrar", { // converte para json
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastrarData), 
    });

    const result = await response.json();

    if (response.status === 201) {
      Swal.fire({ // exibição de sucesso do cadastro na tela
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
    Swal.fire({ //exibição do erro do cadastro na tela
      title: "Erro!",
      text: `Erro: ${err.message}`,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});
