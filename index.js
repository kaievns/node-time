var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ok: true});
});

app.listen(1234, () => {
  console.log("Hit me!");
});
