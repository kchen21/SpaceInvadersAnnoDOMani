const Board = require("./board.js");
const AlienShip = require("./alien_ship.js");
const Shield = require("./shield.js");
const PlayerShip = require("./player_ship.js");
const Missile = require("./missile.js")

class Game {
  constructor(lives = 3) {
    this.lives = lives;
    this.board = new Board();
    this.alienShips = [];
    this.shields = [];
    this.playerShip = null;
    this.missileId = 0;
    this.missiles = {};
    this.renderAlienShips();
    this.renderShields();
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
        if (this.playerShip.body[2].y !== 0) {
          this.playerShip.move("left");
        }
        break;
      case 39:
        if (this.playerShip.body[3].y !== 26) {
          this.playerShip.move("right");
        }
        break;
    }
  }

  updateBoard(coord, val) {
    this.board.updateGrid(coord, val);
  }

  renderAlienShips() {
    const alienShipNoses1 = [[17,3], [17,7], [17,11], [17,15], [17,19], [17,23]];
    const alienShipNoses2 = [[14,2], [14,6], [14,10], [14,14], [14,18], [14,22]];
    const alienShipNoses3 = [[11,1], [11,5], [11,9], [11,13], [11,17], [11,21]];
    const alienShipNoses4 = [[8,2], [8,6], [8,10], [8,14], [8,18], [8,22]];
    const alienShipNoses5 = [[5,3], [5,7], [5,11], [5,15], [5,19], [5,23]];

    const game = this;

    alienShipNoses1.forEach((nose) => {
      let ship = new AlienShip(nose, "white");
      ship.shooting = true;
      game.alienShips.push(ship);
    });

    alienShipNoses2.forEach((nose) => {
      let ship = new AlienShip(nose, "yellow");
      game.alienShips.push(ship);
    });

    alienShipNoses3.forEach((nose) => {
      let ship = new AlienShip(nose, "green");
      game.alienShips.push(ship);
    });

    alienShipNoses4.forEach((nose) => {
      let ship = new AlienShip(nose, "blue");
      game.alienShips.push(ship);
    });

    alienShipNoses5.forEach((nose) => {
      let ship = new AlienShip(nose, "purple");
      game.alienShips.push(ship);
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

  clearAlienShipsFromBoard() {
    const game = this;

    this.alienShips.forEach((ship) => {
      ship.body.forEach((part) => {
        game.updateBoard(part, null);
      });
    });
  }

  moveAlienShipsLR() {
    this.alienShips.forEach((ship, idx, arr) => {
      let leftmostShipIndex = (Math.floor(idx / 6)) * 6;
      let leftmostShip = arr[leftmostShipIndex];
      let rightmostShipIndex = (((Math.floor(idx / 6)) + 1) * 6) - 1;
      let rightmostShip = arr[rightmostShipIndex];

      if (rightmostShip.body[3].y === 26) {
        ship.direction = "left";
      } else if (leftmostShip.body[2].y === 1 && leftmostShip.direction === "right") {
        ship.direction = "right";
      } else if (ship === leftmostShip && ship.body[2].y === 0 && ship.direction === "left") {
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
    const game = this;

    if (ship instanceof PlayerShip) {
      this.lives -= 1;
      this.playerShip = null;
      ship.body.forEach((part) => {
        game.updateBoard(part, null);
      });
    } else if (ship instanceof AlienShip) {
      const alienShipIndex = this.alienShips.indexOf(ship);
      // The ship will be hidden, but will continue to exist,
      // because, to determine the direction in which a row's ships will move,
      // we need the ships at each end.
      ship.color = "black";
      ship.shooting = false;
      const potentialShooter = this.alienShips[alienShipIndex + 6];
      if (potentialShooter && potentialShooter.color !== "black") {
        this.alienShips[alienShipIndex + 6].shooting = true;
      }
      ship.body.forEach((part) => {
        game.updateBoard(part, null);
      });
    }
  }

  resetPlayerShip() {
    if (this.lives > 0) {
      this.playerShip = new PlayerShip([33,13]);
    }
  }

  markPlayerShipOnBoard() {
    this.playerShip.body.forEach((part) => {
      this.updateBoard(part, "grey");
    }, this);
  }

  clearPlayerShipFromBoard() {
    this.playerShip.body.forEach((part) => {
      this.updateBoard(part, null);
    }, this);
  }

  renderShields() {
    const shieldBosses = [[29,4], [29,10], [29,16], [29,22]];

    shieldBosses.forEach((boss) => {
      let shield = new Shield(boss);
      this.shields.push(shield);
    }, this);
  }

  markShieldsOnBoard() {
    const game = this;
    this.shields.forEach((shield) => {
      shield.parts.forEach((part) => {
        game.updateBoard(part, "orange");
      });
    });
  }

  getShieldParts() {
    const flatten = (arr) => {
      return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val);
      }, []);
    };

    return flatten(this.shields.map((shield) => {
      return shield.parts;
    }));
  }

  createMissile({loc, origin}) {
    this.missileId += 1;
    const missile = new Missile(loc[0], loc[1], this.missileId, origin);
    this.missiles[this.missileId] = missile;
  }

  markMissilesOnBoard() {
    for (let id in this.missiles) {
      let missile = this.missiles[id];
      this.updateBoard(missile, "missile");
    }
  }

  moveMissiles() {
    for (let id in this.missiles) {
      let missile = this.missiles[id];
      this.updateBoard(missile, null);
      if (missile.origin === "alien") {
        missile.shift("down");

        if (missile.x > 35) {
          delete this.missiles[id];
        } else {
          this.updateBoard(missile, "missile");
        }
      } else if (missile.origin === "human") {
        missile.shift("up");

        if (missile.x < 0) {
          delete this.missiles[id];
        } else {
          this.updateBoard(missile, "missile");
        }
      }
    }
  }

  generateAlienShipMissile() {
    const shootingShips = this.alienShips.filter((ship) => { return ship.shooting });
    const randomShootingShip = shootingShips[Math.floor(Math.random() * shootingShips.length)];

    if (randomShootingShip) {
      this.createMissile(randomShootingShip.fireMissile());
    }
  }

  mapAlienShipsToTheirBodies() {
    return this.AlienShips.map((ship) => {ship.body});
  }

  resolveMissileCollisions() {
    const game = this;

    for (let id in this.missiles) {
      let missile = this.missiles[id];
      let idOfCollidingMissile = this.idOfCollidingMissile(id);

      if (idOfCollidingMissile) {
        let collidingMissile = this.missiles[idOfCollidingMissile];
        delete this.missiles[idOfCollidingMissile];
        delete this.missiles[id];
        this.updateBoard(collidingMissile, null);
        this.updateBoard(missile, null);
      } else if (missile.origin === "alien" && missile.includedIn(this.playerShip.body)) {
        delete this.missiles[id];
        this.destroyShip(this.playerShip);
        this.resetPlayerShip();
      } else {
        for (let i = 0; i < this.alienShips.length; i++) {
          let ship = this.alienShips[i];
          if (missile.origin === "human" && ship.isLive() && missile.includedIn(ship.body)) {
            delete this.missiles[id];
            game.destroyShip(ship);
            break;
          }
        }
      }
    }
  }

  idOfCollidingMissile(missileId) {
    const missile1 = this.missiles[missileId];
    for (let id in this.missiles) {
      let missile2 = this.missiles[id];

      if (id !== missileId && missile1.isEqual(missile2)) {
        return id;
      } else if (missile1.x === missile2.x - 1 && missile1.y === missile2.y) {
        return id;
      }
    }
  }
}

module.exports = Game;
