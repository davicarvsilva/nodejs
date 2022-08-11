const http = require('http');
const dateModule = require('./date-module');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text/html'});
	res.write('Current date is: ' + dateModule.dateTime());
	res.end();
}).listen('8080');
