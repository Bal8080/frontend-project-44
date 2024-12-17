import { getRandomNumber } from './random.js';

const getTextQuestion = (randomNumber1, randomNumber2, operation) => `${randomNumber1} ${operation} ${randomNumber2}`;

export const Calc = () => {
  const operationsList = ['+', '-', '*'];
  const operation =
    operationsList[Math.floor(Math.random() * operationsList.length)];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  if (operation === '+') {
    return [
      randomNumber1 + randomNumber2,
      getTextQuestion(randomNumber1, randomNumber2, operation),
    ];
  }
  if (operation === '-') {
    return [
      randomNumber1 - randomNumber2,
      getTextQuestion(randomNumber1, randomNumber2, operation),
    ];
  }
  if (operation === '*') {
    return [
      randomNumber1 * randomNumber2,
      getTextQuestion(randomNumber1, randomNumber2, operation),
    ];
  }
};
