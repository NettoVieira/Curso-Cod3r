const quaseArray = {
  0: 'Rafael',
  1: 'Ana',
  2: 'Bia'
}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { //Não faz sentido tentar simular um array a partir de objeto, é apenas um exemplo de como ter array a partir de um objeto
  value: function() { return Object.values(this) },
  enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

