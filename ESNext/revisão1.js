//let e const
/**
 * O var contem apenas dois escopos o escopo de função e o escopo global.
 * 
 * O let tem o escopo de função e o escopo do bloco ou seja, a variavel só sera
 * acessada dentro do bloco que se encontra a variavel
 */

{
  var a = 2
  let b =3
  console.log(b)
}

console.log(a)


//Template String
const produto = 'ipad'
console.log(`${produto} é caro!`)

//destructuring
/**
 * Tirar de dentro de alguma estrutura algum valor de um oujeto ou de um 
 * array
 */
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const { idade, nome, peso } = {nome: 'Neto', idade: 9, peso: 50}
console.log(nome, idade, peso)
