var express = require("express");
var url = require("url");
var app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("<html><body>Hello</body></html>");
  res.end();
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
