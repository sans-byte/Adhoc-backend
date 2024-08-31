// creating a ws server
// ws also use http under the hood the first request that goes out is an http request
// then it gets upgraded to ws on the server
import { WebSocket, WebSocketServer } from "ws";
import http from "http";

const server = http.createServer((req, res) => {
  console.log(new Date() + "Request for" + req.url);
  res.end("Hi there");
});

const wss = new WebSocketServer({ server });

let user = 0;
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);
  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
  console.log(++user);
  ws.send("hello message from the server");
});

server.listen(8080, () => {
  console.log("connected to the server" + "  " + new Date());
});
