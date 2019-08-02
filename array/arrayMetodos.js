const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! ou seja remove o ultimo elemtno do Array
console.log(pilotos)

pilotos.push('Verstappen') //push adiciona um valor na ultima posição do Array
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover de dentro do Array

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunspilotos1 = pilotos.splice(2) //no array a partir do indice passado
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)

//vim aqui pra teste
