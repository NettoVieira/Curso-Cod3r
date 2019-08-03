const alunos = [
  {nome: 'joao', nota: 7.3, bolsista: false},
  {nome: 'Maria', nota: 9.2, bolsista: true },
  {nome: 'Pedro', nota: 9.8, bolsista: false},
  {nome: 'Ana', nota: 8.7, bolsista: true}
]

//desafio 1: todos os alunos são bolsista?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//desafio 2 : algum aluno é bolsista?
const algumBosista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBosista))