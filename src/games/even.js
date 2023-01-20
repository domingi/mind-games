import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getTerm = () => {
  const question = getRandomNum();
  let answer = 'no';
  if (isEven(question)) answer = 'yes';

  return [question, answer];
};

const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const playGameEven = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getTerm());
  }
  runGame(greeting, roundTerms);
};

export default playGameEven;
