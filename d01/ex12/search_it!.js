let dict = {};

if (process.argv.length > 3) {
  const key = process.argv[2];
  for (let i = 3; i < process.argv.length; i++) {
    const [key, value] = process.argv[i].trim().split(/:/g); //[key, value]
    dict[key] = value;
  }
  if (dict[key]) console.log(dict[key]);
}
