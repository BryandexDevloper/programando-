const express = require("express");
const cors = require("cors");
const { title } = require("process");
const comentarios = require("./filtros");
const validator = require("validator");
const Chalk = require('chalk');
const figlet = require('figlet')
const { default: chalk } = require("chalk");
const porta =  process.env.PORT || 3000
const bodyParser = require('body-parser');


const servidor = express();
servidor.use(express.json());
servidor.use(cors());



servidor.use(bodyParser.json())
const PERFECTPAY_TOKEN = 'eb15cef59ebdf9bdc243881c23b56bf4'
                          
servidor.get("/comentarios", (req, res) => {
  const { produto, empresa } = req.query;
  console.log(req.query);

 
  const produto_limpo = validator.escape(produto);
  const empresa_limpo = validator.escape(empresa);



  if (!empresa_limpo) {
    return res
      .status(400)
      .json({
        menssagem:
          "Para usar a api voce deve descrever o nome da empresa ou loja ",
      });
  }

  if(!produto_limpo){
    return res.status(400).json({menssagem:'Para usar essa api voce deve colocar algum produto na url por ex: carro,celular,domestico etc...'})
  }

  return res
    .status(200)
    .json({
      comentarios: comentarios({
        empresa: empresa_limpo,
        produto: produto_limpo,
      }),
    });
});

let vendaAprovada = false;
let dadosVenda = null;

servidor.post('/webhook/perfectpay', (req, res) => {
    const data = req.body;

    if (data.public_token !== PERFECTPAY_TOKEN) {
        return res.status(403).send('Token inválido');
    }

    if (data.sale_status_enum === 2) { // aprovado
        vendaAprovada = true;
        dadosVenda = data; // guarda tudo que veio
        console.log('Venda aprovada:', data.customer.email, data.code);
    }

    res.status(200).send('OK');
});


servidor.get('/status-venda', (req, res) => {
  console.log('acessou')
    res.json({ aprovada: vendaAprovada, dados: dadosVenda });
});





let desenho = figlet.textSync(
  "BRYANDEX DEVLOPER API  DE COMENTARIOS ", {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })



servidor.listen(porta, () => {
  console.log(`${Chalk.green.bold(desenho)}`);
  console.log(`Rodando na porta:  ${porta}`)
});
