const getRandomNumber = (minRandom, maxRandom) =>
  Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;

export { getRandomNumber };
