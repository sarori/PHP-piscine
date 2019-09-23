module.exports = class House {
  introduce() {
    console.log(
      `House ${this.getHouseName()} of ${this.getHouseSeat()} : "${this.getHouseMotto()}"`
    );
  }
};
