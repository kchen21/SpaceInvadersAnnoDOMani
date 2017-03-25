const SpaceInvadersView = require('./space_invaders_view.js');

$l(function () {
  const rootEl = $l('.space-invaders');
  new SpaceInvadersView(rootEl);
});
