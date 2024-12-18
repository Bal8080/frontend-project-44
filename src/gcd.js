import { getRandomNumber } from './random.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) return num1;
  return getGcd(num2, num1 % num2);
};

export const Gcd = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const correctAnswer = getGcd(randomNumber1, randomNumber2);

  return [correctAnswer, `${randomNumber1} ${randomNumber2}`];
};
