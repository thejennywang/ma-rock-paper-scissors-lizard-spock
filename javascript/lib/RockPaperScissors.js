function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.defeats = function(opponent) {
	return Game.prototype.PAIRS[this.player1.pick]['beats'].indexOf(opponent.pick) !== -1

};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
	rock:     { beats: 'scissors' },
	paper:    { beats: 'rock'     },
	scissors: { beats: 'paper'    },
	spock: 		{ beats: ['scissors', 'rock']}
}

Game.prototype.winner = function() {
	// if (this.player1.pick === this.player2.pick){
	// 	return null
	// }

	if(this.player1.defeats(this.player2)) {
	  return this.player1;
	} else {
		return this.player2;
	}
};