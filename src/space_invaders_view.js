const Game = require("./game.js");

class SpaceInvadersView {
  constructor(el) {
    this.el = el;
    this.game = new Game();
    this.board = this.game.board;
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
        }
      })
    });
  }
}

module.exports = SpaceInvadersView;
