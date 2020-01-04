import {AbstractComponent} from './abstract.js';

const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

export default class BoardComponent extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}
