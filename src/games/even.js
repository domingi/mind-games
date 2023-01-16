import gameCore from '../index.js';
import randomNum from '../tools.js';

const getEvenOrOddNum = () => {
  const number = randomNum();
  if (number % 2 === 0) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

const rightAnswer = [getEvenOrOddNum(), getEvenOrOddNum(), getEvenOrOddNum()];
const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const playGameEven = () => gameCore(greeting, rightAnswer);

export default playGameEven;
