var http = require('http');
var diasm = require('./biblioteca');

http.createServer(function (resq, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Brasil 4x1 Suiça \n");
    res.write('<p style=color:red;>'+Date().substring(16,24)+'<br>');
    res.write(diasm.diaDaSemana()+'</p><br>')
    res.end("Bom dia!");
}).listen(3000);