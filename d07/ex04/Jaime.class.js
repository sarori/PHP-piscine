module.exports = class Jaime {
  sleepWith(person) {
    switch (person.constructor.name) {
      case "Tyrion":
        console.log("Not even if I'm drunk !");
        break;
      case "Sansa":
        console.log("Let's do this.");
        break;
      case "Cersei":
        console.log("With pleasure, but only in a tower in Winterfell, then.");
        break;
      default:
        console.log("Not even if I'm drunk !");
    }
  }
};
