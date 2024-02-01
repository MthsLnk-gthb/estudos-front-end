const formulario = document.getElementById("formulario")
const input = document.getElementById("input-numero")
const numeroExibido = document.getElementById("numero-exibido")

function somarParesMenores(numero){
    let soma = 0;

    for(let i = 0; i < numero; i += 2){
        soma += i;
    }
    return soma;
}



function exibirSoma(soma){
    numeroExibido.textContent = `A soma dos pares menores que ${input.value} é: ${soma}`
}

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    let numeroEscolhido = input.value;
    let resultadoSoma = somarParesMenores(numeroEscolhido)
    exibirSoma(resultadoSoma)
})