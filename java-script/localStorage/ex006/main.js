const inputNome = document.getElementById("input-nome")
const formulario = document.getElementById("formulario")

let arrayPessoas = []

const salvarNome = ()=>{
    let nomePessoa = inputNome.value
    arrayPessoas.push(nomePessoa)

    localStorage.setItem("arrayPessoas", arrayPessoas)
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    salvarNome()
})

