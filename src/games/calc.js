import gameCore from '../index.js';
import randomNum from '../tools.js';

const randomSign = () => {
  const sign = Math.floor(Math.random() * 3);
  if (sign === 0) return '+';
  if (sign === 1) return '-';
  return '*';
};

const getExpressionAndResult = () => {
  let answer;
  const expression = [randomNum(), randomSign(), randomNum()];
  switch (expression[1]) {
    case '+':
      answer = expression[0] + expression[2];
      break;
    case '-':
      answer = expression[0] - expression[2];
      break;
    case '*':
      answer = expression[0] * expression[2];
      break;
    default:
      answer = 0;
  }
  return [expression.join(' '), answer.toString()];
};

const rightAnswer = [getExpressionAndResult(), getExpressionAndResult(), getExpressionAndResult()];
const greeting = 'What is the result of the expression?';

const playGameCalc = () => gameCore(greeting, rightAnswer);

export default playGameCalc;
