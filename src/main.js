import {createFormEditTask, tasks} from './components/task-edit.js';
import {createBoardTemplate} from './components/board.js';
import {createLoadButton} from './components/load-button.js';
import {createSiteMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
import {generateFilters} from './mock/filter.js';


const START_SHOWING_TASKS = 8;
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

tasks.slice(0, START_SHOWING_TASKS).forEach((el, i) => {
  return i > 0 ? render(getTaskListElement(), createTaskTemplate(tasks[i])) : render(getTaskListElement(), createFormEditTask(tasks.slice(0, 1)));
});

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

  tasks.slice(START_SHOWING_TASKS /* - 1*/, currentTasks).forEach((el, i) => render(getTaskListElement(), createTaskTemplate(tasks[i])));

  if (currentTasks >= tasks.length) {
    getLoadMoreButton().classList.add(`visually-hidden`);
  }
});
