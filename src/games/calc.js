import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const getRandomSign = () => {
  const sign = Math.floor(Math.random() * 3);
  if (sign === 0) return '+';
  if (sign === 1) return '-';
  return '*';
};

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Error. Wrong result in function \'calculate\'');
  }
};

const getRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const sign = getRandomSign();

  const answer = calculate(num1, num2, sign).toString();
  const question = `${num1} ${sign} ${num2}`;

  return [question, answer];
};

const greeting = 'What is the result of the expression?';

const playGameCalc = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getRound());
  }
  runGame(greeting, roundTerms);
};

export default playGameCalc;
