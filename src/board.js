class Board {
  constructor(width = 27, height = 36) {
    this.width = width;
    this.height = height;
    this.renderGrid();
  }
}

modules.export = Board;
