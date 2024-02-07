const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(4000, () => {
  console.log("app is running");
});
