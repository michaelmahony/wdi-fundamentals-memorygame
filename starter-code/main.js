console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
	var board = document.getElementById("game-board")

	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement("div");
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		
		newCard.addEventListener('click', isTwoCards);

		board.appendChild(newCard);
	}

}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

var isTwoCards = function() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

createBoard()
