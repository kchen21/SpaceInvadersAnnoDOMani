const AlienShip = require("./alien_ship.js");
const PlayerShip = require("./player_ship.js");

class Game {
  constructor(lives = 3) {
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

  createPlayerShip() {
    if (this.lives > 0) {
      return new PlayerShip([33, 13]);
    }
  }
}

modules.export = Game;
