// npm i needle cheerio request

if (process.argv.length < 2) return;

const fs = require("fs");
const needle = require("needle");
const cheerio = require("cheerio");
const request = require("request");

const dirName = process.argv[2].toString().split("//")[1];
const URL = `https://${dirName}`;

const download = (uri, filename, callback) => {
  request.head(uri, function(err, res, body) {
    request(uri)
      .pipe(fs.createWriteStream(filename))
      .on("close", callback);
  });
};

needle.get(URL, function(err, res) {
  if (err) {
    return console.log(err);
  }

  const source = cheerio.load(res.body);

  const images = source("html")
    .html()
    .match(/<img[^>]+src="([^">]+)"/g);

  if (images) {
    try {
      fs.mkdirSync(dirName);
    } catch (error) {}
    images.forEach(image => {
      let path = image.split("src=")[1].replace(/"/g, "");
      if (path.match(/https?:\/\//) == null) {
        if (path[0] != "/") {
          path = `/${path}`;
        }
        path = `${URL}${path}`;
      }

      const name = path
        .split(URL)[1]
        .slice(1)
        .replace(/\//g, "");

      download(path, `./${dirName}/${name}`, function() {
        return;
      });
    });
  }
});
