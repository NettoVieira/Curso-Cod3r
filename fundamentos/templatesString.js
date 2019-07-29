const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template =  `olá ${nome}!`

console.log(concatenacao, template)


/*templateString consegue deixar o codigo mais elegante do que utiliuzando o metedo de concatenção com 
o operador '+' que é a forma padrao. */
//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up  = texto => texto.toUpperCase() 
console.log(`Ei... ${up('cudado')}!`) //o template String nos permite chamar uma função.