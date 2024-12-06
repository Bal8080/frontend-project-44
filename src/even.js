import readlineSync from "readline-sync";

export const brainEven = () => {
    const minRandom = 1;
    const maxRandom = 100;
    const randomNumber = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    return [correctAnswer, answer];
  }