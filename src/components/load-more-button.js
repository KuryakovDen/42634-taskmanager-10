import {createElement} from '../utils.js';

const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(createLoadMoreButtonTemplate());
    }
  }

  removeElement() {
    this._element = null;
  }
}
