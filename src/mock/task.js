import {defaultRepeatingDays, taskDescription, tags, colorCard} from '../const.js';
import {generateRandomElement, generateRandomRangeNumber} from '../util.js';

const generateRepeatingDays = () => {
  return Object.assign({}, defaultRepeatingDays, {
    'mo': true
  });
};

const generateRandomDate = () => {
  let taskDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const differenceDate = sign * generateRandomRangeNumber(0, 7);

  taskDate.setDate(taskDate.getDate() + differenceDate);

  return taskDate;
};

const generateTags = (tagsArray) => {
  return tagsArray
  .filter(() => Math.random() > 0.5)
  .slice(0, 3);
};

export const generateTask = () => {
  const dueDate = Math.random > 0.5 ? null : generateRepeatingDays();

  return {
    description: generateRandomElement(taskDescription),
    dueDate: generateRandomDate(),
    defaultRepeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(tags)),
    color: generateRandomElement(colorCard),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

export const generateTasks = (tasksCount) => {
  return new Array(tasksCount).fill(``).map(generateTask);
};
