class Board {
  constructor(width = 27, height = 30) {
    this.width = width;
    this.height = height;
    this.renderGrid();
  }
}

modules.export = Board;
