import {createFormEditTask} from './components/task-edit.js';
import {createBoardTemplate} from './components/board.js';
import {createLoadButton} from './components/load-button.js';
import {createSiteMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createTaskTemplate} from './components/task.js';
import {generateTasks} from './mock/task.js';

const TASK_COUNT = 3;

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

const tasks = generateTasks(TASK_COUNT);
console.log(tasks);

//new Array(TASK_COUNT).fill(``).forEach(() => render(getTaskListElement(), createTaskTemplate(task)));

const getBoardElement = () => {
  return getMainElement().querySelector(`.board`);
};

render(getBoardElement(), createLoadButton());
