if (process.argv.length === 3) {
  const dayweek = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche"
  ];
  const month = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];
  const arr = [];
  process.argv[2]
    .trim()
    .toLowerCase()
    .split(/\s+/g)
    .forEach(ele => {
      arr.push(ele);
    });
  if (dayweek.indexOf(arr[0]) < 0) return console.log("Wrong Format");
  if (
    arr[1].length > 2 ||
    parseInt(arr[1], 10) == 0 ||
    parseInt(arr[1], 10) > 31
  )
    return console.log("Wrong Format");
  if (month.indexOf(arr[2]) < 0) return console.log("Wrong Format");
  if (arr[3].length > 4 || parseInt(arr[3], 10) < 1970)
    return console.log("Wrong Format");
  if (
    /([0-2]{1}[0-3]{1}):([0-5]{1}[0-9]{1}):([0-5]{1}[0-9]{1})/.test(arr[4]) ==
    false
  )
    return console.log("Wrong Format");
  const [hour, min, sec] = arr[4].split(":");
  console.log(
    Date.UTC(
      parseInt(arr[3], 10),
      parseInt(month.indexOf(arr[2], 10) + 1),
      parseInt(arr[1], 10),
      parseInt(hour),
      parseInt(min),
      parseInt(sec)
    ) / 1000
  );
}
