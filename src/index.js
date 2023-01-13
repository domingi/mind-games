import readlineSync from 'readline-sync';

// Приветствие
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);
  return playerName;
};

// Генерация случайного числа
const randomNum = () => Math.round(Math.random() * 100 + 1);

// Генерация случайного знака
const randomSign = () => {
  const sign = Math.floor(Math.random() * 3);
  if (sign === 0) return '+';
  if (sign === 1) return '-';
  return '*';
};

// Проверка правильного ответа в игре
const checkTheRightAnswer = (rightAnswer, answer) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

// Проверка результата игры
const checkResult = (count, name) => {
  // eslint-disable-next-line no-unused-expressions
  count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

export {
  readlineSync,
  greeting,
  randomNum,
  randomSign,
  checkTheRightAnswer,
  checkResult,
};
