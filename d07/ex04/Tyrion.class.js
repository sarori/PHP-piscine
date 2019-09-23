module.exports = class Tyrion {
  sleepWith(person) {
    switch (person.constructor.name) {
      case "Jaime":
        console.log("Not even if I'm drunk !");
        break;
      case "Sansa":
        console.log("Let's do this.");
        break;
      case "Cersei":
        console.log("Not even if I'm drunk !");
        break;
      default:
        console.log("Not even if I'm drunk !");
    }
  }
};
