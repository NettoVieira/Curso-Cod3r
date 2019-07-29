//funcao sem retorno
function ImprimirSoma(a, b){
    console.log(a + b)
}

ImprimirSoma(2, 3)

//funcao com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2))