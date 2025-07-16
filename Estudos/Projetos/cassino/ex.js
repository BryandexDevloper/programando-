const prompt = require('prompt-sync')();

let conbinacoes = [  //.🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

    [0, 0.1, 0.25, 0.5, 0.8, 1.2, 0.3, 2.0, 3.0, 0],
    [0.05, 0.2, 0.5, 0.1, 1.5, 0.35, 1.3, 2.5, 4.0, 0],
    [0, 0.01, 0.1, 0.9, 1.2, 0.4, 0.7, 0.8, 3.5, 5.0],
    [0.2, 0.95, 0.75, 0.1, 1.1, 0.3, 0.55, 1.7, 0.99, 4.5],
    [0.3, 0.1, 0.15, 1.4, 0.35, 0.5, 1.6, 0.8, 2.0, 10.0]
];


let conbinacoes_baixas = [ // conbinaçoes baixas para sabichoes
    [0, 0, 0, 0.1, 0.05, 0, 0.2, 0, 0.15, 0],
    [0, 0, 0.1, 0, 0.05, 0.2, 0, 0.1, 0.3, 0],
    [0, 0.01, 0, 0.05, 0.1, 0, 0.2, 0.15, 0.05, 0],
    [0, 0, 0.05, 0.1, 0.25, 0, 0.1, 0.05, 0.3, 0],
    [0, 0.01, 0, 0.05, 0.1, 0, 0.15, 0.2, 0.1, 1.0]
]


let caixa_da_casa = 50000000
let log_da_casa = []

let log_usuario = []

let valores_ganhos = [];
let continuar_jogando = "s";
let valor_deposito;
let valor_deposito_inicial;

let id = Math.floor(Math.random() * conbinacoes.length);
let id2 = Math.floor(Math.random() * conbinacoes_baixas.length);

while (continuar_jogando !== "n") {

    if (!valor_deposito) {
        valor_deposito = parseFloat(prompt("Digite o valor de depósito: "));
        valor_deposito_inicial = valor_deposito;

        while (valor_deposito < 1) {
            valor_deposito = parseFloat(prompt("Deposite para jogar. Valor mínimo é R$1,00: "));
            valor_deposito_inicial = valor_deposito;
        }

    } else {
        let quantidade_rodadas = parseInt(prompt("Digite o tanto de rodadas: "));
        let valor_aposta = parseFloat(prompt("Digite o valor da aposta: "));
        
        let total_aposta = quantidade_rodadas * valor_aposta;

        if (valor_deposito < total_aposta) {
            console.log("Saldo insuficiente. Deposite mais para continuar.");
            continue;
        }

        valor_deposito -= total_aposta;

        for (let i = 0; i < quantidade_rodadas; i++) {

            if(valor_aposta >= 100000){
            let conbinacao1 = Math.floor(Math.random() * conbinacoes_baixas[id2].length);
            let multiplicador = conbinacoes_baixas[id2][conbinacao1];
            let valor_ganho = valor_aposta * multiplicador;
            caixa_da_casa = caixa_da_casa - valor_ganho
            valores_ganhos.push(valor_ganho);

            console.log(`Rodada ${i + 1}`);
            console.log(`  Multiplicador: ${multiplicador}`);
            console.log(`  Valor ganho: R$${valor_ganho.toFixed(2)}\n`);
            console.log(`  Valor ganho: R$${caixa_da_casa.toFixed(2)}\n`);
            }else{
            let conbinacao1 = Math.floor(Math.random() * conbinacoes[id].length);
            let multiplicador = conbinacoes[id][conbinacao1];
            let valor_ganho = valor_aposta * multiplicador;
            caixa_da_casa = caixa_da_casa - valor_ganho
            valores_ganhos.push(valor_ganho);

            console.log(`Rodada ${i + 1}`);
            console.log(`  Multiplicador: ${multiplicador}`);
            console.log(`  Valor ganho: R$${valor_ganho.toFixed(2)}\n`);
            console.log(`  Valor ganho: R$${caixa_da_casa.toFixed(2)}\n`);
        }
            }
            
            

        let valor_total_ganho = valores_ganhos.reduce((soma, valor) => soma + valor, 0);

        console.log(`\nValores ganhos: ${valores_ganhos.map(v => v.toFixed(2)).join(", ")}`);
        console.log(`Valor total ganho: R$${valor_total_ganho.toFixed(2)}`);
        console.log(`Valor depositado inicialmente: R$${valor_deposito_inicial.toFixed(2)}`);
        console.log(`Valor restante da casa: R$${caixa_da_casa.toFixed(2)}\n`);

        continuar_jogando = prompt("Deseja continuar jogando? [s] / [n]: ");
    }
}


