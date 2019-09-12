if (process.argv.length === 5) {
  const a = parseInt(process.argv[2].trim().split(/\s+/g));
  const b = parseInt(process.argv[4].trim().split(/\s+/g));
  const c = process.argv[3].trim().split(/\s+/g);
  if (c == "+") console.log(a + b);
  else if (c == "-") console.log(a - b);
  else if (c == "*") console.log(a * b);
  else if (c == "/") console.log(a / b);
  else if (c == "%") console.log(a % b);
}
