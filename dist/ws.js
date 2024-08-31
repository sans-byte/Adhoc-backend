"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating a ws server
// ws also use http under the hood the first request that goes out is an http request
// then it gets upgraded to ws on the server
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log(new Date() + "Request for" + req.url);
    res.end("Hi there");
});
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    ws.send("hello message from the server");
});
server.listen(8080, () => {
    console.log("connected to the server" + "  " + new Date());
});
