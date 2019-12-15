const createFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;

  return (
    `<input
        type="radio"
        id="filter__${title}"
        class="filter__input visually-hidden"
        title="filter"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${title}" class="filter__label">
        ${title} <span class="filter__${title}-count">${count}</span>
      </label>`
  );
};

const createFilterTemplate = (filters) => {
  const getFiltersMarkup = filters.map((it) => createFilterMarkup(it)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${getFiltersMarkup}
    </section>`
  );
};

export {createFilterTemplate};
