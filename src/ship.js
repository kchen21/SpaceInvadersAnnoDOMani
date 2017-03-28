const Coord = require("./coord.js");

class Ship {
  constructor(nose) {
    this.nose = nose;
    this.body = [];
  }

  move(direction) {
    this.body.forEach((part) => {
      part.shift(direction);
    });
  }
}

module.exports = Ship;
