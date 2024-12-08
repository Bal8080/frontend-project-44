import readlineSync from "readline-sync";

export const brainPrime = () => {
    const minRandom = 1;
    const maxRandom = 100;
    const randomNumber = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
    const temp = Math.sqrt(randomNumber);
    let prime = true;

    if (randomNumber === 1) {
        prime = false;
    } else {
        for (let i = 2; i <= temp; i += 1) {
            if (randomNumber % i === 0) {
                prime = false;
                break;
            }
        }
    }

    const correctAnswer = prime ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    return [correctAnswer, answer];
}