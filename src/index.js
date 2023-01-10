// Приветствие
import readlineSync from 'readline-sync';

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
  if (sign === 2) return '*';
};

// Проверка результата игры
const checkResult = (count, name) => {
  count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
};

export { readlineSync, greeting, randomNum, randomSign, checkResult };
