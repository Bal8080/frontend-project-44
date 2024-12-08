import readlineSync from "readline-sync";

export const brainProgression = () => {
    const minRandomElem = 1;
    const maxRandomElem = 100;
    const firstElem = Math.floor(Math.random() * (maxRandomElem - minRandomElem + 1)) + minRandomElem;
    const lenProgression = 7;
    const minRandomDiff = 1;
    const maxRandomDiff = 10;
    const diffProgression = Math.floor(Math.random() * (maxRandomDiff - minRandomDiff + 1)) + minRandomDiff;
    const randomElemIndex = Math.floor(Math.random() * lenProgression);

    const progression = [firstElem, ];
    for (let i = 1; i < lenProgression; i += 1) {
        progression.push(progression[i - 1] + diffProgression);
    }

    const correctAnswer = progression[randomElemIndex];
    progression[randomElemIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userInput = readlineSync.question("Your answer: ");
    const userInputNumber = Number(userInput);
    const answer = (isNaN(userInputNumber)) ? userInput : userInputNumber
    return [correctAnswer, answer];
}