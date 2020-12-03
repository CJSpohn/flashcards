const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.round = 0;
    this.currentRound
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. Round ${this.round}.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  gameStart() {
    this.setUpGame();
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  setUpGame() {
    this.round++;
    const cards = prototypeQuestions.map(question => new Card(question.id, question. question, question.answers, question.correctAnswer));
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
  }

}


module.exports = Game;
