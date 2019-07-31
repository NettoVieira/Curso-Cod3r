Array.prototype.forEach2 = function(callback) {
  for(i = 0; i <= this.length; i++){
    callback(this[i], i, this)
  }
}

const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice){
  console.log(`${indice +1} ${nome}`)
})
