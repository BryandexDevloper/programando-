const express = require("express");
const cors = require("cors");
const { title } = require("process");
const comentarios = require("./filtros");
const validator = require("validator");
const Chalk = require('chalk');
const figlet = require('figlet')
const { default: chalk } = require("chalk");
const porta = process.env.PORT || 3000

const servidor = express();
servidor.use(express.json());
servidor.use(cors());


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


let desenho = figlet.textSync(
  "BRYANDEX DEVLOPER API  DE COMENTARIOS ", {
    font: "big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })



servidor.listen(porta, () => {
  console.log(`${chalk.green.bold(desenho)}`);
  console.log(`Rodando na porta:  ${porta}`)
});
