const form = document.getElementById("contatoForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/contato/salvarContato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataObject),
    });

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    console.log = "Ocorreu um erro. Tente novamente mais tarde.";
  }
});
