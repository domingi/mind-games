import runGame from '../index.js';
import getRandomNum from '../utils.js';

const checkEven = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

const getNumAndCheckEven = () => {
  const number = getRandomNum();
  if (checkEven(number)) return [number, 'yes'];
  return [number, 'no'];
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const playGameEven = (rounds = 3) => {
  const answerRight = [];
  for (let i = 0; i < rounds; i += 1) {
    answerRight.push(getNumAndCheckEven());
  }
  runGame(greeting, answerRight, rounds);
};

export default playGameEven;
