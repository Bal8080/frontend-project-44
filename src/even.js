import { getRandomNumber } from './random.js';

const isEven = (num) => {
  return num % 2 === 0;
};

export const Even = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};
