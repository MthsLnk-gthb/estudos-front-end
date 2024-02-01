//const arr = [2, 6, 8, 4, 23, 12]
//const sorted = arr.sort((a, b) => a - b);
//console.log(sorted)


const names = [
  "Marcos",
  "André",
  "Luciano",
  "Paula",
  "Ana",
  "Vanessa",
  "Rodrigo",
];
//const sortedNames = names.sort((name1, name2) => name1.localeCompare(name2))
const sortedNames = names
  .slice()
  .sort((name1, name2) => (name1 > name2 ? 1 : -1));
//console.log(sortedNames);


const assinantes = [
  { nome: "Angelo", tempoAssinatura: 25},
  { nome: "Marcos", tempoAssinatura: 15},
  { nome: "Lara", tempoAssinatura: 6},
  { nome: "Rafaely", tempoAssinatura: 9}
];

const sortTempoAssinatura = assinantes.slice().sort((a, b) => b.tempoAssinatura - a.tempoAssinatura);
console.log(sortTempoAssinatura);
