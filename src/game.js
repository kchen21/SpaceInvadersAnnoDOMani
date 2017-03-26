class Game {
  constructor(lives = 5) {
    this.lives = lives;
    this.initializeAlienShips();
    this.createPlayerShip();
  }

  initializeAlienShips() {
    const alienShipNoses1 = [];
    const alienShipNoses2 = [];
    const alienShipNoses3 = [];
    const alienShipNoses4 = [];
    const alienShipNoses5 = [];

    this.aliens = [];
  }

  createPlayerShip() {
    if (this.lives > 0) {
      new Player([27, 13]);
    }
  }
}

modules.export = Game;
