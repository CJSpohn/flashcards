const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.round = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards. Round ${this.round}.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  gameStart() {
    this.round += 1;
    let cards = prototypeQuestions.map(question => new Card(question.id, question. question, question.answers, question.correctAnswer));
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

}


module.exports = Game;
