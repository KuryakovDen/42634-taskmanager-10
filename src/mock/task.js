import {defaultRepeatingDays, descriptionTasks, tags, cardColors} from '../const.js';
import {generateRandomElement, generateRandomRangeNumber} from '../utils.js';

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

const generateTags = (someTags) => {
  return someTags.filter(() => Math.random() > 0.5).slice(0, 3);
};

const generateTask = () => {
  const dueDate = Math.random > 0.5 ? null : generateRepeatingDays();

  return {
    description: generateRandomElement(descriptionTasks),
    dueDate: generateRandomDate(),
    defaultRepeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(tags)),
    color: generateRandomElement(cardColors),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

const generateTasks = (tasksCount) => {
  return new Array(tasksCount).fill(``).map(generateTask);
};

export {generateTask, generateTasks};
