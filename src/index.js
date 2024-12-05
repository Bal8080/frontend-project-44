import { getName } from "../src/cli.js";
import readlineSync from "readline-sync";

const brainBase = (funcBrain) => {
    const name = getName();
    const brainList = {
        brainEven: 'Answer "yes" if the number is even, otherwise answer "no".', brainCalc: 'What is the result of the expression?'
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

const brainEven = () => {
  const minRandom = 1;
  const maxRandom = 100;
  const randomNumber = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question("Your answer: ");
  return [correctAnswer, answer];
}

const brainCalc = () => {
  const opList = ['+', '-', '*'];
  const op = opList[Math.floor(Math.random() * 3)];
  const minRandom = 1;
  const maxRandom = 100;
  const randomNumber1 = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
  const randomNumber2 = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
  let correctAnswer;
  if (op === '+') {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (op === '-') {
    correctAnswer = randomNumber1 - randomNumber2;
  } else if (op === '*') {
    correctAnswer = randomNumber1 * randomNumber2;
  }

  console.log(`Question: ${randomNumber1} ${op} ${randomNumber2}`);
  const userInput = readlineSync.question("Your answer: ");
  const userInputNumber = Number(userInput);
  const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
  return [correctAnswer, answer];
}


export { brainBase, brainEven, brainCalc }