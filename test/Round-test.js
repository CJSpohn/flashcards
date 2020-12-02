const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3, deck;

  beforeEach(function () {
    card1 = new Card(2, 'Where was Chris born?', ['California', 'Colorado', 'New Mexico'], 'California');
    card2 = new Card(16, 'What is Chris\'s favorite soup?', ['Chowder', 'Tomato', 'Potato'], 'Potato');
    card3 = new Card(7, 'What activity does Chris like doing the most?', ['Bowling', 'Baking', 'Eating'], 'Eating');
    deck = [card1, card2, card3];
    return round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should return the current card being played', function() {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(card1);
  });

  it('should update turns count every guess', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it('should store the id of incorrect guesses', function() {
    round.takeTurn('Colorado');

    expect(round.incorrectGuesses[0]).to.equal(2);
  });

  it('should go to the next card in the deck after a guess', function() {
    round.takeTurn('California');
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(card2);
  });

  it('should return feedback after a guess', function() {
    const feedback = round.takeTurn('Colorado');

    expect(feedback).to.equal('Incorrect!')
  });

  it('should return the percentage of correct answers', function() {
    round.takeTurn('California');
    round.takeTurn('Potato');
    round.takeTurn('Baking');
    const score = round.calculatePercentCorrect();

    expect(score).to.equal(66)
  });

});
