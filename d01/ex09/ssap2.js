if (process.argv.length > 2) {
  const arr = [];
  for (let i = 2; i < process.argv.length; i++)
    process.argv[i]
      .trim()
      .split(/\s+/g)
      .forEach(ele => {
        arr.push(ele);
      });
  arr
    .sort((a, b) => {
      let idx = 0;
      // skip same character
      while (a[idx] && b[idx] && a[idx] === b[idx]) idx++;

      // regex pattern for char / num
      const c_re = /([a-zA-Z])/;
      const d_re = /([0-9])/;

      // comparing point
      const ca = a[idx];
      const cb = b[idx];

      if (c_re.test(ca) && !c_re.test(cb)) {
        return -1;
      } else if (!c_re.test(ca) && c_re.test(cb)) {
        return 1;
      } else if (d_re.test(ca) && !d_re.test(cb)) {
        return -1;
      } else if (!d_re.test(ca) && d_re.test(cb)) {
        return 1;
      } else if (a.toLowerCase()[idx] >= b.toLowerCase()[idx]) {
        return 1;
      } else {
        return -1;
      }
    })
    .forEach(ele => {
      console.log(ele);
    });
} else {
  process.exit(1);
}
