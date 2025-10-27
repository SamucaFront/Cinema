document.getElementById("formSala").addEventListener("submit", e => {
    e.preventDefault();

    const sala = {
        id: Date.now(),
        nome: nome.value,
        capacidade: capacidade.value,
        tipo: tipo.value
    };

    let salas = JSON.parse(localStorage.getItem("salas")) || [];
    salas.push(sala);
    localStorage.setItem("salas", JSON.stringify(salas));

    alert("Sala salva com sucesso!");
    e.target.reset();
});
