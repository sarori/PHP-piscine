module.exports = class UnholyFactory {
  constructor() {
    this.valid_fighter = ["Footsoldier", "Archer", "Assassin"];
  }

  absorb(fighter) {
    if (this.fighters && this.fighters[fighter.type]) {
      return console.log(
        `(Factory already absorbed a fighter of type ${fighter.type})`
      );
    }

    if (this.valid_fighter.includes(fighter.constructor.name)) {
      if (this.fighters === undefined) {
        this.fighters = {};
      }
      this.fighters[fighter.type] = fighter;
      console.log(`(Factory absorbed a fighter of type ${fighter.type})`);
    } else {
      console.log(`(Factory can't absorb this, it's not a fighter)`);
    }
  }

  fabricate(requestedFighter) {
    if (this.fighters[requestedFighter] !== undefined) {
      console.log(`(Factory fabricates a fighter of type ${requestedFighter})`);
      return this.fighters[requestedFighter];
    }
    console.log(
      `(Factory hasn't absorbed any fighter of type ${requestedFighter})`
    );
    return null;
  }
};
