import getRandomNumber from './random.js';

const isEven = (num) => num % 2 === 0;

const Even = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};

export default Even;
