import runGame from '../index.js';
import getRandomNum from '../utils.js';

const checkPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getNumAndCheckPrime = () => {
  const num = getRandomNum();
  if (checkPrime(num)) return [num, 'yes'];
  return [num, 'no'];
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playGamePrime = (rounds = 3) => {
  const answerRight = [];
  for (let i = 0; i < rounds; i += 1) {
    answerRight.push(getNumAndCheckPrime());
  }
  runGame(greeting, answerRight, rounds);
};

export default playGamePrime;
