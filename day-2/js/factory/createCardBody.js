import createCategoriesText from '../factory/createCategoriesText.js';
import createCardBodyTitle from '../factory/createCardBodyTitle.js';
import createCardBodyText from '../factory/createCardBodyText.js';

/**
 * @param {string} title 
 * @param {HTMLAnchorElement[]} categoryIds 
 */
function createCardBody(title, categoryIds) {
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardBodyTitle = createCardBodyTitle(title);
  const categoriesText = createCategoriesText(categoryIds);
  const cardBodyText = createCardBodyText(categoriesText);

  cardBody.appendChild(cardBodyTitle);
  cardBody.appendChild(cardBodyText);

  return cardBody;
}

export default createCardBody;
