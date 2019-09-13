const fs = require("fs");

if (process.argv.length !== 3) {
  return;
}

fs.readFile(process.argv[2], "utf-8", (err, data) => {
  if (err) {
    return console.log("INVALID FILE");
  }

  data.match(/title=".+"/g).forEach(ele => {
    let result;
    const title = ele
      .match(/title=".+"/g)[0]
      .split(`"`)[1]
      .split(`"`)[0]
      .toUpperCase();
    result = ele.replace(/title=".+"/g, `title="${title}"`);
    data = data.replace(ele, result);
  });

  const anchors = data.match(/<a.*>.*</g).concat(data.match(/<a.*>.*</gs));
  anchors.forEach(line => {
    line.match(/>[^><]+</g).forEach(ele => {
      const origin = ele.split(">")[1].split("<")[0];
      const changed = ele.replace(origin, origin.toUpperCase());
      data = data.replace(ele, changed);
    });
  });

  console.log(data);
});
