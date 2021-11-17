
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MSbanag2021",
  database: "englishdictionary"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM englishdictionary.entries WHERE word = 'Apple'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
