const nums = [1, 2, 3, 4, 5]


// for com propósito
let resultado = nums.map(function(e) {
  return e * 2
})

console.log(resultado)

//o map não modifica o array original ele gera um array com o mesmo valor de
//elementos do array original

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)