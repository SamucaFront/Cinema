document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaSessoes");
  const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

  if (sessoes.length === 0) {
    lista.innerHTML = "<p>Nenhuma sessão disponível.</p>";
    return;
  }

  sessoes.forEach((s, i) => {
    const div = document.createElement("div");
    div.classList.add("sessao-card");
    div.innerHTML = `
      <h3>${s.filme}</h3>
      <p><strong>Sala:</strong> ${s.sala}</p>
      <p><strong>Data e Hora:</strong> ${s.dataHora}</p>
      <p><strong>Preço:</strong> R$ ${s.preco}</p>
      <button onclick="comprar(${i})">Comprar Ingresso</button>
    `;
    lista.appendChild(div);
  });
});

function comprar(index) {
  localStorage.setItem("sessaoSelecionada", index);
  window.location.href = "venda-ingresso.html";
}
