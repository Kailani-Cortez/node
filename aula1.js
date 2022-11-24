var http = require('http');
http.createServer(function (resq, res){
    res.write("Brasil 4x2 \n");
    res.end("Bom dia!");
}).listen(3000);