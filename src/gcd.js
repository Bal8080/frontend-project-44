import getRandomNumber from './random.js';

const getGcd = (num1, num2) => ((num2 === 0) ? num1 : getGcd(num2, num1 % num2));

const Gcd = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const correctAnswer = getGcd(randomNumber1, randomNumber2);

  return [correctAnswer, `${randomNumber1} ${randomNumber2}`];
};

export default Gcd;
