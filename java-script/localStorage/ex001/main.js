const inputDoNome = document.getElementById("input-de-nome");
const botaoSalvar = document.getElementById("btn-salvar-nome");
const botaoExcluir = document.getElementById("btn-excluir-nome");
const sectionRender = document.getElementById("section-renderizacao");

const salvarNome = () => {
  const nomeUsuario = inputDoNome.value;
  localStorage.setItem("nomeUsuario", nomeUsuario);

  renderizarNome(nomeUsuario);
};

const consultarNome = () => {
  const nomeArmazenado = localStorage.getItem("nomeUsuario");
  if (nomeArmazenado) {
    renderizarNome(nomeArmazenado);
  } else {
    alert("Nenhum nome encontrado!");
  }
};

const excluirNome = () => {
  localStorage.removeItem("nomeUsuario");
  sectionRender.innerHTML = "";
};

const renderizarNome = (nome) => {
  sectionRender.innerHTML = "";

  const nomeRenderizado = document.createElement("h2");
  nomeRenderizado.textContent = nome;

  sectionRender.appendChild(nomeRenderizado);
};

botaoSalvar.addEventListener("click", (e) => {
  e.preventDefault();
  salvarNome();
  inputDoNome.value = "";
});


botaoExcluir.addEventListener("click", (e) => {
  e.preventDefault();
  excluirNome();
});

consultarNome()
