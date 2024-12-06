import { getName } from "../src/cli.js";
import { brainEven} from "./even.js";
import { brainCalc } from "./calc.js";
import { brainGcd } from "./gcd.js";

export const runCalc = () => {
  brainBase(brainCalc);
}

export const runEven = () => {
  brainBase(brainEven);
}

export const runGcd = () => {
  brainBase(brainGcd);
}

const brainBase = (funcBrain) => {
    const name = getName();
    const brainList = {
        brainEven: 'Answer "yes" if the number is even, otherwise answer "no".', brainCalc: 'What is the result of the expression?',
        brainGsd: 'Find the greatest common divisor of given numbers.'
    };

    console.log(brainList[funcBrain.name]);
    
    const countGames = 3;
    let res = true;
    for (let i = 0; i < countGames; i++) {
      const [correctAnswer, answer] = funcBrain();
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