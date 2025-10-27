document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formVenda");
  const selectSessao = document.getElementById("sessao");

  const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

  sessoes.forEach((s, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${s.filme} - ${s.sala} (${s.dataHora})`;
    selectSessao.appendChild(option);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ingresso = {
      sessaoIndex: form.sessao.value,
      nome: form.nome.value,
      cpf: form.cpf.value,
      assento: form.assento.value,
      pagamento: form.pagamento.value,
    };

    const ingressos = JSON.parse(localStorage.getItem("ingressos")) || [];
    ingressos.push(ingresso);
    localStorage.setItem("ingressos", JSON.stringify(ingressos));

    alert("🎟️ Ingresso vendido com sucesso!");
    form.reset();
  });
});
