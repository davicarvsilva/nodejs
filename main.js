const http = require('http');
const fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req, res){
	if (req.url == '/fileupload') {
    		var form = new formidable.IncomingForm();
    		form.parse(req, function (err, fields, files) {
      			var oldpath = files.filetoupload.filepath;
      			var newpath = './' + files.filetoupload.originalFilename;
      			fs.rename(oldpath, newpath, function (err) {
        			if (err) throw err;
        			res.write('File uploaded and moved!');
        			res.end();
      			});
    		});
  	} else {
	fs.readFile('index.html', function(err, data){
			res.writeHead(200, {'Content-type':'text/html'});
			res.write(data);
			res.end();
		});
	}
}).listen('8080');
