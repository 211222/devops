var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Terminado practica 1 y practica 2 y la 3 jeje'); 
  res.end(); 
}).listen(3000); 