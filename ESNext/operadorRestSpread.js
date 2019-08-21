//operador ... rest(juntar)/ spread(espalhar)
//usar rest com paramêtro de função

//usar spŕead com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)