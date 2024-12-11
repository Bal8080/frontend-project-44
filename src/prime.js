import readlineSync from "readline-sync";
import { getRandomNumber } from "./random.js";

const isPrime = (num) => {
    const temp = Math.sqrt(num);
    
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= temp; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

export const brainPrime = () => {
    const randomNumber = getRandomNumber(1, 100);
    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    return [correctAnswer, answer];
}