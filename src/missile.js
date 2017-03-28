const Coord = require("./coord.js");

class Missile extends Coord {
  constructor(x, y, id, origin) {
    super();
    this.x = x;
    this.y = y;
    this.id = id;
    this.origin = origin;
    this.directions = {
      "up": [-1, 0],
      "down": [1, 0],
      "right": [0, 1],
      "left": [0, -1]
    };
  }
}
