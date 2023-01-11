import { readlineSync, greeting, randomNum, checkResult } from '../index.js';

const playerName = greeting();

console.log('What number is missing in the progression?');

const gameProgression = () => {
  let countRightQuestions = 0;

  while (countRightQuestions < 3) {
    const step = Math.floor(Math.random() * 10 + 1);
    let progression = [];
    let i = randomNum();
    while (progression.length < 10) {
      progression.push(i);
      i += step;
    }

    const hiddenPosition = Math.floor(Math.random() * 9 + 2);
    const rightAnswer = progression[hiddenPosition].toString();

    progression[hiddenPosition] = '..';
    progression = progression.join(' ');

    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer ');

    if (answer === rightAnswer) {
      countRightQuestions += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      break;
    }
  }
  checkResult(countRightQuestions, playerName);
};

export default gameProgression;
