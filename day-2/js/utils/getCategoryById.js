import categories from '../static/categories.js';

/**
 * @param {string} categoryId 
 */
function getCategoryById(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

export default getCategoryById;