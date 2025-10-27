document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFilme");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const filme = {
      titulo: form.titulo.value,
      genero: form.genero.value,
      descricao: form.descricao.value,
      classificacao: form.classificacao.value,
      duracao: form.duracao.value,
      estreia: form.estreia.value,
    };

    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    alert("🎬 Filme cadastrado com sucesso!");
    form.reset();
  });
});
