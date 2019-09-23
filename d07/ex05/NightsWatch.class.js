const IFighter = require("./IFighter.class");

module.exports = class NightsWatch extends IFighter {
  constructor(props) {
    super(props);
  }

  recruit(person) {
    if (typeof person.fight == "function") {
      if (this.arr === undefined) {
        this.arr = [];
      }
      this.arr.push(person);
    }
  }

  fight() {
    this.arr.forEach(ele => {
      ele.fight();
    });
  }
};
