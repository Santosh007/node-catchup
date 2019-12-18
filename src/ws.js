const WebSocket = require("ws");

var wsServ = function(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
      console.log("received: %s", message);
    });

    ws.send("something");
  });
};

module.exports = wsServ;
