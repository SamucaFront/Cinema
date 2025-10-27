document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSessao");
  const selectFilme = document.getElementById("filme");
  const selectSala = document.getElementById("sala");


  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  const salas = JSON.parse(localStorage.getItem("salas")) || [];

  filmes.forEach(f => {
    const option = document.createElement("option");
    option.value = f.titulo;
    option.textContent = f.titulo;
    selectFilme.appendChild(option);
  });

  salas.forEach(s => {
    const option = document.createElement("option");
    option.value = s.nome;
    option.textContent = s.nome;
    selectSala.appendChild(option);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const sessao = {
      filme: form.filme.value,
      sala: form.sala.value,
      dataHora: form.dataHora.value,
      preco: form.preco.value,
      idioma: form.idioma.value,
      formato: form.formato.value,
    };

    const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    sessoes.push(sessao);
    localStorage.setItem("sessoes", JSON.stringify(sessoes));

    alert("🎞️ Sessão cadastrada com sucesso!");
    form.reset();
  });
});
