var express = require("express");
var cookies = require("cookies");
var session = require("express-session");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var crypto = require("crypto");
var app = express();

// function hash(req) {
//   var hash = crypto.createHash("whirlpool");
//   var data = hash.update(req.session[req.sessionID].passwd, "utf-8");
//   var hashpw = data.digest("hex");
//   console.log(hashpw);
//   return hashpw;
// }

function auth(req, res) {
  req.session[req.sessionID] = {};
  //   req.query.passwd = hash(req);
  var hash = crypto.createHash("whirlpool");
  var data = hash.update(req.query.passwd, "utf-8");
  req.query.passwd = data.digest("hex");
  console.log(req.query.passwd);
  if (req.query.login && req.query.passwd) {
    if (
      !req.session[req.sessionID].login &&
      !req.session[req.sessionID].passwd
    ) {
      req.session[req.sessionID].login = req.query.login;
      req.session[req.sessionID].passwd = req.query.passwd;
    } else {
      if (
        req.session[req.sessionID].login === req.query.login &&
        req.session[req.sessionID].passwd === req.query.passwd
      ) {
        res.write("HELLO", req.query.login);
        console.log("success");
      } else {
        res.write("ERROR\n");
      }
    }
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies.express());
app.use(
  session({
    secret: "sapark",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.get("/", (req, res) => {
  if (req._parsedUrl.query && req.query) {
    auth(req, res);
    console.log(req.session[req.sessionID].login);
    console.log(req.session[req.sessionID].passwd);
    // const req.session = {};
    // req.session[req.sessionID] = {};
    // req.session[req.sessionID].login = req.query.login;
    // console.log(req.query.login);
    // req.session[req.sessionID].passwd = req.query.passwd;
    // console.log(req.query.passwd);
    // res.cookies.set("sapark session test", req.sessionID);
    // res.write("Authrized");
  } else {
    res.write(fs.readFileSync(path.join(__dirname, "index.html")));
  }
  res.send();
});
app.listen(3000);
