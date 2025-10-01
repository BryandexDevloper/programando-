const chalk = require('chalk');
const figlet = require('figlet');

// cria o desenho
const desenho = figlet.textSync('BRYANDEX DEVELOPER API REST', {

    font: 'Small',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});

// forma correta de usar chalk v5 no CommonJS
const mensagem = chalk.default.green(desenho);

module.exports = mensagem;
