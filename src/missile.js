const Coord = require("./Coord.js");

class Missile extends Coord {
  constructor(x, y, id) {
    super(x, y);
    this.directions = {
      "up": [-1, 0],
      "down": [1, 0],
      "right": [0, 1],
      "left": [0, -1]
    };
    this.id = id;
  }
}
