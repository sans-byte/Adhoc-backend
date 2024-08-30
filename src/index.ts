import express from "express";
const app = express();

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
