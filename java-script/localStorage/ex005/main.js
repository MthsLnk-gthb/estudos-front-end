const inputNome = document.getElementById("input-nome");
const inputEmail = document.getElementById("input-email");
const formulario = document.getElementById("formulario");

const botaoCadastro = document.getElementById("botao-cadastro");
const botaoApagarTudo = document.getElementById("apagar-tudo");

const listaRenderizacao = document.getElementById("lista-renderizada");

let arrayPessoas = [];

const cadastrarPessoa = () => {
  const nomePessoa = inputNome.value;
  const emailPessoa = inputEmail.value;
  const arrayRecuperado = localStorage.getItem("arrayPessoas");
  const novaPessoa = {
    nome: nomePessoa,
    email: emailPessoa,
  };

  if (arrayRecuperado) {
    arrayPessoas = JSON.parse(arrayRecuperado);
  }

  arrayPessoas.push(novaPessoa);
  localStorage.setItem("arrayPessoas", JSON.stringify(arrayPessoas));

  inputNome.value = "";
  inputEmail.value = "";

  renderizarLista();
};

const renderizarLista = () => {
  listaRenderizacao.innerHTML = "";
  arrayPessoas.forEach((pessoa, index) => {
    let dadosLista = document.createElement("li");
    let nomeRenderizado = document.createElement("h2");
    nomeRenderizado.textContent = pessoa.nome;

    let emailRenderizado = document.createElement("h3");
    emailRenderizado.textContent = pessoa.email;

    let botaoApagarPessoa = document.createElement("button");
    botaoApagarPessoa.textContent = "Remover";

    botaoApagarPessoa.addEventListener("click", (e) => {
      e.preventDefault();
      removerPessoa(index);
    });

    dadosLista.appendChild(nomeRenderizado);
    dadosLista.append(emailRenderizado);
    dadosLista.appendChild(botaoApagarPessoa);

    listaRenderizacao.appendChild(dadosLista);
  });
};

const removerPessoa = (index) => {
  arrayPessoas.splice(index, 1);
  localStorage.setItem("arrayPessoas", JSON.stringify(arrayPessoas));
  renderizarLista();
};

const apagarTudo = () => {
  listaRenderizacao.innerHTML = "";
  localStorage.clear();
  arrayPessoas = []
  renderizarLista()
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  cadastrarPessoa();
  renderizarLista();
});

botaoApagarTudo.addEventListener("click", (e) => {
  e.preventDefault();
  apagarTudo();
});
