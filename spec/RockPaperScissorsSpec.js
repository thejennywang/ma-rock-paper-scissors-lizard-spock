describe("Rock-Paper-Scissors", function() {

  var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Computer');
    game = new Game(player1, player2);
  });

  describe("random choice", function() {
    it('should randomise computer\'s choice', function() {
      expect(player2.picks).toEqual(indexOf)(game.PAIRS)
    })

  })
  describe('victory messages', function() {
    it('should know players names', function() {
      expect(player1.name).toBe('Alex');
    });

    it('should specify the winning verb', function() {
      expect(game._victoryVerbFor('rock', 'scissors')).toEqual('crushes');
    });

    it('should let the players know if there is a winner', function() {
      player1.picks('rock');
      player2.picks('scissors');
      expect(game.winner()).toBe(player1);
      expect(game.victoryMessage()).toEqual('Rock crushes scissors - Alex wins!');
    });
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe ('spock', function() {

      it ('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it ('should beat scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it ('should lose to lizard', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it ('should lose to lizard', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

    });

    describe ('lizard', function() {

      it ('should beat spock', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it ('should beat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it ('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it ('should lose to scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors', 'lizard', 'spock'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null, null, null]);

      });

      it('result in victory message declaring draw', function(){
      player1.picks('rock');
      player2.picks('rock');
      expect(game.winner()).toBe(null);
      expect(game.victoryMessage()).toEqual('It was a draw!');
      });

    });

  });

});