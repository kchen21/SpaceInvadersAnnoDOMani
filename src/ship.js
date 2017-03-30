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
    this.nose = [this.body[0].x, this.body[0].y];
  }
}

module.exports = Ship;
