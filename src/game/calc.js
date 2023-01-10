import { readlineSync, greeting, randomNum, randomSign, checkResult } from '../index.js';

const playerName = greeting();

console.log('What is the result of the expression?');

const gameCalc = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const expression = [randomNum(), randomSign(), randomNum()];
    // eslint-disable-next-line default-case
    switch (expression[1]) {
      case '+':
        rightAnswer = expression[0] + expression[2];
        break;
      case '-':
        rightAnswer = expression[0] - expression[2];
        break;
      case '*':
        rightAnswer = expression[0] * expression[2];
        break;
    }
    rightAnswer = rightAnswer.toString();

    console.log(`Question: ${expression[0]} ${expression[1]} ${expression[2]} `);
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

export default gameCalc;
