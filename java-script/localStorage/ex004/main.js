const formularioCadastro = document.getElementById("formulario");
const inputNome = document.getElementById("input-nome");
const inputTelefone = document.getElementById("input-telefone");
const inputIdade = document.getElementById("input-idade");
const boxDeRenderizacao = document.getElementById("lista-de-pessoas");

const guardarDados = () => {
  let nomePessoa = inputNome.value;
  let telefonePessoa = inputTelefone.value;
  let idadePessoa = inputIdade.value;
  let listaDeConvidados = [];

  if (localStorage.getItem("listaDeConvidados")) {
    listaDeConvidados = JSON.parse(localStorage.getItem("listaDeConvidados"));
  }

  listaDeConvidados.push({ nomePessoa, telefonePessoa, idadePessoa });

  localStorage.setItem("listaDeConvidados", JSON.stringify(listaDeConvidados));

  inputNome.value = "";
  inputTelefone.value = "";
  inputIdade.value = "";

  renderizarConvidados(listaDeConvidados);
};

let textoDeDados = document.createElement("div");
let botaoDeletarTudo = document.createElement("button");

const renderizarConvidados = (convidados) => {
  boxDeRenderizacao.innerHTML = "";

  convidados.forEach((convidado, index) => {
    let dadosDoConvidado = document.createElement("div");
    dadosDoConvidado.textContent =
     `
     Nome: ${convidado.nomePessoa},
     Telefone: ${convidado.telefonePessoa}, 
     Idade: ${convidado.idadePessoa}
     `;

    let botaoDeletarConvidado = document.createElement("button");
    botaoDeletarConvidado.textContent = "Remover";

    botaoDeletarConvidado.addEventListener("click", (e) => {
      e.preventDefault();
      convidados.splice(index, 1);
      localStorage.setItem("listaDeConvidados", JSON.stringify(convidados));
      renderizarConvidados(convidados);
    });

    dadosDoConvidado.appendChild(botaoDeletarConvidado);
    boxDeRenderizacao.appendChild(dadosDoConvidado);
  });

  if (convidados.length >= 2) {
    botaoDeletarTudo.textContent = "Remover Tudo";
    botaoDeletarTudo.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("listaDeConvidados");
      renderizarConvidados([]);
    });
    boxDeRenderizacao.appendChild(botaoDeletarTudo);
  }
};


formularioCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  guardarDados();
});

if (localStorage.getItem("listaDeConvidados")) {
  const listaDeConvidados = JSON.parse(
    localStorage.getItem("listaDeConvidados")
  );
  renderizarConvidados(listaDeConvidados);
}
