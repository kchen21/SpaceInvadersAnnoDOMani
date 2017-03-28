const Coord = require("./coord.js");
const Missile = require("./missile.js");

class Board {
  constructor(width = 27, height = 36) {
    this.width = width;
    this.height = height;
    this.grid = [];
    this.renderGrid();
  }

  renderGrid() {
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(null);
      }
      this.grid.push(row);
    }
  }

  updateGrid(coord, val) {
    this.grid[coord.x][coord.y] = val;
  }
}

module.exports = Board;
