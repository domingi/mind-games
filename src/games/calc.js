import { readlineSync, greeting, randomNum, randomSign, checkTheRightAnswer, checkResult } from '../index.js';

const playerName = greeting();

console.log('What is the result of the expression?');

const gameCalc = () => {
  let countRightQuestions = 0;
  let rightAnswer;

  while (countRightQuestions < 3) {
    const expression = [randomNum(), randomSign(), randomNum()];
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

    if (checkTheRightAnswer(rightAnswer, answer)) {
      countRightQuestions += 1;
    } else break;
  }

  checkResult(countRightQuestions, playerName);
};

export default gameCalc;
