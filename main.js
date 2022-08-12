var mysql = require('mysql');

var con = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "root",
  	database: "testes"
});

con.connect(function(err) {
  	if (err) throw err;
  	console.log("Connected!");
	var id = '1 OR 1=1';
	var sql = "SELECT * FROM customers WHERE id = " + id;
	con.query(sql, function (err, result, fields) {
	    if (err) throw err;
	    console.log(result);
	});
});
