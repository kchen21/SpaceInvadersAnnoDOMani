const Game = require("./game.js");

class SpaceInvadersView {
  constructor(el) {
    this.el = el;
    this.game = new Game();
    this.board = this.game.board;
    this.interval1 = setInterval(this.runDecisecondIntervalMethods.bind(this), 100);
    this.interval2 = setInterval(this.game.generateAlienShipMissile.bind(this.game), 5000);
    this.interval3 = setInterval(this.game.moveAlienShipsDown.bind(this.game), 10000);
  }

  renderBoard() {
    this.board.grid.forEach((row) => {
      const $ul = $l("ul");
      $ul.addClass("group");
      row.forEach((el) => {
        const $li = $l("li");
        if (el === "white") {
          $li.addClass("white-alien-ship-part");
        } else if (el === "yellow") {
          $li.addClass("yellow-alien-ship-part");
        } else if (el === "green") {
          $li.addClass("green-alien-ship-part");
        } else if (el === "blue") {
          $li.addClass("blue-alien-ship-part");
        } else if (el === "purple") {
          $li.addClass("purple-alien-ship-part");
        } else if (el === "missile") {
          $li.addClass("missile");
        } else if (el === "grey") {
          $li.addClass("player-ship-part");
        }

        $ul.append($li);
      });
      this.el.append($ul);
    });
  }

  runDecisecondIntervalMethods() {
    this.game.markAlienShipsOnBoard();
    this.game.markMissilesOnBoard();
    this.renderBoard();
    this.game.moveAlienShipsLR();
    this.game.moveMissiles();
    this.game.resolveMissileCollisions();
    this.checkGameStatus();
  }

  checkGameStatus() {
    if (this.game.lives <= 0) {
      alert("GAME OVER");
      window.clearInterval(this.interval1);
      window.clearInterval(this.interval2);
      window.clearInterval(this.interval3);
    }
  }
}

module.exports = SpaceInvadersView;
