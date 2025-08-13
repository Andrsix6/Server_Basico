// Servidor básico com Node.js

const http = require('http'); // (http) : Módulo nativo do Node;

const server = http.createServer((req, res) => { // "http.createServer" : cria o servidor que escuta uma requisição e responde com uma mensagem;
    res.end("Olá! Sou seu servidor");
});

server.listen(3000, () => { // "server.listen(3000)" : coloca o servidor pra executar na porta 3000.
    console.log('Servidor rodando em http://localhost:3000');
});
