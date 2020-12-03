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
      if (game.currentRound.calculatePercentCorrect() > 75) {
        console.log(`You really grasp this material, CONGRATS!`)
      } else {
        console.log(`You need a 75% or better to move on from this data set. Try again!`)
        setTimeout( () => { game.gameStart() }, 2000);
      }
    } else {
      main(round, start);
    }


}

module.exports.main = main;
