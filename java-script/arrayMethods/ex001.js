const estudantes = [
    {
        nome: "Miguel Antônio",
        notas : [6.5, 5.5, 8.5]
    }, 
    {
        nome: "Ana Silva",
        notas : [6.5, 7.5, 9.5]
    }, 
    {
        nome: "Toninho Tornado",
        notas : [5.5, 3.5, 5.0]
    }, 
]

const CalcularSomaDeNotas = (estudante => {
    const soma = estudante.notas.reduce((total, nota)=> total + nota)
    return {nome: estudante.nome, verificacaoSomaNotas: soma >= 18}
})

const verificacaoSomaNotas = estudantes.map(CalcularSomaDeNotas)

console.log(verificacaoSomaNotas)


/*
const alunosAprovados = estudantes.filter(estudante => estudante.media >= 6)
const alunosReprovados = estudantes.filter(estudante => estudante.media < 6)

console.log(alunosReprovados);
*/