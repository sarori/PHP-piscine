if (process.argv.length === 3) {
  const a = process.argv[2].replace(/\s+/g, "");

  if (/^[\d+\-*/%]+$/.test(a) === false) {
    return console.log("Syntax Error");
  }
  try {
    const b = eval(a);
    console.log(b);
  } catch (error) {
    return console.log("Syntax Error");
  }
} else {
  console.log("Incorrect Parameters");
}
