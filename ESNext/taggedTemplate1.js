// tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra String'
}
const aluno = 'Gui'
const estado = 'Bem'
console.log(tag `${aluno} está, ${estado}`)