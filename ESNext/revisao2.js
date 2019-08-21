//arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow function (this)
const lexico1 = () => console.log(this === module.exports)

//parametro default
function log(texto = 'Node') {
  console.log(texto)
}

log()
log('sou mais forte')

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}

console.log(total(1, 2, 3, 4))