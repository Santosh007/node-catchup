var http = require("http");
var fs = require("fs");

//create a server object:
http
  .createServer(function(req, res) {
    fs.readFile("src/index.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    //res.write("Hello World!"); //write a response to the client
    //res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
