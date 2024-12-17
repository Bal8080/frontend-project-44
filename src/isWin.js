import readlineSync from 'readline-sync';

export default (funcBrain) => {
  const countGames = 3;

  for (let i = 0; i < countGames; i += 1) {
    const [correctAnswer, answerData] = funcBrain();
    console.log(`Question: ${answerData}`);
    const userInput = readlineSync.question('Your answer: ');
    const userInputNumber = Number(userInput);
    const answer = isNaN(userInputNumber) ? userInput : userInputNumber;
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      return false;
    }
  }
  return true;
};
