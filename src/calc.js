import { getRandomNumber } from "./random.js";

export const brainCalc = () => {
  const operationsList = ["+", "-", "*"];
  const operation =
    operationsList[Math.floor(Math.random() * operationsList.length)];
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  if (operation === "+") {
    return [
      randomNumber1 + randomNumber2,
      `${randomNumber1} ${operation} ${randomNumber2}`,
    ];
  }
  if (operation === "-") {
    return [
      randomNumber1 - randomNumber2,
      `${randomNumber1} ${operation} ${randomNumber2}`,
    ];
  }
  if (operation === "*") {
    return [
      randomNumber1 * randomNumber2,
      `${randomNumber1} ${operation} ${randomNumber2}`,
    ];
  }
};
