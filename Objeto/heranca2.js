//cadeia de prototipos (protype chain)
Object.prototype.attr0 = '0' //Evitar esse tipo de atribuição

const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax : 200,
  acelaramento(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  Status(){
    return `${this.velAtual}KM/h de ${this.velMax}KM/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 325
}

const volvo = {
  modelo: 'V40',
  Status(){
    return `${this.modelo}: ${super.Status()}`
  }
}

Object.setPrototypeOf(ferrari, carro) //mesma coisa com o __proto__
Object.setPrototypeOf(volvo, carro) //Ela é mais clean que o __proto__

console.log(ferrari)
console.log(volvo)

volvo.acelaramento(100)
console.log(volvo.Status())

ferrari.acelaramento(300)
console.log(ferrari.Status())


