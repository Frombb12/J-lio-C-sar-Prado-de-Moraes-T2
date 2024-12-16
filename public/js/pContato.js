const form = document.getElementById("contatoForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());
  console.log(formDataObject);
  try {
    const response = await fetch("/contato/salvarContato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataObject),
    });
    
    if (response.status === 201) {
      const data = await response.json();
      Swal.fire({
        title: "Sucesso!",
        text: `Contato criado com sucesso: ${data.message}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      const error = await response.json();
      // Verificando se "details" é um array e tratando adequadamente
      const errorMessage = Array.isArray(error.details)
        ? error.details.join(", ")
        : error.details || "Erro desconhecido";

      Swal.fire({
        title: "Erro!",
        text: `Erro ao criar o contato: ${errorMessage}`,
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