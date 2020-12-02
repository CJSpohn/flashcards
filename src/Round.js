const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    const currentCard = this.deck.cards[0];
    return currentCard;
  }

  takeTurn(guess) {
    this.turns++;

    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);

    this.deck.cards.shift();
    this.deck.cards.push(card);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }

    this.endRound();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percentMissed = (this.incorrectGuesses.length / this.deck.cards.length) * 100;
    return Math.floor(100 - percentMissed);
  }

  endRound() {
    if (this.turns === this.deck.cards.length) {
      return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }

}


module.exports = Round;
