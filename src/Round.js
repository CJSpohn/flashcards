const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck,
    this.turns = 0,
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    const currentCard = this.deck[0]
    return currentCard;
  }

  takeTurn(guess) {
    this.turns++;

    let card = this.returnCurrentCard();
    let turn = new Turn(guess, card);

    this.deck.shift();
    this.deck.push(card);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percentMissed = (this.incorrectGuesses.length / this.deck.length) * 100;
    return Math.floor(100 - percentMissed);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

}


module.exports = Round;
