var serv = function(socket) {
  // Add a connect listener
  socket.on("connection", function(client) {
    // Success!  Now listen to messages to be received
    client.on("message", function(event) {
      console.log("Received message from client!!", event);
    });
    client.on("disconnect", function() {
      console.log("Server has disconnected");
    });
  });
};

module.exports = serv;
