function criarProduto(nome, preco) {
    return {
        prod_nome: nome,
        prod_preco: preco,
        desconto: 5
    }
}

console.log(criarProduto('chapa', 145))
console.log(criarProduto('Madeira', 145))