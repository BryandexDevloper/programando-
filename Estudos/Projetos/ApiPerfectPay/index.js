const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const figlet = require('figlet');
const cors = require('cors');
const cron = require('node-cron');

const servidor = express();
const PORT = process.env.PORT || 3000;
const PERFECTPAY_TOKEN = 'eb15cef59ebdf9bdc243881c23b56bf4';

// Array fixo de API Keys
let apiKeys = [
    // "yhlwo3eb4qkdv31bfzvha",
    // "relpt92nvqdu2qlq8nhb4",
    // "ozdb8x3l20lu8a4diq459",
    // "wbm7zsqd63p4islry4me38",
    // "nsldsjcyrkkmvnpjiszsj"
];

let vendaAprovada = false;
let dadosVenda = null;

servidor.use(bodyParser.json());
servidor.use(cors());

// Cron job: opcional, se quiser atualizar API Keys periodicamente
// cron.schedule('0 0 1 * *', () => {
//     console.log(chalk.blue('Cron job executado!'));
//     // você pode atualizar manualmente o array aqui, se quiser
// });

// Webhook PerfectPay

 function limpar(){
    setTimeout(()=>{
    vendaAprovada = false
    },10000)
 }  
servidor.post('/webhook/perfectpay', (req, res) => {
    const data = req.body;

    if (data.public_token !== PERFECTPAY_TOKEN) {
        vendaAprovada = true;
        limpar()
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

    if (!apiKeys.includes(apiKey)) {
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
