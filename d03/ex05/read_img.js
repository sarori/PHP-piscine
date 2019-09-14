var express = require("express");
var url = require("url");
var path = require("path");
var fs = require("fs");

var app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.statusCode = 200;
  const filePath = path.join(__dirname, "../img/42.png");
  //   res.sendFile(path.join(__dirname, "../public", "img/42.png"));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.send("wrong file");
    } else {
      res.sendFile(filePath);
    }
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
