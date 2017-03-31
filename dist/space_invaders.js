/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coord = function () {
  function Coord(x, y) {
    _classCallCheck(this, Coord);

    this.x = x;
    this.y = y;
    this.directions = {
      "up": [-1, 0],
      "down": [1, 0],
      "right": [0, 1],
      "left": [0, -1]
    };
  }

  _createClass(Coord, [{
    key: "shift",
    value: function shift(direction) {
      var deltas = this.directions[direction];
      this.x += deltas[0];
      this.y += deltas[1];
    }
  }, {
    key: "isEqual",
    value: function isEqual(coord2) {
      return this.x === coord2.x && this.y === coord2.y;
    }
  }, {
    key: "includedIn",
    value: function includedIn(arr) {
      return arr.some(this.isEqual.bind(this));
    }
  }]);

  return Coord;
}();

module.exports = Coord;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Coord = __webpack_require__(0);

var Missile = function (_Coord) {
  _inherits(Missile, _Coord);

  function Missile(x, y, id, origin) {
    _classCallCheck(this, Missile);

    var _this = _possibleConstructorReturn(this, (Missile.__proto__ || Object.getPrototypeOf(Missile)).call(this, x, y));

    _this.id = id;
    _this.origin = origin;
    _this.directions = {
      "up": [-1, 0],
      "down": [1, 0],
      "right": [0, 1],
      "left": [0, -1]
    };
    return _this;
  }

  return Missile;
}(Coord);

module.exports = Missile;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coord = __webpack_require__(0);

var Ship = function () {
  function Ship(nose) {
    _classCallCheck(this, Ship);

    this.nose = nose;
    this.body = [];
  }

  _createClass(Ship, [{
    key: "move",
    value: function move(direction) {
      this.body.forEach(function (part) {
        part.shift(direction);
      });
      this.nose = [this.body[0].x, this.body[0].y];
    }
  }]);

  return Ship;
}();

module.exports = Ship;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = __webpack_require__(6);

var SpaceInvadersView = function () {
  function SpaceInvadersView(el) {
    _classCallCheck(this, SpaceInvadersView);

    this.el = el;
    this.game = new Game();
    this.board = this.game.board;
    this.interval1 = setInterval(this.runDecisecondIntervalMethods.bind(this), 100);
    this.interval2 = setInterval(this.game.generateAlienShipMissile.bind(this.game), 1000);
    this.interval3 = setInterval(this.game.moveAlienShipsDown.bind(this.game), 10000);
  }

  _createClass(SpaceInvadersView, [{
    key: "renderBoard",
    value: function renderBoard() {
      var _this = this;

      this.el.empty();
      this.board.grid.forEach(function (row, i) {
        var $ul = $l("<ul></ul>");
        $ul.addClass("group");
        row.forEach(function (el) {
          var $li = $l("<li></li>");
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
        _this.el.append($ul);
      });
    }
  }, {
    key: "runDecisecondIntervalMethods",
    value: function runDecisecondIntervalMethods() {
      this.checkGameStatus();
      this.game.markAlienShipsOnBoard();
      this.game.markShieldsOnBoard();
      this.game.markPlayerShipOnBoard();
      this.game.markMissilesOnBoard();
      this.renderBoard();
      this.game.clearAlienShipsFromBoard();
      this.game.clearPlayerShipFromBoard();
      this.game.moveAlienShipsLR();
      this.game.moveMissiles();
      this.game.resolveMissileCollisions();
    }
  }, {
    key: "checkGameStatus",
    value: function checkGameStatus() {
      if (this.game.lives === 0) {
        alert("GAME OVER");
        window.clearInterval(this.interval1);
        window.clearInterval(this.interval2);
        window.clearInterval(this.interval3);
      }
    }
  }]);

  return SpaceInvadersView;
}();

module.exports = SpaceInvadersView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ship = __webpack_require__(2);
var Coord = __webpack_require__(0);

var AlienShip = function (_Ship) {
  _inherits(AlienShip, _Ship);

  function AlienShip(nose, color) {
    _classCallCheck(this, AlienShip);

    var _this = _possibleConstructorReturn(this, (AlienShip.__proto__ || Object.getPrototypeOf(AlienShip)).call(this, nose));

    _this.color = color;
    _this.direction = "right";
    _this.shooting = false;
    _this.renderBody(_this.nose);
    return _this;
  }

  _createClass(AlienShip, [{
    key: "move",
    value: function move(direction) {
      return _get(AlienShip.prototype.__proto__ || Object.getPrototypeOf(AlienShip.prototype), "move", this).call(this, direction);
    }
  }, {
    key: "renderBody",
    value: function renderBody(nose) {
      this.body.push(new Coord(nose[0], nose[1]));
      this.body.push(new Coord(nose[0] - 1, nose[1]));
      this.body.push(new Coord(nose[0] - 1, nose[1] - 1));
      this.body.push(new Coord(nose[0] - 1, nose[1] + 1));
    }
  }, {
    key: "fireMissile",
    value: function fireMissile() {
      return { loc: this.nose, origin: "alien" };
    }
  }, {
    key: "isLive",
    value: function isLive() {
      return this.color !== "black";
    }
  }]);

  return AlienShip;
}(Ship);

module.exports = AlienShip;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coord = __webpack_require__(0);
var Missile = __webpack_require__(1);

var Board = function () {
  function Board() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 27;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;

    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
    this.grid = [];
    this.renderGrid();
  }

  _createClass(Board, [{
    key: "renderGrid",
    value: function renderGrid() {
      for (var i = 0; i < this.height; i++) {
        var row = [];
        for (var j = 0; j < this.width; j++) {
          row.push(null);
        }
        this.grid.push(row);
      }
    }
  }, {
    key: "updateGrid",
    value: function updateGrid(coord, val) {
      this.grid[coord.x][coord.y] = val;
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = __webpack_require__(5);
var AlienShip = __webpack_require__(4);
var Shield = __webpack_require__(9);
var PlayerShip = __webpack_require__(8);
var Missile = __webpack_require__(1);

var Game = function () {
  function Game() {
    var lives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

    _classCallCheck(this, Game);

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

  _createClass(Game, [{
    key: "handleKeyEvent",
    value: function handleKeyEvent(event) {
      event.preventDefault();
      switch (event.keyCode) {
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
  }, {
    key: "updateBoard",
    value: function updateBoard(coord, val) {
      this.board.updateGrid(coord, val);
    }
  }, {
    key: "renderAlienShips",
    value: function renderAlienShips() {
      var alienShipNoses1 = [[17, 3], [17, 7], [17, 11], [17, 15], [17, 19], [17, 23]];
      var alienShipNoses2 = [[14, 2], [14, 6], [14, 10], [14, 14], [14, 18], [14, 22]];
      var alienShipNoses3 = [[11, 1], [11, 5], [11, 9], [11, 13], [11, 17], [11, 21]];
      var alienShipNoses4 = [[8, 2], [8, 6], [8, 10], [8, 14], [8, 18], [8, 22]];
      var alienShipNoses5 = [[5, 3], [5, 7], [5, 11], [5, 15], [5, 19], [5, 23]];

      var game = this;

      alienShipNoses1.forEach(function (nose) {
        var ship = new AlienShip(nose, "white");
        ship.shooting = true;
        game.alienShips.push(ship);
      });

      alienShipNoses2.forEach(function (nose) {
        var ship = new AlienShip(nose, "yellow");
        game.alienShips.push(ship);
      });

      alienShipNoses3.forEach(function (nose) {
        var ship = new AlienShip(nose, "green");
        game.alienShips.push(ship);
      });

      alienShipNoses4.forEach(function (nose) {
        var ship = new AlienShip(nose, "blue");
        game.alienShips.push(ship);
      });

      alienShipNoses5.forEach(function (nose) {
        var ship = new AlienShip(nose, "purple");
        game.alienShips.push(ship);
      });
    }
  }, {
    key: "markAlienShipsOnBoard",
    value: function markAlienShipsOnBoard() {
      var game = this;

      this.alienShips.forEach(function (ship) {
        ship.body.forEach(function (part) {
          game.updateBoard(part, ship.color);
        });
      });
    }
  }, {
    key: "clearAlienShipsFromBoard",
    value: function clearAlienShipsFromBoard() {
      var game = this;

      this.alienShips.forEach(function (ship) {
        ship.body.forEach(function (part) {
          game.updateBoard(part, null);
        });
      });
    }
  }, {
    key: "moveAlienShipsLR",
    value: function moveAlienShipsLR() {
      this.alienShips.forEach(function (ship, idx, arr) {
        var leftmostShipIndex = Math.floor(idx / 6) * 6;
        var leftmostShip = arr[leftmostShipIndex];
        var rightmostShipIndex = (Math.floor(idx / 6) + 1) * 6 - 1;
        var rightmostShip = arr[rightmostShipIndex];

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
  }, {
    key: "moveAlienShipsDown",
    value: function moveAlienShipsDown() {
      this.alienShips.forEach(function (ship) {
        ship.move("down");
      });
    }
  }, {
    key: "destroyShip",
    value: function destroyShip(ship) {
      var game = this;

      if (ship instanceof PlayerShip) {
        this.lives -= 1;
        this.playerShip = null;
        ship.body.forEach(function (part) {
          game.updateBoard(part, null);
        });
      } else if (ship instanceof AlienShip) {
        var alienShipIndex = this.alienShips.indexOf(ship);
        // The ship will be hidden, but will continue to exist,
        // because, to determine the direction in which a row's ships will move,
        // we need the ships at each end.
        ship.color = "black";
        ship.shooting = false;
        var potentialShooter = this.alienShips[alienShipIndex + 6];
        if (potentialShooter && potentialShooter.color !== "black") {
          this.alienShips[alienShipIndex + 6].shooting = true;
        }
        ship.body.forEach(function (part) {
          game.updateBoard(part, null);
        });
      }
    }
  }, {
    key: "resetPlayerShip",
    value: function resetPlayerShip() {
      if (this.lives > 0) {
        this.playerShip = new PlayerShip([33, 13]);
      }
    }
  }, {
    key: "markPlayerShipOnBoard",
    value: function markPlayerShipOnBoard() {
      var _this = this;

      this.playerShip.body.forEach(function (part) {
        _this.updateBoard(part, "grey");
      }, this);
    }
  }, {
    key: "clearPlayerShipFromBoard",
    value: function clearPlayerShipFromBoard() {
      var _this2 = this;

      this.playerShip.body.forEach(function (part) {
        _this2.updateBoard(part, null);
      }, this);
    }
  }, {
    key: "renderShields",
    value: function renderShields() {
      var _this3 = this;

      var shieldBosses = [[29, 4], [29, 10], [29, 16], [29, 22]];

      shieldBosses.forEach(function (boss) {
        var shield = new Shield(boss);
        _this3.shields.push(shield);
      }, this);
    }
  }, {
    key: "markShieldsOnBoard",
    value: function markShieldsOnBoard() {
      var game = this;
      this.shields.forEach(function (shield) {
        shield.parts.forEach(function (part) {
          game.updateBoard(part, "orange");
        });
      });
    }
  }, {
    key: "createMissile",
    value: function createMissile(_ref) {
      var loc = _ref.loc,
          origin = _ref.origin;

      this.missileId += 1;
      var missile = new Missile(loc[0], loc[1], this.missileId, origin);
      this.missiles[this.missileId] = missile;
    }
  }, {
    key: "markMissilesOnBoard",
    value: function markMissilesOnBoard() {
      for (var id in this.missiles) {
        var missile = this.missiles[id];
        this.updateBoard(missile, "missile");
      }
    }
  }, {
    key: "moveMissiles",
    value: function moveMissiles() {
      for (var id in this.missiles) {
        var missile = this.missiles[id];
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
  }, {
    key: "generateAlienShipMissile",
    value: function generateAlienShipMissile() {
      var shootingShips = this.alienShips.filter(function (ship) {
        return ship.shooting;
      });
      var randomShootingShip = shootingShips[Math.floor(Math.random() * shootingShips.length)];

      if (randomShootingShip) {
        this.createMissile(randomShootingShip.fireMissile());
      }
    }
  }, {
    key: "mapAlienShipsToTheirBodies",
    value: function mapAlienShipsToTheirBodies() {
      return this.AlienShips.map(function (ship) {
        ship.body;
      });
    }
  }, {
    key: "resolveMissileCollisions",
    value: function resolveMissileCollisions() {
      var game = this;

      for (var id in this.missiles) {
        var missile = this.missiles[id];
        var idOfCollidingMissile = this.idOfCollidingMissile(id);

        if (idOfCollidingMissile) {
          var collidingMissile = this.missiles[idOfCollidingMissile];
          delete this.missiles[idOfCollidingMissile];
          delete this.missiles[id];
          this.updateBoard(collidingMissile, null);
          this.updateBoard(missile, null);
        } else if (missile.origin === "alien" && missile.includedIn(this.playerShip.body)) {
          delete this.missiles[id];
          this.destroyShip(this.playerShip);
          this.resetPlayerShip();
        } else {
          for (var i = 0; i < this.alienShips.length; i++) {
            var ship = this.alienShips[i];
            if (missile.origin === "human" && ship.isLive() && missile.includedIn(ship.body)) {
              delete this.missiles[id];
              game.destroyShip(ship);
              break;
            }
          }
        }
      }
    }
  }, {
    key: "idOfCollidingMissile",
    value: function idOfCollidingMissile(missileId) {
      var missile1 = this.missiles[missileId];
      for (var id in this.missiles) {
        var missile2 = this.missiles[id];

        if (id !== missileId && missile1.isEqual(missile2)) {
          return id;
        } else if (missile1.x === missile2.x - 1 && missile1.y === missile2.y) {
          return id;
        }
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SpaceInvadersView = __webpack_require__(3);

$l(function () {
  var rootEl = $l('.space-invaders');
  new SpaceInvadersView(rootEl);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ship = __webpack_require__(2);
var Coord = __webpack_require__(0);

var PlayerShip = function (_Ship) {
  _inherits(PlayerShip, _Ship);

  function PlayerShip(nose) {
    _classCallCheck(this, PlayerShip);

    var _this = _possibleConstructorReturn(this, (PlayerShip.__proto__ || Object.getPrototypeOf(PlayerShip)).call(this, nose));

    _this.renderBody(_this.nose);
    return _this;
  }

  _createClass(PlayerShip, [{
    key: "move",
    value: function move(direction) {
      return _get(PlayerShip.prototype.__proto__ || Object.getPrototypeOf(PlayerShip.prototype), "move", this).call(this, direction);
    }
  }, {
    key: "renderBody",
    value: function renderBody(nose) {
      this.body.push(new Coord(nose[0], nose[1]));
      this.body.push(new Coord(nose[0] + 1, nose[1]));
      this.body.push(new Coord(nose[0] + 1, nose[1] - 1));
      this.body.push(new Coord(nose[0] + 1, nose[1] + 1));
    }
  }, {
    key: "fireMissile",
    value: function fireMissile() {
      return { loc: this.nose, origin: "human" };
    }
  }]);

  return PlayerShip;
}(Ship);

module.exports = PlayerShip;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coord = __webpack_require__(0);

var Shield = function () {
  function Shield(boss) {
    _classCallCheck(this, Shield);

    this.boss = boss;
    this.parts = [];
    this.renderParts(this.boss);
  }

  _createClass(Shield, [{
    key: "renderParts",
    value: function renderParts(boss) {
      this.parts.push(new Coord(boss[0], boss[1]));
      this.parts.push(new Coord(boss[0] + 1, boss[1] - 1));
      this.parts.push(new Coord(boss[0] + 2, boss[1] - 2));
      this.parts.push(new Coord(boss[0] + 1, boss[1] + 1));
      this.parts.push(new Coord(boss[0] + 2, boss[1] + 2));
    }
  }]);

  return Shield;
}();

module.exports = Shield;

/***/ })
/******/ ]);
//# sourceMappingURL=space_invaders.js.map