import { getName } from '../src/cli.js';
import { Even } from './even.js';
import { Calc } from './calc.js';
import { Gcd } from './gcd.js';
import { Progression } from './progression.js';
import { Prime } from './prime.js';
import isWin from './isWin.js';

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
  const res = isWin(funcBrain);

  if (res) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
