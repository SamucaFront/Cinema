document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSala");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const sala = {
      nome: form.nome.value,
      capacidade: form.capacidade.value,
      tipo: form.tipo.value,
    };

    const salas = JSON.parse(localStorage.getItem("salas")) || [];
    salas.push(sala);
    localStorage.setItem("salas", JSON.stringify(salas));

    alert("🏛️ Sala cadastrada com sucesso!");
    form.reset();
  });
});
