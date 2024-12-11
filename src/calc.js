import readlineSync from "readline-sync";
import { getRandomNumber } from "./random.js";

export const brainCalc = () => {
    const operationsList = ['+', '-', '*'];
    const operation = operationsList[Math.floor(Math.random() * operationsList.length)];
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    
    let correctAnswer;
    if (operation === '+') {
      correctAnswer = randomNumber1 + randomNumber2;
    } else if (operation === '-') {
      correctAnswer = randomNumber1 - randomNumber2;
    } else if (operation === '*') {
      correctAnswer = randomNumber1 * randomNumber2;
    }
  
    console.log(`Question: ${randomNumber1} ${operation} ${randomNumber2}`);
    const userInput = readlineSync.question("Your answer: ");
    const userInputNumber = Number(userInput);
    const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
    return [correctAnswer, answer];
}