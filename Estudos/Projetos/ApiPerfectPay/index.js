const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const figlet = require('figlet');
const cors = require('cors');
const cron = require('node-cron');

const servidor = express();
const PORT = process.env.PORT || 3000;
const PERFECTPAY_TOKEN = 'eb15cef59ebdf9bdc243881c23b56bf4';
const ARQUIVO_DADOS = path.join(__dirname, 'dados.json');

let vendaAprovada = false;
let dadosVenda = null;

servidor.use(bodyParser.json());
servidor.use(cors());

// Inicializa arquivo JSON se não existir
if (!fs.existsSync(ARQUIVO_DADOS)) {
    const inicial = {
        apiKeys: [],
        ultimaAtualizacao: new Date().toISOString()
    };
    fs.writeFileSync(ARQUIVO_DADOS, JSON.stringify(inicial, null, 2));
}

// Função para gerar 5 API Keys aleatórias
function gerarApiKeys() {
    return Array.from({ length: 5 }, () =>
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

// Atualiza API Keys
function atualizarApiKeys() {
    const dados = JSON.parse(fs.readFileSync(ARQUIVO_DADOS));
    dados.apiKeys = gerarApiKeys();
    dados.ultimaAtualizacao = new Date().toISOString();
    fs.writeFileSync(ARQUIVO_DADOS, JSON.stringify(dados, null, 2));
    console.log(chalk.green('API Keys atualizadas:', dados.apiKeys));
}

// Atualiza na inicialização
atualizarApiKeys();

// Cron job: atualiza todo dia 1º de cada mês à meia-noite
cron.schedule('0 0 1 * *', () => {
    atualizarApiKeys();
    console.log(chalk.blue('Cron job executado: API Keys atualizadas!'));
});

// Webhook PerfectPay
servidor.post('/webhook/perfectpay', (req, res) => {
    const data = req.body;

    if (data.public_token !== PERFECTPAY_TOKEN) {
        vendaAprovada = true;
        return res.status(200).send('Token inválido');
    }

    if (data.sale_status_enum === 2) { // aprovado
        vendaAprovada = true;
        dadosVenda = data;
        console.log(chalk.blue('Venda aprovada:', data.customer.email, data.code));
    }

    res.status(200).send('OK');
});

// Status da venda com validação de API Key
servidor.post('/status-venda', (req, res) => {
    const { apiKey } = req.body;
    const dados = JSON.parse(fs.readFileSync(ARQUIVO_DADOS));

    if (!dados.apiKeys.includes(apiKey)) {
        return res.status(403).send('API Key inválida');
    }

    // Mostra o bordão no console
    console.log(
        chalk.green(
            figlet.textSync('bryandexdeveloper', {
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    res.json({
        bordao: 'bryandexdeveloper',
        aprovada: vendaAprovada,
        dados: dadosVenda
    });
});

servidor.listen(PORT, () => {
    console.log(chalk.yellow(`Servidor rodando na porta ${PORT}`));
});
