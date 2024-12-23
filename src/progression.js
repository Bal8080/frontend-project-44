import getRandomNumber from './random.js';

const lenProgression = 7;

const Progression = () => {
  const firstElem = getRandomNumber(1, 100);
  const diffProgression = getRandomNumber(1, 10);
  const randomElemIndex = Math.floor(Math.random() * lenProgression);

  const progression = [firstElem];
  for (let i = 1; i < lenProgression; i += 1) {
    progression.push(progression[i - 1] + diffProgression);
  }

  const correctAnswer = progression[randomElemIndex];
  progression[randomElemIndex] = '..';

  return [correctAnswer, `${progression.join(' ')}`];
};

export default Progression;
