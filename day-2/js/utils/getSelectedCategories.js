/**
 * @param {HTMLOptionsCollection} categoryOptions 
 */
function getSelectedCategories(categoryOptions) {
  const categories = Array.from(categoryOptions)
    .filter((option) => option.selected)
    .map((option) => option.value);

  return categories;
}

export default getSelectedCategories;
