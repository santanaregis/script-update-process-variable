// const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Script para atualizar variáveis de um processo!');
});
app.get('/update', function (req, res) {
    const updateProcess = require('./updateProcess');
    let proc = updateProcess.updateMotivoContato();
    res.send('Realizou update!');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



//
// const server = http.createServer((req, res) => {
//
//     console.log("oi");
//     const updateProcess = require('./updateProcess');
//     let proc = updateProcess.buscaInstancias();
//     updateProcess.updateMotivoContato(proc);
//
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//
//
//     res.end('Hello World\n');
//
// });


