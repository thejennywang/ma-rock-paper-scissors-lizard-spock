function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
	rock:     { beats: ['scissors', 'lizard'] },
	paper:    { beats: ['rock', 'spock' ]    	},
	scissors: { beats: ['paper', 'lizard' ]   },
	lizard:   { beats: ['spock', 'paper'] },
	spock: 		{ beats: ['rock', 'scissors']   },
}

Game.prototype.winner = function() {
	if (this._isSamePick())  {
		return null;
	}

	if(this.player1.defeats(this.player2)) {
	  return this.player1;
	} else {
		return this.player2;
	}
};

Game.prototype._isSamePick = function() {
	 return this.player1.pick === this.player2.pick;
};

Game.prototype.victoryMessage = function() {
	return this.player1.name + "\'s " + this.player1.pick + " beats " + this.player2.name + "\'s " + this.player2.pick + "!";
};
