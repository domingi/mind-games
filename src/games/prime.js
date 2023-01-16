import gameCore from '../index.js';
import randomNum from '../tools.js';

const getPrimeOrNotPrimeNum = () => {
  const number = randomNum();
  if (number < 2) return [number, 'no'];
  if (number === 2) return [number, 'yes'];
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return [number, 'no'];
  }
  return [number, 'yes'];
};

const rightAnswer = [getPrimeOrNotPrimeNum(), getPrimeOrNotPrimeNum(), getPrimeOrNotPrimeNum()];
const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playGamePrime = () => gameCore(greeting, rightAnswer);

export default playGamePrime;
