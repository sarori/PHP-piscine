module.exports = class Targaryen {
  resistsFire() {
    return false;
  }
  getBurned() {
    if (this.resistsFire()) return "emerges naked but unharmed";
    else return "burns alive";
  }
};
