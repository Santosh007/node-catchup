const WebSocket = require("ws");
//var url = require('url');

var wsServ = function(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", function connection(ws) {
    //let user = url.parse(ws.url, true).pathname.slice(1);

    ws.on("message", function incoming(message) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
      //console.log("received: %s", message);
    });

    ws.on("close", function closed(code, reason) {
      /*if(code === 1000) {
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(reason);
          }
        });
      }*/
      console.log("Closed with reason : %s", code);
    });
    //ws.send("something");
  });
};

module.exports = wsServ;
