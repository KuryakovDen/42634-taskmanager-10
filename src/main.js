import BoardComponent from './components/board.js';
import FilterComponent from './components/filter.js';
import LoadMoreButtonComponent from './components/load-more-button.js';
import SiteMenuComponent from './components/site-menu.js';
import Tasks from './components/tasks.js';
import NoTasks from './components/no-tasks.js';
import {generateTasks} from './mock/task.js';
import {generateFilters} from './mock/filter.js';
import {RenderPosition, render, remove} from './utils.js';
import {renderTask} from './controllers/board.js';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const filters = generateFilters();
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const isAllTasksArchived = tasks.every((task) => task.isArchive);

if (isAllTasksArchived) {
  render(boardComponent.getElement(), new NoTasks(), RenderPosition.BEFOREEND);
} else {
  render(boardComponent.getElement(), new Tasks(), RenderPosition.BEFOREEND);

  const taskListElement = boardComponent.getElement().querySelector(`.board__tasks`);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  tasks.slice(0, showingTasksCount)
    .forEach((task) => {
      renderTask(taskListElement, task);
    });

  const loadMoreButtonComponent = new LoadMoreButtonComponent();
  render(boardComponent.getElement(), loadMoreButtonComponent, RenderPosition.BEFOREEND);

  loadMoreButtonComponent.setClickHandler(() => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(taskListElement, task));

    if (showingTasksCount >= tasks.length) {
      remove(loadMoreButtonComponent);
    }
  });
}
