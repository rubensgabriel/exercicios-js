function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 
    }
}

criarProduto('Notebook', 2199.49)
criarProduto('iPad', 1199.49)