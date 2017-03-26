const Ship = require("./ship.js");

class AlienShip extends Ship {
  constructor(nose, color) {
    this.color = color;
  }
}

module.exports = AlienShip;
