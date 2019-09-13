const mlist = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

var spawn = require("child_process").spawn;
var ls = spawn("w", ["-h"]);
ls.stdout.on("data", function(data) {
  const res = data.toString();
  res.split("\n").forEach(line => {
    if (line) {
      const arr = line.split(/\s+/g);
      if (arr[1].length != 7) {
        arr[1] = `tty${arr[1]}`;
      }
      let d = new Date();
      let month = d.getMonth();
      let date = d.getDate();
      console.log(
        `${arr[0]}\t ${arr[1]}  ${mlist[month].slice(0, 3)} ${date} ${arr[3]}`
      );
    }
  });
});
