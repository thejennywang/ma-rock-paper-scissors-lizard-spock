function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
	rock:     { scissors: 'crushes', lizard: 'squashes'   },
	paper:    { rock: 'covers', 		 spock: 'disproves' 	},
	scissors: { paper: 'cuts', 			 lizard: 'decapitates'},
	lizard:   { spock: 'poisons', 	 paper: 'eats' 				},
	spock: 		{ rock: 'vaporizes', 	 scissors: 'smashes'  }
}

Game.prototype.winner = function() {
	if (this._isSamePick()) return null;

	if(this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
	  return this.player1;
	} else {
		return this.player2;
	}
};

Game.prototype.loser = function () {
	return (this.winner() === this.player1 ? this.player2 : this.player1);
};

Game.prototype._isSamePick = function() {
	 return this.player1.pick === this.player2.pick;
};

Game.prototype.victoryMessage = function() {
	var message;

	if (this.winner()) {
		message = this.winner().pick.charAt(0).toUpperCase() + this.winner().pick.slice(1) + " " + this._victoryVerbFor(this.winner().pick, this.loser().pick) + " " + this.loser().pick + " - " + this.winner().name + " wins!";
	} else {
		message =  'It was a draw!';
	}

	return message;
};


Game.prototype._victoryVerbFor = function(pick, opponentPick) {
	return this.PAIRS[pick][opponentPick];
}