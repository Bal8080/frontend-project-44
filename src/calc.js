import readlineSync from "readline-sync";

export const brainCalc = () => {
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