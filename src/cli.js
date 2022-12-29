import readlineSync from 'readline-sync';

const getName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${getName}`);

export default getName;
