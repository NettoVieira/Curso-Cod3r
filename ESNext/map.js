const tecnologias = new Map()
tecnologias.set('react', { famework: false })
tecnologias.set('angular', { famework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('react').famework)

const chavesVariadas = new Map([
  [function() { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) //retorna true ou false
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)