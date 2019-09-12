var r1 = process.stdin;

process.stdout.write("Enter a number: ");
r1.on("data", function(line) {
  line = line.slice(0, line.length - 1);

  if (isNaN(line) == true || /\d+/.test(line) == false) {
    console.log(`'${line}' is not a number`);
  } else {
    if (line % 2 == 0) {
      console.log(`The number ${line} is even`);
    } else if (line % 2 == 1) {
      console.log(`The number ${line} is odd`);
    }
  }
  process.stdout.write("Enter a number: ");
});
