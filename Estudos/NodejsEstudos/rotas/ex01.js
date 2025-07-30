// rotas nodejs


const http = require('http');
const porta = 3000
const host = '127.0.0.1';

const servidor = http.createServer((resquisicao,resposta)=>{
            resposta.writeHead(200,{'Content-Type':'text/html'});
            if(resquisicao.url == '/'){
                resposta.write('<h1>Seja bem vindo</h1>');
            }else if(resquisicao.url == '/canal'){
                resposta.write('<h1>Bryan adrian</h1>')
            }if(resquisicao.url == '/curso'){
             resposta.write('<h1>Curso de node</h1>')   
            }

            resposta.end()
});

servidor.listen(porta,host,()=>{console.log('Servidor rodadndo')});