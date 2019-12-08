import {generateRandomElement, generateRandomRangeNumber} from './util.js';

export const TASK_COUNT = 3;

const taskDescription = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const tags = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const colorCard = [`black`, `yellow`, `pink`, `blue`, `green`];

const monthDays = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const defaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false
};

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

const generateTags = (tagsArray) => {
  return tagsArray
  .filter(() => Math.random() > 0.5)
  .slice(0, 3);
};

const generateTask = () => {
  const dueDate = Math.random > 0.5 ? null : generateRepeatingDays();

  return {
    description: generateRandomElement(taskDescription),
    dueDate: generateRandomDate(),
    defaultRepeatingDays: dueDate ? defaultRepeatingDays : generateRepeatingDays(),
    tags: new Set(generateTags(tags)),
    color: generateRandomElement(colorCard),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

console.log(generateTask());

export const createTaskTemplate = () => {
  return (
    `<article class="card card--black">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">Example default task with default color.</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">23 September</span>
                    <span class="card__time">11:15 PM</span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  <span class="card__hashtag-inner">
                        <span class="card__hashtag-name">
                          #todo
                        </span>
                  </span>

                  <span class="card__hashtag-inner">
                        <span class="card__hashtag-name">
                          #personal
                        </span>
                  </span>

                  <span class="card__hashtag-inner">
                        <span class="card__hashtag-name">
                          #important
                        </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};
