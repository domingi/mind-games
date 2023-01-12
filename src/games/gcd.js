import { readlineSync, greeting, randomNum, checkTheRightAnswer, checkResult } from '../index.js';

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

    if (checkTheRightAnswer(rightAnswer, answer)) {
      countRightQuestions += 1;
    } else break;
  }

  checkResult(countRightQuestions, playerName);
};

export default gameGCD;
