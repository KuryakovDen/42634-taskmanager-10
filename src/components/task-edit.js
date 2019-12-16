import {convertTimeFormat, getExpiredStatus} from '../utils.js';
import {monthDays, cardColors} from '../const.js';
import {generateTasks} from '../mock/task.js';

const TASK_COUNT = 10;
const tasks = generateTasks(TASK_COUNT);

const editTask = tasks.slice(0, 1);

const createColorMarkup = (colors, currentColor) => {
  return colors.map((color) => {
    return (
      `<input type="radio"
        id="color-${color}-4"
        class="card__color-input card__color-input--${color} visually-hidden"
        name="color"
        value="${color}"
        ${currentColor === color ? `checked` : ``}
      />
      <label for="color-${color}-4"
        class="card__color card__color--${color}">
        ${color}
      </label>`
    );
  }).join(`\n`);
};

const createHashtagsMarkup = (hashtags) => {
  hashtags = editTask[0].tags;

  return Array.from(hashtags).map((tag) => {
    return (
      `<span class="card__hashtag-inner">
        <input type="hidden"
          name="hashtag"
          value="${tag}"
          class="card__hashtag-hidden-input"
        />
        <p class="card__hashtag-name">
          #${tag}
        </p>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`
    );
  }).join(`\n`);
};

const createFormEditTask = (task) => {
  const {tags, dueDate, color} = task;

  const description = editTask[0].description;

  const deadlineClass = getExpiredStatus() ? `card--deadline` : ``;

  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${monthDays[dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? convertTimeFormat(dueDate) : ``;

  const tagsMarkup = createHashtagsMarkup(tags);
  const colorsMarkup = createColorMarkup(cardColors, color);

  return (
    `<article class="card card--edit card--${color} ${deadlineClass}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea class="card__text" placeholder="Start typing your text here..." name="text">${description}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: &nbsp; <span class="card__date-status">${isDateShowing ? `yes` : `no`}</span>
                </button>

                ${isDateShowing ? `
                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input class="card__date" type="text" placeholder="" name="date" value="${date} ${time}" />
                  </label>
                </fieldset>` : ``}

                <button class="card__repeat-toggle" type="button">
                  repeat: &nbsp; <span class="card__repeat-status">no</span>
                </button>

              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${tagsMarkup}
                </div>

                <label>
                  <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here" />
                </label>
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorsMarkup}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};

export {tasks, createFormEditTask};
