class Coord {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.directions = {
      "up": [-1, 0],
      "down": [1, 0],
      "right": [0, 1],
      "left": [0, -1]
    };
  }

  shift(direction) {
    const deltas = this.directions(direction);
    this.x += deltas[0];
    this.y += deltas[1];
  }

  isEqual(coord2) {
    return (this.x === coord2.x && this.y === coord2.y);
  }

  includedIn(arr) {
    return arr.some(this.isEqual.bind(this));
  }
}

module.exports = Coord;
