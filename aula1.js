var http = require('http');
http.createServer(function (resq, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Brasil 2x0 \n");

    res.write(Date().substring(16,24)+'<br>');
    res.end("Bom dia!");
}).listen(3000);