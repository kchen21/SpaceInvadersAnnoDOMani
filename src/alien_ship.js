const Ship = require("./ship.js");
const Coord = require("./Coord.js");

class AlienShip extends Ship {
  constructor(nose, color) {
    super(nose);
    this.color = color;
    this.initializeBody(this.nose);
  }

  initializeBody(nose) {
    this.body = [];

    this.body.push(new Coord(nose[0], nose[1]));
    this.body.push(new Coord(nose[0] - 1, nose[1]));
    this.body.push(new Coord(nose[0] - 1, nose[1] - 1));
    this.body.push(new Coord(nose[0] - 1, nose[1] + 1));
  }

  fireMissile() {
    return { loc: this.nose, origin: "alien" };
  }
}

module.exports = AlienShip;
