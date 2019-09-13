if (process.argv.length > 2) {
  const arr = [];
  process.argv[2]
    .trim()
    .split(/\s+/g)
    .forEach(element => {
      arr.push(element);
    });
  console.log(arr.join(" "));
} else {
  process.exit(1);
}
