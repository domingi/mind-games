import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const playGameEven = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getRound());
  }
  runGame(greeting, roundTerms);
};

export default playGameEven;
