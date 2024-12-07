import readlineSync from "readline-sync";

export const brainPrime = () => {
    const minRandom = 1;
    const maxRandom = 100;
    const randomNumber = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
    const halfRandomNumber = randomNumber / 2;
    let prime = true;

    for (let i = 2; i < halfRandomNumber; i += 1) {
        if (randomNumber % i === 0) {
            prime = false;
            break;
        }
    }

    const correctAnswer = prime ? "yes" : "no";
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    return [correctAnswer, answer];
}