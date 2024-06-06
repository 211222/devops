var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Gracias a todos a los que colaboraron en especial a la Annel'); //write a response to the client
  res.end(); //end the response
}).listen(3001); //the server object listens on port 4000