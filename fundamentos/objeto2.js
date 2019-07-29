//sempre que vocês estancia uma função você tem um objeto
//so se pode se obter um objeto a partir de uma função
//menos com o objeto literal

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto)