const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      title: filterName,
      count: Math.floor(Math.random() * 10)
    };
  });
};

export {filterNames, generateFilters};
