var express = require("express");
var path = require("path");
var http = require("http");
var wsserv = require("./ws");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const proxy = http
  .createServer(app)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
wsserv(proxy);
