const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  let deck, card1, card2, card3;

  beforeEach(function() {
     card1 = new Card(2, 'Where was Chris born?', ['California', 'Colorado', 'New Mexico'], 'California');
     card2 = new Card(16, 'What is Chris\'s favorite soup?', ['Chowder', 'Tomato', 'Potato'], 'Potato');
     card3 = new Card(7, 'What activity does Chris like doing the most?', ['Bowling', 'Baking', 'Eating'], 'Eating');
     deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should store a deck of cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it('should know how many cards are in the deck', function() {
    const numberOfCards = deck.countCards()

    expect(numberOfCards).to.equal(3);
  });


});
