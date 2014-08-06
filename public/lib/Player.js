function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};
