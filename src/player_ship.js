const Ship = require("./ship.js");
const Coord = require("./coord.js");

class PlayerShip extends Ship {
  constructor(nose) {
    super(nose);
    this.renderBody(this.nose);
  }

  move(direction) {
    return super.move(direction);
  }

  renderBody(nose) {
    this.body.push(new Coord(nose[0], nose[1]));
    this.body.push(new Coord(nose[0] + 1, nose[1]));
    this.body.push(new Coord(nose[0] + 1, nose[1] - 1));
    this.body.push(new Coord(nose[0] + 1, nose[1] + 1));
  }

  fireMissile() {
    return { loc: this.nose, origin: "human" };
  }
}

module.exports = PlayerShip;
