const formulario = document.getElementById("formulario")
const inputNome = document.getElementById("input-de-nome");
const inputEmail = document.getElementById("input-de-email");

formulario.addEventListener("submit", (e)=>{
  e.preventDefault()

  let nomeUsuario = inputNome.value;
  let emailUsuario = inputEmail.value;

  let usuarios = []

  if(localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
  }

  //usuarios.push({nomeusuario: nomeUsuario}) como é o mesmo valor pode ser escrito apenas uma vez
  usuarios.push({nomeUsuario, emailUsuario})

  localStorage.setItem("usuarios", JSON.stringify(usuarios))

  inputNome.value = ""
  inputEmail.value = ""

  renderizarUsuarios()

})

const renderizarUsuarios = ()=>{
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = ""

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || [])

  usuarios.forEach((usuario, index)=>{
    const divUsuario = document.createElement("div")

      const renderizacaoDeDados = document.createElement("h2");
      renderizacaoDeDados.textContent = `Nome: ${usuario.nomeUsuario}, email: ${usuario.emailUsuario}`;

      const botaoDeletar = document.createElement("button")
      botaoDeletar.textContent = "Remover"
      botaoDeletar.addEventListener("click", (e)=>{
        e.preventDefault()
        deletarUsuario(index)
      })

      divUsuario.appendChild(renderizacaoDeDados)
      divUsuario.appendChild(botaoDeletar)

      conteudo.appendChild(divUsuario)
  })
}

const deletarUsuario = (index)=>{
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || [])
  usuarios.splice(index, 1)
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
  renderizarUsuarios()
}