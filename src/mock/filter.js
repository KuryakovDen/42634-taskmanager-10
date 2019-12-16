const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];
const MAX_RANDOM_COUNT_FILTERS = 10;

const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      title: filterName,
      count: Math.floor(Math.random() * MAX_RANDOM_COUNT_FILTERS)
    };
  });
};

export {filterNames, generateFilters};
