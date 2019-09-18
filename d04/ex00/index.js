var express = require("express");
var cookies = require("cookies");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();
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
let sessions = {};

app.get("/", (req, res) => {
  if (req._parsedUrl.query && req.query) {
    const sessions = {};
    sessions[req.sessionID] = {};
    sessions[req.sessionID].login = req.query.login;
    sessions[req.sessionID].passwd = req.query.passwd;
    res.cookies.set("sapark session test", req.sessionID);
    res.write("Authrized");
  } else {
    const instruction = `<html>
				<body>
					<form >
						Username: <input type="text" name="login" />
						<br />
						Password: <input type="password" name="passwd" />
						<input type="submit" value="OK" />
					</form>
				</body>
			</html>`;
    res.write(instruction);
  }
  res.send();
});
app.listen(3000);
