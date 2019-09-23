const Lannister = require("./main");

module.exports = class Tyrion extends Lannister {
  constructor(props) {
    super(props);
    console.log("My name is Tyrion");
  }

  getSize() {
    return "Short";
  }
};
