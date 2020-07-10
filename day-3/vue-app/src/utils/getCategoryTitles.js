import getCategoryById from './getCategoryById';

/**
 * @param {{id: string, title: string}[]} categories 
 */
function getCategoryTitles(categories) {
  const categoryTitles = categories.map(
    (categoryId) => getCategoryById(categoryId).title
  )
  return categoryTitles
}

export default getCategoryTitles
