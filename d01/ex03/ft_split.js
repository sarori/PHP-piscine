if (process.argv.length == 3) {
  console.log("Array");
  console.log("(");

  process.argv[2]
    .trim()
    .split(/\s+/)
    .sort()
    .forEach((value, idx) => {
      console.log(`\t[${idx}] => ${value}`);
    });
  console.log(")");
} else {
  process.exit(1);
}
