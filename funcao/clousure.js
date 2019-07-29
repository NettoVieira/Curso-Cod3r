//closure é o escopo criado quando uma função é cria
//esse escopo permite a função acessar e manupular variaveis externas á função

// contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())