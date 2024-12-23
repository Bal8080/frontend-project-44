import readlineSync from 'readline-sync';
import { getName } from './cli.js';
import { Even } from './even.js';
import { Calc } from './calc.js';
import { Gcd } from './gcd.js';
import { Progression } from './progression.js';
import { Prime } from './prime.js';

const countGames = 3;

const Base = (funcBrain) => {
  const name = getName();
  const brainList = {
    Even: 'Answer "yes" if the number is even, otherwise answer "no".',
    Calc: 'What is the result of the expression?',
    Gcd: 'Find the greatest common divisor of given numbers.',
    Progression: 'What number is missing in the progression?',
    Prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };

  console.log(brainList[funcBrain.name]);
  for (let i = 0; i < countGames; i += 1) {
    const [correctAnswer, answerData] = funcBrain();
    console.log(`Question: ${answerData}`);
    const userInput = readlineSync.question('Your answer: ');
    const userInputNumber = Number(userInput);
    const answer = isNaN(userInputNumber) ? userInput : userInputNumber;
    if (correctAnswer === answer) {
      console.log('Correct!');
    }
    if (correctAnswer !== answer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const runCalc = () => {
  Base(Calc);
};

export const runEven = () => {
  Base(Even);
};

export const runGcd = () => {
  Base(Gcd);
};

export const runProgression = () => {
  Base(Progression);
};

export const runPrime = () => {
  Base(Prime);
};
