"use strict";
// creating a ws server
// ws also use http under the hood the first request that goes out is an http request
// then it gets upgraded to ws on the server
// import { WebSocket, WebSocketServer } from "ws";
// import http from "http";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer((req, res) => {
//   console.log(new Date() + "Request for" + req.url);
//   res.end("Hi there");
// });
// const wss = new WebSocketServer({ server });
// let user = 0;
// wss.on("connection", function connection(ws) {
//   ws.on("error", console.error);
//   ws.on("message", function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
//   console.log(++user);
//   ws.send("hello message from the server");
// });
// const PORT = 8080;
// server.listen(PORT, () => {
//   console.log(
//     "connected to the server" + "  " + new Date() + "on port " + PORT
//   );
// });
// with express
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log("Listning on port " + PORT + "on " + new Date());
});
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on("connection", (ws) => {
    ws.send("Connected to the web socket");
});
