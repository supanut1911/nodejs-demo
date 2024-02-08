const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/lists", (req, res) => {
  res.json([
    { id: 1, name: "macbook" },
    { id: 2, name: "iphone" },
    { id: 3, name: "airpod" },
  ]);
});

app.listen(4000, () => {
  console.log("app is running");
});
