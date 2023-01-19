import readlineSync from 'readline-sync';

const runGame = (greeting, arrAnswerRight, rounds) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(greeting);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answerRight] = arrAnswerRight[i];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer ');

    if (answer === answerRight) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerRight}'.`);
      return console.log(`Let's try again, ${playerName}!`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default runGame;
