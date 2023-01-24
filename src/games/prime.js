import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playGamePrime = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getRound());
  }
  runGame(greeting, roundTerms);
};

export default playGamePrime;
