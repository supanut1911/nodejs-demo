const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const lists = [
  { id: 1, name: "macbook" },
  { id: 2, name: "iphone" },
  { id: 3, name: "airpod" },
];

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/lists", (req, res) => {
  res.json(lists);
});

app.post("/lists", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  console.log(lists.length);
  const latestId = lists.length + 1;
  lists.push({ id: latestId, name });
  res.json("add list success");
});

app.listen(4000, () => {
  console.log("app is running");
});
