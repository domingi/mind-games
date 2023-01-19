import runGame from '../index.js';
import getRandomNum from '../utils.js';

const getRandomSign = () => {
  const sign = Math.floor(Math.random() * 3);
  if (sign === 0) return '+';
  if (sign === 1) return '-';
  return '*';
};

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const getExpressionAndResult = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const sign = getRandomSign();

  const result = calculate(num1, num2, sign);
  const expression = [num1, sign, num2];

  return [expression.join(' '), result.toString()];
};

const greeting = 'What is the result of the expression?';

const playGameCalc = (rounds = 3) => {
  const answerRight = [];
  for (let i = 0; i < rounds; i += 1) {
    answerRight.push(getExpressionAndResult());
  }
  runGame(greeting, answerRight, rounds);
};
export default playGameCalc;
