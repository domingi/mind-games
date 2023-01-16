import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

const randomNum = () => Math.round(Math.random() * 100 + 1);

const randomSign = () => {
  const sign = Math.floor(Math.random() * 3);
  if (sign === 0) return '+';
  if (sign === 1) return '-';
  return '*';
};

const checkTheRightAnswer = (rightAnswer, answer) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const checkResult = (count, name) => {
  // eslint-disable-next-line no-unused-expressions
  count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

export {
  readlineSync,
  greeting,
  randomNum,
  randomSign,
  checkTheRightAnswer,
  checkResult,
};
