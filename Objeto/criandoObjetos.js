//usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2677, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funçaõ factory

function CriarFuncionario(nome, SalarioBase, Faltas){
  return {
    nome,
    SalarioBase,
    Faltas,
    getSalario(){
      return (SalarioBase / 30) * (30 - Faltas)
    }
  }
}

const f1 = CriarFuncionario('Joao', 1000, 0)

const verificaSalario = function(){
  if(f1.Faltas == 0){
    return `Funcionario ${f1.nome} não teve faltas e seu salário é: ${f1.getSalario()}`
  } else {
    return `Funcionario ${f1.nome}, Recebeu ${f1.getSalario()} pois teve ${f1.Faltas} falta`
  }
}
console.log(verificaSalario())
//Object Create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
