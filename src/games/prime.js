import {
  readlineSync,
  greeting,
  randomNum,
  checkTheRightAnswer,
  checkResult,
} from '../index.js';

const isNumPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const playerName = greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const gamePrime = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const questionNum = randomNum();
    rightAnswer = isNumPrime(questionNum) ? 'yes' : 'no';

    console.log(`Question: ${questionNum} `);
    const answer = readlineSync.question('Your answer ');

    if (checkTheRightAnswer(rightAnswer, answer)) {
      countRightQuestions += 1;
    } else break;
  }

  checkResult(countRightQuestions, playerName);
};

export default gamePrime;
