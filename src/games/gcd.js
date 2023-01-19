import runGame from '../index.js';
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

const getNumsAndGCD = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const gcd = getGCD(num1, num2);
  const nums = [num1, num2];
  return [nums.join(' '), gcd.toString()];
};

const greeting = 'Find the greatest common divisor of given numbers.';

const playGameGCD = (rounds = 3) => {
  const answerRight = [];
  for (let i = 0; i < rounds; i += 1) {
    answerRight.push(getNumsAndGCD());
  }
  runGame(greeting, answerRight, rounds);
};

export default playGameGCD;
