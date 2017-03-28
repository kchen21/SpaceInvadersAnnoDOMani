const Board = require("./board.js");
const AlienShip = require("./alien_ship.js");
const PlayerShip = require("./player_ship.js");
const Missile = require("./missile.js")

class Game {
  constructor(lives = 3) {
    this.lives = lives;
    this.board = new Board();
    this.aliensShips = [];
    this.playerShip = null;
    this.missileId = 0;
    this.missiles = {};
    this.renderAlienShips();
    this.resetPlayerShip();
    window.addEventListener("keydown", this.handleKeyEvent.bind(this));
  }

  handleKeyEvent(event) {
    event.preventDefault();
    switch(event.keyCode) {
      case 32:
        this.createMissile(this.playerShip.fireMissile());
        break;
      case 37:
        this.playerShip.move("left");
        break;
      case 39:
        this.playerShip.move("right");
        break;
    }
  }

  renderAlienShips() {
    const alienShipNoses1 = [[17,3], [17,7], [17,11], [17,15], [17,19], [17,23]];
    const alienShipNoses2 = [[14,2], [14,6], [14,10], [14,14], [14,18], [14,22]];
    const alienShipNoses3 = [[11,1], [11,5], [11,9], [11,13], [11,17], [11,21]];
    const alienShipNoses4 = [[8,2], [8,6], [8,10], [8,14], [8,18], [8,22]];
    const alienShipNoses5 = [[5,3], [5,7], [5,11], [5,15], [5,19], [5,23]];

    alienShipNoses1.forEach((nose) => {
      let ship = new AlienShip(nose, "white");
      ship.shooting = true;
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

  markAlienShipsOnBoard() {
    const game = this;

    this.alienShips.forEach((ship) => {
      ship.body.forEach((part) => {
        game.updateBoard(part, ship.color);
      });
    });
  }

  moveAlienShipsLR() {
    this.alienShips.forEach((ship, idx, arr) => {
      let leftmostShipIndex = (Math.floor(idx / 6)) * 6;
      let leftmostShip = arr[leftmostShipIndex];
      let rightmostShipIndex = (((Math.floor(idx / 6)) + 1) * 6) - 1;
      let rightmostShip = arr[rightmostShipIndex];

      if (rightmostShip.body[3].x === 26) {
        ship.direction = "left";
      } else if (leftmostShip.body[2].x === 0) {
        ship.direction = "right";
      }

      ship.move(ship.direction);
    });
  }

  moveAlienShipsDown() {
    this.alienShips.forEach((ship) => {
      ship.move("down");
    });
  }

  destroyShip(ship) {
    if (ship instanceof PlayerShip) {
      this.lives -= 1;
      this.playerShip = null;
      ship.body.forEach((part) => {
        game.updatedBoard(part, null);
      });
    } else if (ship instanceof AlienShip) {
      const alienShipIndex = this.alienShips.indexOf(ship);
      // The ship will be hidden, but will continue to exist,
      // because, to determine the direction in which a row's ships will move,
      // we need the ships at each end.
      this.alienShips[alienShipIndex].color = "black";
      this.alienShips[alienShipIndex].shooting = false;
      this.alienShips[alienShipIndex + 6].shooting = true;
      ship.body.forEach((part) => {
        game.updatedBoard(part, null);
      });
    }
  }

  resetPlayerShip() {
    if (this.lives > 0) {
      this.playerShip = new PlayerShip([33,13]);
      this.playerShip.body.forEach((part) => {
        updateBoard(part, "grey");
      });
    }
  }

  updateBoard(coord, val) {
    this.board.updateGrid(coord, val);
  }

  createMissile({loc, origin}) {
    this.missileId += 1;
    const missile = new Missile(loc[0], loc[1], this.missileId, origin);
    this.missiles[this.missileId] = missile;
  }

  markMissilesOnBoard() {
    for (id in this.missiles) {
      let missile = this.missiles[id];
      updateBoard(missile, "missile");
    }
  }

  moveMissiles() {
    this.missiles.forEach((missile) => {
      updateBoard(missile, null);
      if (missile.origin === "alien") {
        missile.shift("down");
        updateBoard(missile, "missile");
      } else if (missile.origin === "human") {
        missile.shift("up");
        updateBoard(missile, "missile");
      }
    });
  }

  generateAlienShipMissile() {
    const shootingShips = this.alienShips.filter((ship) => { return ship.shooting });
    const randomShootingShip = shootingShips[Math.floor(Math.random() * shootingShips.length)];

    createMissile(randomShootingShip.fireMissile());
  }

  mapAlienShipsToTheirBodies() {
    return this.AlienShips.map((ship) => {ship.body});
  }

  resolveMissileCollisions() {
    const game = this;

    for (let id in this.missiles) {
      let missile = this.missiles[id];
      if (missile.includedIn(this.playerShip.body)) {
        this.destroyShip(this.playerShip);
        this.resetPlayerShip();
        delete this.missiles[id];
      } else {
        for (let i = 0; i < this.alienShips.length; i++) {
          let ship = this.alienShips[i];
          if (ship.isLive() && missile.includedIn(ship.body)) {
            game.destroyShip(this.ship);
            delete this.missiles[id];
            break;
          }
        }
      }
    }
  }
}

modules.export = Game;
