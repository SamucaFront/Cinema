window.addEventListener("DOMContentLoaded", () => {
    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    const salas = JSON.parse(localStorage.getItem("salas")) || [];

    const selectFilme = document.getElementById("filme");
    const selectSala = document.getElementById("sala");

    // Limpa selects antes de preencher
    selectFilme.innerHTML = "";
    selectSala.innerHTML = "";

    // Se não houver filmes/salas, mostra alerta
    if (filmes.length === 0) {
        alert("Nenhum filme cadastrado! Cadastre um filme primeiro.");
        selectFilme.innerHTML = `<option disabled selected>Nenhum filme disponível</option>`;
    } else {
        filmes.forEach(f => {
            const option = document.createElement("option");
            option.value = f.id;
            option.textContent = f.titulo;
            selectFilme.appendChild(option);
        });
    }

    if (salas.length === 0) {
        alert("Nenhuma sala cadastrada! Cadastre uma sala primeiro.");
        selectSala.innerHTML = `<option disabled selected>Nenhuma sala disponível</option>`;
    } else {
        salas.forEach(s => {
            const option = document.createElement("option");
            option.value = s.id;
            option.textContent = s.nome;
            selectSala.appendChild(option);
        });
    }

    // Salvar sessão
    document.getElementById("formSessao").addEventListener("submit", e => {
        e.preventDefault();

        // Pega valores do formulário
        const sessao = {
            id: Date.now(),
            filmeId: selectFilme.value,
            salaId: selectSala.value,
            dataHora: document.getElementById("dataHora").value,
            preco: parseFloat(document.getElementById("preco").value),
            idioma: document.getElementById("idioma").value,
            formato: document.getElementById("formato").value
        };

        // Salva no localStorage
        const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
        sessoes.push(sessao);
        localStorage.setItem("sessoes", JSON.stringify(sessoes));

        alert("Sessão salva com sucesso!");
        e.target.reset();
    });
});
