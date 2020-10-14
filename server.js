var http = require('http');

function onRequest(req, res){
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write('hello http server!!');
    res.end();
}

var server = http.createServer(onRequest);
server.listen(8080);