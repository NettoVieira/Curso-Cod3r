//estrategia 1 para gerar valor padrão
function mostrarTexto() {
  x = ' teste'

  return x
}

function soma1(a, b, c) {
    a = a || mostrarTexto()
    b = b || mostrarTexto()
    c = c || mostrarTexto()

    return a + b + c 
}

console.log(soma1())



// //estrategia 2, 3, 4 para gerar valor padrão
// function soma2(a, b, c) {
//     a = a !== undefined ? a : 1
//     b = 1 in arguments ? b : 1
//     c = isNaN(c) ? 1 : c

//     return a + b + c
// }
 
// console.log(soma2(), soma2(3), soma2(1, 2, 3))

// // valor padrao do es2015
// function soma3 (a = 1, b = 1, c = 1) {
//     return a + b + c
// }

// console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))