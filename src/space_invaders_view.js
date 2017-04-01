const Game = require("./game.js");

class SpaceInvadersView {
  constructor(el) {
    this.el = el;
    this.showInstructions();
  }

  showInstructions() {
    this.game = new Game();
    this.board = this.game.board;
    this.el.empty();
    const $heading = $l("<h2>How To Play</h2>");
    $heading.addClass("instructions-heading");
    const $info1 = $l("<p>Tap the left and right arrow keys to manuever</p>");
    const $info2 = $l("<p>Tap the space bar to shoot</p>");
    $info1.addClass("instructions-info");
    $info2.addClass("instructions-info");
    this.el.append($heading);
    this.el.append($info1);
    this.el.append($info2);

    const view = this;

    const $startButton = $l(`<form></form>`);
    $startButton.addClass("start-button");
    $startButton.html('<input type="submit" value="Start">');
    this.el.append($startButton);
    $l('.start-button').on("submit", view.initializeIntervals.bind(view));
  }

  initializeIntervals(evt) {
    evt.preventDefault();
    this.interval1 = setInterval(this.runDecisecondIntervalMethods.bind(this), 100);
    this.interval2 = setInterval(this.game.generateAlienShipMissile.bind(this.game), 500);
    this.interval3 = setInterval(this.game.moveAlienShipsDown.bind(this.game), 10000);
  }

  renderBoard() {
    this.el.empty();
    this.el.append(`<p>Lives: ${this.game.lives}</p>`)
    this.board.grid.forEach((row, i) => {
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
        } else if (el === "orange") {
          $li.addClass("shield-part");
        } else if (el === "grey") {
          $li.addClass("player-ship-part");
        } else if (el === "missile") {
          $li.addClass("missile");
        }

        $ul.append($li);
      });
      this.el.append($ul);
    });
  }

  runDecisecondIntervalMethods() {
    this.game.markAlienShipsOnBoard();
    this.game.markShieldsOnBoard();
    this.game.markPlayerShipOnBoard();
    this.game.markMissilesOnBoard();
    this.renderBoard();
    this.checkGameStatus();
    this.game.clearAlienShipsFromBoard();
    this.game.clearPlayerShipFromBoard();
    this.game.moveAlienShipsLR();
    this.game.moveMissiles();
    this.game.resolveMissileCollisions();
  }

  checkGameStatus() {
    const lowestLiveAlienShip = this.game.lowestLiveAlienShip();
    const xCoordOfLowestAlienShipPart = lowestLiveAlienShip ? lowestLiveAlienShip.nose[0] : null;

    if (this.game.lives <= 0 || xCoordOfLowestAlienShipPart === 29) {
      window.clearInterval(this.interval1);
      window.clearInterval(this.interval2);
      window.clearInterval(this.interval3);

      if (confirm("YOU LOSE! START A NEW GAME?")) {
        this.showInstructions();
      }
    } else if (lowestLiveAlienShip === null) {
      window.clearInterval(this.interval1);
      window.clearInterval(this.interval2);
      window.clearInterval(this.interval3);

      if (confirm("YOU WIN! START A NEW GAME?")) {
        this.showInstructions();
      }
    }
  }
}

module.exports = SpaceInvadersView;
