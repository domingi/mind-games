import { readlineSync, greeting, randomNum, checkResult } from '../index.js';

const getGreatestDivisor = (a, b) => {
  let remainder = a % b;
  let divisor = b;
  let tempRemainder;
  while (remainder !== 0) {
    tempRemainder = remainder;
    remainder = divisor % remainder;
    divisor = tempRemainder;
  }
  return divisor;
};

const playerName = greeting();
console.log('Find the greatest common divisor of given numbers.');

const gameGCD = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const expression = [randomNum(), randomNum()];
    rightAnswer = getGreatestDivisor(expression[0], expression[1]);
    rightAnswer = rightAnswer.toString();

    console.log(`Question: ${expression[0]} ${expression[1]}`);
    const answer = readlineSync.question('Your answer ');

    if (answer === rightAnswer) {
      countRightQuestions += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
  }
  checkResult(countRightQuestions, playerName);
};

export default gameGCD;
