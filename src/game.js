const AlienShip = require("./alien_ship.js");
const PlayerShip = require("./player_ship.js");

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

    alienShipNoses1.forEach((nose) => {
      let ship = new AlienShip(nose, "white");
      this.aliens.push(ship);
    });

    alienShipNoses2.forEach((nose) => {
      let ship = new AlienShip(nose, "yellow");
      this.aliens.push(ship);
    });

    alienShipNoses3.forEach((nose) => {
      let ship = new AlienShip(nose, "green");
      this.aliens.push(ship);
    });

    alienShipNoses4.forEach((nose) => {
      let ship = new AlienShip(nose, "blue");
      this.aliens.push(ship);
    });

    alienShipNoses5.forEach((nose) => {
      let ship = new AlienShip(nose, "purple");
      this.aliens.push(ship);
    });
  }

  createPlayerShip() {
    if (this.lives > 0) {
      new PlayerShip([27, 13]);
    }
  }
}

modules.export = Game;
