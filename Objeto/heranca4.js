function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const ob1 = new MeuObjeto
const ob2 = new MeuObjeto

console.log(ob1.__proto__ === ob2.__proto__)
console.log(MeuObjeto.prototype === ob1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
  console.log(`bom dia! Meu nome é ${this.nome}`)
}

ob1.falar()

ob2.nome = 'Rafael'
ob2.falar()

const ob3 = {}
ob3.__proto__ = MeuObjeto.prototype
ob3.nome = 'ob3'
ob3.falar()

// resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
