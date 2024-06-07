var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Practica lista'); 
  res.end(); 
}).listen(3000); 