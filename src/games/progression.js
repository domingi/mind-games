import { runGame, rounds } from '../index.js';
import getRandomNum from '../utils.js';

const getProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);
  const progression = [];
  let progressionUnit = getRandomNum();
  for (let i = 0; i < 10; i += 1) {
    progression.push(progressionUnit);
    progressionUnit += step;
  }
  return progression;
};

const getTerm = () => {
  const question = getProgression();
  const hiddenPosition = Math.floor(Math.random() * 9);
  const answer = question[hiddenPosition].toString();
  question[hiddenPosition] = '..';
  return [question.join(' '), answer];
};

const greeting = 'What number is missing in the progression?';

const playGameProgression = () => {
  const roundTerms = [];
  for (let i = 0; i < rounds; i += 1) {
    roundTerms.push(getTerm());
  }
  runGame(greeting, roundTerms);
};

export default playGameProgression;
