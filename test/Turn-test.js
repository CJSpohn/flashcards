const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card;

  beforeEach(() => {
    card = new Card(2, 'What is Chris\'s favorite color?', ['Green', 'Blue', 'Orange'], 'Orange');
  });

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a card and a guess', () => {
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    expect(turn.guess).to.equal('Blue');
    expect(turn.card.question).to.equal('What is Chris\'s favorite color?', ['Green', 'Blue', 'Orange'], 'Orange');
  });

  it('should be able to return the guess', () => {
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    const returnedGuess = turn.returnGuess();
    expect(returnedGuess).to.equal(guess);
  });

  it('should be able to return the card', () => {
    const guess = 'Green';
    const turn = new Turn(guess, card);
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.deep.equal(card);
  });

  it('should be able to evaluate the guess as false if false', () => {
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    const result = turn.evaluateGuess();
    expect(result).to.equal(false);

  });

  it('should be able to evaluate the guess as true if true', function () {
    const guess = 'Orange';
    const turn = new Turn(guess, card);
    const result = turn.evaluateGuess();
    expect(result).to.equal(true);
  });

  it('should provide Correct! as feedback if correct', () => {
    const guess = 'Orange';
    const turn = new Turn(guess, card);
    const result = turn.giveFeedback();
    expect(result).to.equal('Correct!');
  })

  it('should provide Incorrect! as feedback if incorrect', () => {
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    const result = turn.giveFeedback();
    expect(result).to.equal('Incorrect!');
  })

});
