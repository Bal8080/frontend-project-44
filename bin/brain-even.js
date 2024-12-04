#!/usr/bin/env node

import { getName } from "../src/cli.js";
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let res = true;
for (let i = 0; i < 3; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question("Your answer: ");
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
