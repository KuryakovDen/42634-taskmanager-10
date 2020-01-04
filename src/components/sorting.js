import {AbstractComponent} from './abstract.js';
import {SortType} from '../const.js';

export const createSortingTemplate = () => {
  return (
    `<div class="board__filter-list">
      <a href="#" class="board__filter">${SortType.DEFAULT.toUpperCase()}</a>
      <a href="#" class="board__filter">SORT BY DATE ${SortType.DATE_UP}</a>
      <a href="#" class="board__filter">SORT BY DATE ${SortType.DATE_DOWN}</a>
    </div>`);
};

export default class Sort extends AbstractComponent {
  constructor() {
    super();

    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortingTemplate();
  }
}
