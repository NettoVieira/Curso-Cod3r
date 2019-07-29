//Variavel é acessivel independente do escopo
{{{{{var sera = 'Sera???'}}}}}

console.log(sera)
//Menos quando a variavel não está declarada dento de uma funcao
function teste(){
    var local = 123
}

teste()
console.log(local)
