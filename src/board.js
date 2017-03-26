class Board {
  constructor(width = 27, height = 29) {
    this.width = width;
    this.height = height;
    this.aliens = [];
    this.player = new Player([27, 13]);
  }
}
