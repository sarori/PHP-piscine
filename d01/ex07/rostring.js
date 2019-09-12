if (process.argv.length > 2) {
  const arr = [];
  process.argv[2]
    .trim()
    .split(/\s+/g)
    .forEach(ele => {
      arr.push(ele);
    });
  arr.push(arr.shift());
  console.log(arr.join(" "));
}
