import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + " Received request for " + request.url);
  response.end("hi there");
});

const wss = new WebSocketServer({ server });

let user = 0;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error); // check for err

  ws.on("message", function message(data, isBinary) {
    // if message recieved do next steps
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log("User connected", user++);
  ws.send("Hello! Message From Server!!"); // as soon as user connects
});

server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});
