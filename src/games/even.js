/* eslint-disable object-curly-newline */
import { readlineSync, greeting, randomNum, checkTheRightAnswer, checkResult } from '../index.js';

const playerName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playGameEven = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const num = randomNum();
    if (num % 2 === 0) {
      rightAnswer = 'yes';
    } else rightAnswer = 'no';

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer ');

    if (checkTheRightAnswer(rightAnswer, answer)) {
      countRightQuestions += 1;
    } else break;
  }

  checkResult(countRightQuestions, playerName);
};
export default playGameEven;
