var express = require("express");
var path = require("path");
var http = require("http");
const net = require("net");

const app = express();
const clients = [];

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.createServer(app).listen(8080);

//app.listen(8080);
/*
let client  = net.createConnection({port : 8080}, () => {
  console.log("Clinet joined!");

})
*/
