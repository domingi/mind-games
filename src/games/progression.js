import runGame from '../index.js';
import getRandomNum from '../utils.js';

const getProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);
  let progression = [];
  let i = getRandomNum();
  while (progression.length < 10) {
    progression.push(i);
    i += step;
  }

  const hiddenPosition = Math.floor(Math.random() * 9);
  const rightAnswer = progression[hiddenPosition].toString();

  progression[hiddenPosition] = '..';
  progression = [progression.join(' '), rightAnswer];
  return progression;
};

const greeting = 'What number is missing in the progression?';

const playGameProgression = (rounds = 3) => {
  const answerRight = [];
  for (let i = 0; i < rounds; i += 1) {
    answerRight.push(getProgression());
  }
  runGame(greeting, answerRight, rounds);
};

export default playGameProgression;
