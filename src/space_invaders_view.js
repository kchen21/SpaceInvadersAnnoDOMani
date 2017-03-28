const Game = require("./game.js");

class SpaceInvadersView {
  constructor(el) {
    this.el = el;
    this.game = new Game();
    this.board = this.game.board;
    this.run();
  }

  renderBoard() {
    this.board.grid.forEach({(row) => {
      const $ul = $l("<ul></ul>");
      $ul.addClass("group");
      row.forEach((el) => {
        const $li = $l("<li></li>");
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

  runIntervalMethods() {
    this.game.markAlienShipsOnBoard();
    this.game.markMissilesOnBoard();
    this.renderBoard();
    this.game.moveAlienShipsLR();
    this.game.moveMissiles();
    this.game.resolveMissileCollisions();
  }

  run() {
    while (this.game.lives > 0) {
      setInterval(this.runIntervalMethods.bind(this), 100);
      setTimeout(this.game.generateAlienShipMissile.bind(this.game), 5000);
      setTimeout(this.game.moveAlienShipsDown.bind(this.game), 10000);
    }
  }
}

module.exports = SpaceInvadersView;
