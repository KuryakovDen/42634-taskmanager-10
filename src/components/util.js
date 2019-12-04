export const generateRandomElement = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

export const generateRandomRangeNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};
