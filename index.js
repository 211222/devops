var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hola Danira champo'); //write a response to the client
  res.end(); //end the response
}).listen(3001); //the server object listens on port 4000