const Ship = require("./ship.js");
const Coord = require("./Coord.js");

class PlayerShip extends Ship {
  constructor(nose) {
    super(nose);
    this.initializeBody(this.nose);
  }

  initializeBody(nose) {
    this.body = [];

    this.body.push(new Coord(nose[0], nose[1]));
    this.body.push(new Coord(nose[0] + 1, nose[1]));
    this.body.push(new Coord(nose[0] + 1, nose[1] - 1));
    this.body.push(new Coord(nose[0] + 1, nose[1] + 1));
  }

  fireMissile() {
    return { loc: this.nose, origin: "human" };
  }
}

modules.export = PlayerShip;
