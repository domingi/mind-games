import readlineSync from 'readline-sync';

const gameCore = (text, arr) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  console.log(text);

  let i = 0;
  while (i < 3) {
    console.log(`Question: ${arr[i][0]}`);
    const answer = readlineSync.question('Your answer ');

    if (answer === arr[i][1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.`);
      return console.log(`Let's try again, ${playerName}!`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default gameCore;
