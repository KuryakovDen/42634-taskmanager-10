export const colorCard = [`black`, `yellow`, `pink`, `blue`, `green`];


export const generateRandomElement = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};
