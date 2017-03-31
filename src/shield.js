class Shield {
  constructor(boss) {
    this.boss = boss;
    this.parts = [];
    this.renderParts();
  }

  renderParts() {
    this.parts.push(new Coord(boss[0], boss[1]));
    this.parts.push(new Coord(boss[0] + 1, boss[1] - 1));
    this.parts.push(new Coord(boss[0] + 2, boss[1] - 2));
    this.parts.push(new Coord(boss[0] + 1, boss[1] + 1));
    this.parts.push(new Coord(boss[0] + 2, boss[1] + 2));
  }
}

module.exports = Shield;
