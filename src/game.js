const Board = require("./board.js");
const AlienShip = require("./alien_ship.js");
const PlayerShip = require("./player_ship.js");

class Game {
  constructor(lives = 3) {
    this.lives = lives;
    this.board = new Board();
    this.initializeAlienShips();
    this.resetPlayerShip();
  }

  initializeAlienShips() {
    const alienShipNoses1 = [[17,3], [17,7], [17,11], [17,15], [17,19], [17,23]];
    const alienShipNoses2 = [[14,2], [14,6], [14,10], [14,14], [14,18], [14,22]];
    const alienShipNoses3 = [[11,1], [11,5], [11,9], [11,13], [11,17], [11,21]];
    const alienShipNoses4 = [[8,2], [8,6], [8,10], [8,14], [8,18], [8,22]];
    const alienShipNoses5 = [[5,3], [5,7], [5,11], [5,15], [5,19], [5,23]];

    this.resetAlienShips(alienShipNoses1, alienShipNoses2, alienShipNoses3, alienShipNoses4, alienShipNoses5);
  }

  resetAlienShips(alienShipNoses1, alienShipNoses2, alienShipNoses3, alienShipNoses4, alienShipNoses5) {
    this.aliensShips = [];

    alienShipNoses1.forEach((nose) => {
      let ship = new AlienShip(nose, "white");
      this.alienShips.push(ship);
    });

    alienShipNoses2.forEach((nose) => {
      let ship = new AlienShip(nose, "yellow");
      this.alienShips.push(ship);
    });

    alienShipNoses3.forEach((nose) => {
      let ship = new AlienShip(nose, "green");
      this.alienShips.push(ship);
    });

    alienShipNoses4.forEach((nose) => {
      let ship = new AlienShip(nose, "blue");
      this.alienShips.push(ship);
    });

    alienShipNoses5.forEach((nose) => {
      let ship = new AlienShip(nose, "purple");
      this.alienShips.push(ship);
    });
  }

  resetPlayerShip() {
    if (this.lives > 0) {
      this.playerShip = new PlayerShip([33,13]);
    }
  }
}

modules.export = Game;
