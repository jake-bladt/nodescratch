var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'context-type': 'text/plain' });
    res.end('=^..^=\n');
}).listen(8888, '127.0.0.1');

console.log('Server running on port 8888');
