const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'

})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
//concatena todos os meus objetos passados no objeto de destino

const dest = {a: 1}
const a1 = {b: 2}
const a2 = {c: 3, a: 4}
const obj = Object.assign(dest, a1, a2)
console.log(obj)

const Neto = {
  idade: 21
}
// freeze não me deixa alterar o valor do objeto
Object.freeze(Neto)
Neto.idade = 23
console.log(Neto)

