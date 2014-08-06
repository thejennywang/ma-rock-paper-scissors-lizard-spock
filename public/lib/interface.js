$(document).ready(function(){
	var player1 = new Player("Alex")
	var player2 = new Player("Computer")
	var game = new Game(player1, player2)
	var computerChoices = ["rock", "paper", "scissors", "lizard", "spock"]

	$('.choices img').on('click', function(){
		player1.picks($(this).data('pick'));
		player2.picks(computerChoices[Math.floor(Math.random() * 4)]);

		$('#result').prepend('<li>' + game.victoryMessage()+ '</li>').slideDown();

		$('#result li:gt(3)').fadeOut(function(){
			$(this).remove()
		})
	})
})
