const TIME_FORMAT = 10;

const generateRandomElement = (elements) => {
  let index = Math.floor(Math.random() * elements.length);
  return elements[index];
};

const generateRandomRangeNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

const convertTimeFormat = (value) => {
  return value < TIME_FORMAT ? `0${value}` : String(value);
};

const convertDateFormat = (currentDate) => {
  const date = new Date(currentDate);
  const hours = convertTimeFormat(date.getHours() % 12);
  const minutes = convertTimeFormat(date.getMinutes());

  const interval = date.getHours() > 11 ? `pm` : `am`;

  return `${hours}:${minutes} ${interval}`;
};

const getExpiredStatus = (dueDate) => dueDate instanceof Date && dueDate < Date.now();

export {generateRandomElement, generateRandomRangeNumber, convertTimeFormat, convertDateFormat, getExpiredStatus};
