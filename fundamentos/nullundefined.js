let valor //não atribuir valor
console.log(valor)
//console.log(valor2) nao atribui valor

valor = null //ausencia de valor
console.log(valor)

//quando você for passar uma variavel que não apontara para nenhum endcereço de mnemoria ou seja, não tenha valor
//usar o nulo

//console.log(valor.toString()) Erro!!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco) //converti para booleano
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)
