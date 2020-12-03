const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', () => {
  let card1, card2, card3, deck;

  beforeEach(function () {
    card1 = new Card(2, 'Where was Chris born?', ['California', 'Colorado', 'New Mexico'], 'California');
    card2 = new Card(16, 'What is Chris\'s favorite soup?', ['Chowder', 'Tomato', 'Potato'], 'Potato');
    card3 = new Card(7, 'What activity does Chris like doing the most?', ['Bowling', 'Baking', 'Eating'], 'Eating');
    deck = new Deck([card1, card2, card3]);

    return round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should return the current card being played', () => {
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.eql(card1);
  });

  it('should update turns count every guess', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(2);
  });

  it('should store the id of incorrect guesses', () => {
    round.takeTurn('Colorado');

    expect(round.incorrectGuesses[0]).to.equal(2);
  });

  it('should not store the id of correct guesses', () => {
    round.takeTurn('California');
    round.takeTurn('Potato');

    expect(round.incorrectGuesses).to.eql([]);
  })

  it('should go to the next card in the deck after a guess', () => {
    round.takeTurn('California');
    const currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(card2);
  });

  it('should return Correct! after a correct guess', () => {
    const feedback = round.takeTurn('California');

    expect(feedback).to.equal('Correct!')
  });

  it('should return Incorrect! after an incorrect guess', () => {
    const feedback = round.takeTurn('Colorado');

    expect(feedback).to.equal('Incorrect!')
  });

  it('should return the percentage of correct answers as an integer', () => {
    round.takeTurn('California');
    round.takeTurn('Potato');
    round.takeTurn('Baking');
    const score = round.calculatePercentCorrect();

    expect(score).to.equal(66);
  });

  it('should end the round once all the cards have been played', () => {
    round.takeTurn('Colorado');
    round.takeTurn('Potato');
    expect(round.endRound()).to.be.undefined;
    round.takeTurn('Eating');
    expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`);
  });

});
