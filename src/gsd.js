import readlineSync from "readline-sync";

export const brainGsd = () => {
    const minRandom = 1;
    const maxRandom = 100;
    let randomNumber1 = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
    let randomNumber2 = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom + 1;
    let num1 = randomNumber1;
    let num2 = randomNumber2;


    while (num1 && num2) {
        num1 > num2 ? num1 %= num2 : num2 %= num1;
    }

    const correctAnswer = num1 + num2;

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userInput = readlineSync.question("Your answer: ");
    const userInputNumber = Number(userInput);
    const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
    return [correctAnswer, answer];
}