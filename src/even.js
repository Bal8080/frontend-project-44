import readlineSync from "readline-sync";
import { getRandomNumber } from "./random.js";

const isEven = (num) => num % 2 === 0;

export const brainEven = () => {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isEven(randomNumber) === 0 ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    return [correctAnswer, answer];
  }