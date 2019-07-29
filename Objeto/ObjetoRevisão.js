const produto = new Object
produto.nome = 'Cadeira'
produto.preco = 220
produto['marca do produto'] = 'Generico'

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'raul',
    idade: 56,
    sexop: 'M',
    endereco:{
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'junior',
    idade: 19,
    sexo: 'F'
  }, {
    nome: 'ana',
    idade: 19,
    sexo: 'F'
  }],
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores)