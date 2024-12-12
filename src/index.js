import { getName } from "../src/cli.js";
import { brainEven} from "./even.js";
import { brainCalc } from "./calc.js";
import { brainGcd } from "./gcd.js";
import { brainProgression } from "./progression.js";
import { brainPrime } from "./prime.js";
import readlineSync from "readline-sync";

export const runCalc = () => {
  brainBase(brainCalc);
}

export const runEven = () => {
  brainBase(brainEven);
}

export const runGcd = () => {
  brainBase(brainGcd);
}

export const runProgression = () => {
  brainBase(brainProgression);
}

export const runPrime = () => {
  brainBase(brainPrime);
}

const brainBase = (funcBrain) => {
    const name = getName();
    const brainList = {
        brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
        brainCalc: 'What is the result of the expression?', 
        brainGcd: 'Find the greatest common divisor of given numbers.',
        brainProgression: 'What number is missing in the progression?',
        brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".'
    };

    console.log(brainList[funcBrain.name]);
    
    const countGames = 3;
    let res = true;
    for (let i = 0; i < countGames; i++) {
      const [correctAnswer, answerData] = funcBrain();
      console.log(`Question: ${answerData}`);
      const userInput = readlineSync.question("Your answer: ");
      const userInputNumber = Number(userInput);
      const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
      if (correctAnswer === answer) {
        console.log("Correct!");
      } else {
        res = false;
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
        );
        console.log(`Let's try again, ${name}!`);
        break;
      }
    }

    if (res) {
      console.log(`Congratulations, ${name}!`);
    }
}