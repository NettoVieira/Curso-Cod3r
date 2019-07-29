let isAtivo = false;
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// para transformar qualquer valor em expressão booleana você pode utilizar a negação
isAtivo = 1
console.log(!isAtivo) 

console.log('os verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity)) 

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || 'epa'))
let nome = 'Lucas'

console.log(nome || 'Desconhecido')
