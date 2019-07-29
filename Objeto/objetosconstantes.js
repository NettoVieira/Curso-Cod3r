// pessoa -> 123 -> {...}
const pessoa = {nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'

const pessoaConstante = Object.freeze(nome = 'João')
console.log(pessoaConstante)
