

// Função para calcular custos e lucros
function calcular() {
    // Seleciona todas as linhas da tabela
    const linhas = document.querySelectorAll("tbody tr");

    linhas.forEach(linha => {
        // Captura os valores da linha
        const quantidade = parseFloat(linha.querySelector(".quantidade").innerText);
        const valorCompra = parseFloat(linha.querySelector(".valor_de_compra").innerText);
        const valorVenda = parseFloat(linha.querySelector(".valor_de_venda").innerText);
        const custo = linha.querySelector(".custo");
        const lucro = linha.querySelector(".lucro");

        // Calcula custo e lucro
        const totalCusto = quantidade * valorCompra;
        const totalLucro = (quantidade * valorVenda) - totalCusto;

        // Exibe os valores na tabela
        custo.innerText = `R$ ${totalCusto.toFixed(2)}`;
        lucro.innerText = `R$ ${totalLucro.toFixed(2)}`;
    });
}

// Chama a função automaticamente ao carregar a página
calcular();
