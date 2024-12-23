import getRandomNumber from './random.js';

const isPrime = (num) => {
  const temp = Math.sqrt(num);

  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= temp; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const Prime = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [correctAnswer, randomNumber];
};

export default Prime;
