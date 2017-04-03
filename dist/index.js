'use strict';

var _http = require('http');

(0, _http.createServer)(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('hello World :)');
}).listen(1337, '127.0.0.1');

console.log('Server running!! at http://177.0.0.1:1337/');