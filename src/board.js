class Board {
  constructor(width = 27, height = 30) {
    this.width = width;
    this.height = height;
    this.player = new Player([27, 13]);
    this.createAliens();
    this.renderGrid();
  }

  createAliens() {
    const alienShipNoses1 = [];
    const alienShipNoses2 = [];
    const alienShipNoses3 = [];
    const alienShipNoses4 = [];
    const alienShipNoses5 = [];

    this.aliens = [];
  }
}

modules.export = Board;
