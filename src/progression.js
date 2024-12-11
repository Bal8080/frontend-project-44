import readlineSync from "readline-sync";
import { getRandomNumber } from "./random.js";

export const brainProgression = () => {
    const firstElem = getRandomNumber(1, 100);
    const lenProgression = 7;
    const diffProgression = getRandomNumber(1, 10);
    const randomElemIndex = Math.floor(Math.random() * lenProgression);

    const progression = [firstElem, ];
    for (let i = 1; i < lenProgression; i += 1) {
        progression.push(progression[i - 1] + diffProgression);
    }

    const correctAnswer = progression[randomElemIndex];
    progression[randomElemIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userInput = readlineSync.question("Your answer: ");
    const userInputNumber = Number(userInput);
    const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
    return [correctAnswer, answer];
}