const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');
const questions = data.prototypeData;

describe('Game', function() {
  let deck, turn, round;

  beforeEach(function() {
    let card1 = new Card(1, 'What is the air speed velocity of an unlaiden swallow?', ['Umm, I don\'t know', '42 mph', 'fast'], 'Umm, I don\'t know');
    let card2 = new Card(2, 'What is Chris\'s favorite movie?', ['Cool Runnings', 'Tropic Thunder', 'The Way, Way Back'], 'The Way, Way Back');
    let card3 = new Card(3, 'What card is this?', ['1', '2', '3'], '3');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game();
  });

  it('should keep track of the current round', function() {
    expect(game.round).to.equal(0);

    // game.gameStart();
    //
    // expect(game.round).to.equal(1);
  });



  it('should be able to put cards in a deck', function() {

  });

  it('should create a new round using the deck', function() {

  });

});
