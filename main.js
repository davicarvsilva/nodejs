const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text/html'});

	fs.appendFile('url.txt', req.url, function(err){
		if (err) throw err;
		console.log('Saved!');
	});

	res.end();
}).listen('8080');
