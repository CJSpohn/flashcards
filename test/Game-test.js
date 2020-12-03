const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to start the game', () => {
    expect(game).to.respondTo('gameStart');
  });

  it('should start with no currentRound', function () {
    expect(game.currentRound).to.equal(undefined);
  });

  it('should create a new round after being set up', () => {
    game.setUpGame();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

});
