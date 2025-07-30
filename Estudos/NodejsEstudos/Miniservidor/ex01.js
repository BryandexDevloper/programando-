// criando servidor HTTP

const http = require('http');

http.createServer((requisicao, resposta) => {
   resposta.writeHead(200, { 'Content-Type': 'text/plain' }); // status + cabeçalhos
   resposta.write(' Bryan \n '); // conteúdo da resposta
   resposta.end(); // finaliza a resposta
}).listen(3000);
