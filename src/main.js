import {TASK_COUNT, createTaskTemplate} from './components/task.js';
import {createFormEditTask} from './components/task-edit.js';
import {createBoardTemplate} from './components/board.js';
import {createFilterTemplate} from './components/filter.js';
import {createLoadButton} from './components/load-button.js';
import {createSiteMenuTemplate} from './components/menu.js';

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
render(getMainElement(), createFilterTemplate());
render(getMainElement(), createBoardTemplate());

const getTaskListElement = () => {
  return document.querySelector(`.board__tasks`);
};

render(getTaskListElement(), createFormEditTask());

new Array(TASK_COUNT).fill(``).forEach(() => render(getTaskListElement(), createTaskTemplate()));

const getBoardElement = () => {
  return getMainElement().querySelector(`.board`);
};

render(getBoardElement(), createLoadButton());
