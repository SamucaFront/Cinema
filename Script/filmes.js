document.getElementById("formFilme").addEventListener("submit", e => {
    e.preventDefault();

    const filme = {
        id: Date.now(),
        titulo: titulo.value,
        genero: genero.value,
        descricao: descricao.value,
        classificacao: classificacao.value,
        duracao: duracao.value,
        estreia: estreia.value
    };

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    alert("Filme salvo com sucesso!");
    e.target.reset();
});
