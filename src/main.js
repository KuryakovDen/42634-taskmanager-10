import {createFormEditTask} from './components/task-edit.js';
import {createBoardTemplate} from './components/board.js';
import {createLoadButton} from './components/load-button.js';
import {createSiteMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';

const TASK_COUNT = 17;
const START_SHOWING_TASKS = 9;
const BUTTON_SHOWING_TASKS = 8;

const getMainElement = () => {
  return document.querySelector(`.main`);
};

const getHeaderElement = () => {
  return getMainElement().querySelector(`.main__control`);
};

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(getHeaderElement(), createSiteMenuTemplate());

const filters = generateFilters();
render(getMainElement(), createFilterTemplate(filters));

render(getMainElement(), createBoardTemplate());

const getTaskListElement = () => {
  return document.querySelector(`.board__tasks`);
};

render(getTaskListElement(), createFormEditTask());

const tasks = generateTasks(TASK_COUNT);

// new Array(TASK_COUNT).fill(``).forEach(() => render(getTaskListElement(), createTaskTemplate(task)));

tasks.slice(0, START_SHOWING_TASKS).forEach((el, i) => render(getTaskListElement(), createTaskTemplate(tasks[i])));

const getBoardElement = () => {
  return getMainElement().querySelector(`.board`);
};

render(getBoardElement(), createLoadButton());

const getLoadMoreButton = () => {
  return getBoardElement().querySelector(`.load-more`);
};

getLoadMoreButton().addEventListener(`click`, () => {
  let currentTasks = START_SHOWING_TASKS;
  currentTasks = START_SHOWING_TASKS + BUTTON_SHOWING_TASKS;

  tasks.slice(START_SHOWING_TASKS - 1, currentTasks).forEach((el, i) => render(getTaskListElement(), createTaskTemplate(tasks[i])));

  if (currentTasks >= tasks.length) {
    getLoadMoreButton().classList.add(`visually-hidden`);
  };
});
