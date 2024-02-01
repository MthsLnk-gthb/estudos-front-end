const formularioCadastro = document.getElementById("formulario");
const inputNome = document.getElementById("input-de-nome");
const inputEmail = document.getElementById("input-de-email");
const botaoCadastro = document.getElementById("botao-cadastro");
const blocoDados = document.getElementById("box-dados");

const cadastrarUsuario = () => {
  let nomeUsuario = inputNome.value;
  let emailUsuario = inputEmail.value;
  let usuariosCadastrados = [];

  if (localStorage.getItem("usuariosCadastrados")) {
    usuariosCadastrados = JSON.parse(
      localStorage.getItem("usuariosCadastrados")
    );
  }

  usuariosCadastrados.push({ nomeUsuario, emailUsuario });

  localStorage.setItem(
    "usuariosCadastrados",
    JSON.stringify(usuariosCadastrados)
  );

  inputNome.value = "";
  inputEmail.value = "";

  renderizarDadosUsuarios(usuariosCadastrados);
};

const renderizarDadosUsuarios = (usuarios) => {
  let botaoDeletarTudo = document.createElement("button");
  botaoDeletarTudo.textContent = "Apagar Tudo";

  botaoDeletarTudo.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("usuariosCadastrados");
    blocoDados.removeChild(textoDados);
    blocoDados.removeChild(botaoDeletarTudo);
  });

  let textoDados = document.createElement("section");

  usuarios.forEach((usuario, index) => {
    let dadosDoUsuario = document.createElement("div");
    dadosDoUsuario.textContent = `Nome: ${usuario.nomeUsuario}, email: ${usuario.emailUsuario}`;

    let botaoDeletarUsuario = document.createElement("button");
    botaoDeletarUsuario.textContent = "Apagar Usuário";

    botaoDeletarUsuario.addEventListener("click", (e) => {
      e.preventDefault();
      usuarios.splice(index, 1);
      localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

      renderizarDadosUsuarios(usuarios);
    });

    dadosDoUsuario.appendChild(botaoDeletarUsuario);
    textoDados.appendChild(dadosDoUsuario);
  });

  blocoDados.innerHTML = "";
  blocoDados.appendChild(textoDados);

  usuarios.length >= 2 ?   blocoDados.appendChild(botaoDeletarTudo) : ""

};

formularioCadastro.addEventListener("submit", (e) => {
  e.preventDefault();
  cadastrarUsuario();
});


document.addEventListener("DOMContentLoaded", () => {
  const usuariosCadastrados = JSON.parse(
    localStorage.getItem("usuariosCadastrados") || "[]"
  );
  renderizarDadosUsuarios(usuariosCadastrados);
});
