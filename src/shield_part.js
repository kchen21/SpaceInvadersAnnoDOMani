const Coord = require("./coord.js");

class ShieldPart extends Coord {
  constructor(x, y) {
    super(x, y);
    this.active = true;
  }
}

module.exports = ShieldPart;
