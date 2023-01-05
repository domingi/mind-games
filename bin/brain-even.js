#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandom = () => {
  let countRightQuestions = 0;
  while (countRightQuestions < 3) {
    const randomNum = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer ');
    if (randomNum % 2 === 0) {
      if (answer === 'yes') {
        countRightQuestions += 1;
        console.log('Correct!');
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was 'yes'.`
        );
        break;
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (answer === 'no') {
        countRightQuestions += 1;
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
        break;
      }
    }
  }
  countRightQuestions === 3
    ? console.log(`Congratulations, ${playerName}!`)
    : console.log(`Let's try again, ${playerName}!`);
};

getRandom();
