import readlineSync from "readline-sync";
import { getRandomNumber } from "./random.js";

const getGcd = (num1, num2) => {
    while (num1 && num2) {
        num1 > num2 ? num1 %= num2 : num2 %= num1;
    }
    return num1 + num2;
}

export const brainGcd = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    
    const correctAnswer = getGcd(randomNumber1, randomNumber2);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userInput = readlineSync.question("Your answer: ");
    const userInputNumber = Number(userInput);
    const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
    return [correctAnswer, answer];
}