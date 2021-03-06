const ShieldPart = require("./shield_part.js");

class Shield {
  constructor(boss) {
    this.boss = boss;
    this.parts = [];
    this.renderParts(this.boss);
  }

  renderParts(boss) {
    this.parts.push(new ShieldPart(boss[0], boss[1]));
    this.parts.push(new ShieldPart(boss[0] + 1, boss[1] - 1));
    this.parts.push(new ShieldPart(boss[0] + 1, boss[1]));
    this.parts.push(new ShieldPart(boss[0] + 1, boss[1] + 1));
    this.parts.push(new ShieldPart(boss[0] + 2, boss[1] - 1));
    this.parts.push(new ShieldPart(boss[0] + 2, boss[1] + 1));
  }
}

module.exports = Shield;
