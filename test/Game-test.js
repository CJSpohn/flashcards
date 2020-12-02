const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');

describe('Game', function() {
  let cards = [];
  let deck, turn, round;


  beforeEach(function() {
    data.forEach(question => {
      cards.push(new Card(question.id, question.question, question.answers, question.correctAnswer))
    });
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game();
  });

  it('should keep track of the current round', function() {

  });

  it('should create cards', function() {

  });

  it('should be able to put cards in a deck', function() {

  });

  it('should create a new round using the deck', function() {

  });

});
