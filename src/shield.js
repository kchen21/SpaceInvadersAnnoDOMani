const Coord = require("./coord.js");

class Shield {
  constructor(boss) {
    this.boss = boss;
    this.parts = [];
    this.renderParts(this.boss);
  }

  renderParts(boss) {
    this.parts.push(new Coord(boss[0], boss[1]));
    this.parts.push(new Coord(boss[0] + 1, boss[1] - 1));
    this.parts.push(new Coord(boss[0] + 2, boss[1] - 2));
    this.parts.push(new Coord(boss[0] + 1, boss[1] + 1));
    this.parts.push(new Coord(boss[0] + 2, boss[1] + 2));
  }
}

module.exports = Shield;
