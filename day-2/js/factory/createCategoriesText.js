import getCategoryById from '../utils/getCategoryById.js';

/**
 * @param {{id: string, title: string}[]} categoryIds
 */
function createCategoriesText(categoryIds) {
  const categoriesText = categoryIds.map((categoryId) => {
    const categoryElement = document.createElement('a');
    categoryElement.classList.add('badge', 'badge-secondary', 'mr-1');
    categoryElement.setAttribute('href', '#');
    categoryElement.textContent = getCategoryById(categoryId).title;

    return categoryElement;
  });

  return categoriesText;
}

export default createCategoriesText;
