const Ship = require("./ship.js");

class AlienShip extends Ship {
  constructor(nose, color) {
    this.color = color;
    this.initializeBody(nose);
  }

  createBody() {
    this.body = [];

    this.body.push(new Coor(nose[0], nose[1]));
    this.body.push(new Coor(nose[0] - 1, nose[1]));
    this.body.push(new Coor(nose[0] - 1, nose[1] - 1));
    this.body.push(new Coor(nose[0] - 1, nose[1]) + 1);
  }
}

module.exports = AlienShip;
