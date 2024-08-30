"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let requestsCount = 0;
//middleware for analytics
app.use(function requestCount(req, res, next) {
    requestsCount++;
    next();
});
app.get("/", (req, res) => {
    return res.json("Hello world");
});
app.get("/requestCount", (req, res) => {
    return res.json(requestsCount);
});
app.listen(3000, () => {
    console.log("Connected");
});
