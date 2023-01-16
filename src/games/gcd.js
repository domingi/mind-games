import gameCore from '../index.js';
import randomNum from '../tools.js';

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

const getGCD = () => {
  const expression = [randomNum(), randomNum()];
  const rightAnswer = getGreatestDivisor(expression[0], expression[1]);
  return [expression.join(' '), rightAnswer.toString()];
};

const rightAnswer = [getGCD(), getGCD(), getGCD()];
const greeting = 'Find the greatest common divisor of given numbers.';

const playGameGCD = () => gameCore(greeting, rightAnswer);

export default playGameGCD;
