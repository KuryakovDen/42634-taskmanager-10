import {createFormEditTask, tasks} from './components/task-edit.js';
import {createBoardTemplate} from './components/board.js';
import {createLoadButton} from './components/load-button.js';
import {createSiteMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
import {generateFilters} from './mock/filter.js';

const START_SHOWING_TASKS = 8;
const BUTTON_SHOWING_TASKS = 8;

const mainElement = document.querySelector(`.main`);

const headerElement = mainElement.querySelector(`.main__control`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(headerElement, createSiteMenuTemplate());

const filters = generateFilters();
render(mainElement, createFilterTemplate(filters));

render(mainElement, createBoardTemplate());

const taskListElement = document.querySelector(`.board__tasks`);

tasks.slice(0, START_SHOWING_TASKS).forEach((el, i) => {
  return i > 0 ? render(taskListElement, createTaskTemplate(tasks[i])) : render(taskListElement, createFormEditTask(tasks.slice(0, 1)));
});

const boardElement = mainElement.querySelector(`.board`);

const getLoadMoreButton = () => {
  return boardElement.querySelector(`.load-more`);
};

render(boardElement, createLoadButton());

getLoadMoreButton().addEventListener(`click`, () => {
  let currentTasks = START_SHOWING_TASKS + BUTTON_SHOWING_TASKS;

  tasks.slice(START_SHOWING_TASKS, currentTasks).forEach((el, i) => render(taskListElement, createTaskTemplate(tasks[i])));

  if (currentTasks >= tasks.length) {
    getLoadMoreButton().classList.add(`visually-hidden`);
  }
});
