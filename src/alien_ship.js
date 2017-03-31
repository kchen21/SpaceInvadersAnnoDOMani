const Ship = require("./ship.js");
const Coord = require("./coord.js");

class AlienShip extends Ship {
  constructor(nose, color) {
    super(nose);
    this.color = color;
    this.direction = "right";
    this.shooting = false;
    this.renderBody(this.nose);
  }

  move(direction) {
    return super.move(direction);
  }

  renderBody(nose) {
    this.body.push(new Coord(nose[0], nose[1]));
    this.body.push(new Coord(nose[0] - 1, nose[1]));
    this.body.push(new Coord(nose[0] - 1, nose[1] - 1));
    this.body.push(new Coord(nose[0] - 1, nose[1] + 1));
  }

  fireMissile() {
    return { loc: this.nose, origin: "alien" };
  }

  isLive() {
    return this.color !== "black";
  }
}

module.exports = AlienShip;
