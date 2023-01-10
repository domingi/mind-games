#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}`);
console.log('What is the result of the expression?');

const getRandomSign = () => {
  const sign = Math.round(Math.random() * 3 + 1);
  if (sign === 1) return '+';
  if (sign === 2) return '-';
  if (sign === 3) return '*';
};

const getRandomNum = () => Math.round(Math.random() * 100);

const gameCalc = () => {
  let countRightQuestions = 0;
  let rightAnswer;
  while (countRightQuestions < 3) {
    const expression = [getRandomNum(), getRandomSign(), getRandomNum()];
    // eslint-disable-next-line default-case
    switch (expression[1]) {
      case '+':
        rightAnswer = expression[0] + expression[2];
        break;
      case '-':
        rightAnswer = expression[0] - expression[2];
        break;
      case '*':
        rightAnswer = expression[0] * expression[2];
        break;
    }
    rightAnswer = rightAnswer.toString();

    console.log(`Question: ${expression[0]} ${expression[1]} ${expression[2]} `);
    const answer = readlineSync.question('Your answer ');

    if (answer === rightAnswer) {
      countRightQuestions += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
  }

  countRightQuestions === 3
    ? console.log(`Congratulations, ${playerName}!`)
    : console.log(`Let's try again, ${playerName}!`);
};

gameCalc();
