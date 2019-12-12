export const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

export const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      title: filterName,
      count: Math.floor(Math.random() * 10)
    };
  });
};
