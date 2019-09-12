if (process.argv.length > 2) {
  const arr = [];
  for (let i = 2; i < process.argv.length; i++)
    process.argv[i]
      .trim()
      .split(/\s+/g)
      .forEach(ele => {
        arr.push(ele);
      });
  arr.sort().forEach(ele => {
    console.log(ele);
  });
} else {
  process.exit(1);
}
