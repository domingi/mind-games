import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const getGCD = (a, b) => {
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

const getRound = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();

  const answer = getGCD(num1, num2).toString();
  const question = `${num1} ${num2}`;

  return [question, answer];
};

const greeting = 'Find the greatest common divisor of given numbers.';

const playGameGCD = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getRound());
  }
  runGame(greeting, roundTerms);
};

export default playGameGCD;
