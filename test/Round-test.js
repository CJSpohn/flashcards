const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round;
    expect(Round).to.be.a('function');
  });

  it('should return the current card being played', function() {

  });

  it('should update turns count every guess', function() {

  });

  it('should store the id of incorrect guesses', function() {

  });

  it('should go to the next card in the deck after a guess', function() {

  });

  it('should return feedback after a guess', function() {

  });

  it('should return the percentage of correct answers', function() {

  });

  it('should end the round', function () {

  });


});
