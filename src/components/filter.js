const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<input
        type="radio"
        id="filter__${name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${name}" class="filter__label">
        ${name} <span class="filter__${name}-count">${count}</span>
      </label>`
  );
};

export const createFilterTemplate = (filtersArray) => {
  filtersArray = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];
  const filtersMarkup = filtersArray.map((it, i) => {
    createFilterMarkup(it, i === 0);
  });

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};
