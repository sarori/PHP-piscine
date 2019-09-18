var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var compression = require("compression");
var helmet = require("helmet");
app.use(helmet());
var session = require("express-session");
var FileStore = require("session-file-store")(session); //세션을 파일에 저장
// const fastcsv = require("fast-csv");
// const ws = fs.createWriteStream("out.csv");

const csvFilePath = "data/MOCK_DATA.csv";
let csvToJson = require("convert-csv-to-json");
// const csv = require("csvtojson");
// csv()
//   .fromFile(csvFilePath)
//   .then(jsonObj => {
//     console.log(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
//   });

// let csvToJson = require("convert-csv-to-json");
// const
let json = csvToJson.getJsonFromCsv(csvFilePath);
for (let i = 0; i < json.length; i++) {
  json[i].split(/:+/g).join(" ");
  console.log(i, json[i]);
}
console.log(json);
// split(/:+/g)console.log(json[i].split(/:+/g));
// console.log(JSON.stringify(json));

// Async / await usage
// const jsonArray = csv().fromFile(csvFilePath);

//

// let a = null;
// const res = csv()
//   .fromFile(csvFilePath)
//   .then(jsonObj => {
//     return jsonObj;
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
//   });
// console.log(res);
// Async / (await usage);
// const jsonArray = csv()
//   .fromFile(csvFilePath)
//   .then(data => {
//     return data;
//   });

// console.log("asdf", jsonArray);

// const q = [];
// fs.createReadStream("data/MOCK_DATA.csv")
//   .pipe(fastcsv.parse({ headers: true }))
//   .on("data", row => q.push(row));
// console.log(q);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(
  session({
    secret: "asadlfkj!@#!@#dfgasdg",
    resave: false,
    saveUninitialized: true,
    store: new FileStore("/sessions/users")
  })
);

app.get("*", function(request, response, next) {
  fs.readdir("./data", function(error, filelist) {
    request.list = filelist;
    next();
  });
});

var indexRouter = require("./routes/index");
var topicRouter = require("./routes/topic");
var authRouter = require("./routes/auth");

app.use("/", indexRouter);
app.use("/topic", topicRouter);
app.use("/auth", authRouter);

app.use(function(req, res, next) {
  res.status(404).send("Sorry cant find that!");
});
2;
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
