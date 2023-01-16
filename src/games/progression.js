import gameCore from '../index.js';
import randomNum from '../tools.js';

const getProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);
  let progression = [];
  let i = randomNum();
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

const rightAnswer = [getProgression(), getProgression(), getProgression()];
const greeting = 'What number is missing in the progression?';

const playGameProgression = () => gameCore(greeting, rightAnswer);

export default playGameProgression;
