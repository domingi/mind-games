import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (greeting, roundTerms) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(greeting);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = roundTerms[i];
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer ');

    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return console.log(`Let's try again, ${playerName}!`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export { runGame, rounds };
