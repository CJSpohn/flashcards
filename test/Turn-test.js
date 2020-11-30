const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a card and a guess', function() {
    const card = new Card(2, 'What is Chris\'s favorite color?', ['Green', 'Blue', 'Orange'], 'Orange');
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    expect(turn.guess).to.equal('Blue');
    expect(turn.card.question).to.equal('What is Chris\'s favorite color?', ['Green', 'Blue', 'Orange'], 'Orange');
  });

  it('should be able to return the guess', function() {
    const card = new Card(2, 'What is Chris\'s favorite color?', ['Green', 'Blue', 'Orange'], 'Orange');
    const guess = 'Blue';
    const turn = new Turn(guess, card);
    const returnedGuess = turn.returnGuess();
    expect(returnedGuess).to.equal(guess);
  });

  it('should be able to return the card', function() {
    const card = new Card(4, 'What is Chris\'s favorite snack?', ['Apples', 'Cheez-its', 'Peanut Butter Pretzels'], 'Peanut Butter Pretzels');
    const guess = 'Peanut Butter Pretzels';
    const turn = new Turn(guess, card);
    const returnedCard = turn.returnCard();
    expect(returnedCard).to.deep.equal(card);
  });

});
