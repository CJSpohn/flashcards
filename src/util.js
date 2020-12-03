const inquirer = require('inquirer');

const genList = (round) => {
  let card = round.returnCurrentCard();

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round, start) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

  const calculateTime = () => {
    let finishTime = Date.now();
    let totalTime = (finishTime - start)/1000.
    return `You finished in ${totalTime.toFixed(1)} seconds!\n`;
  }
  
    if(!round.returnCurrentCard()) {
      console.log(round.endRound());
      console.log(calculateTime());
      game.gameStart();
    } else {
      main(round, start);
    }


}

module.exports.main = main;
