import createCardImage from './createCardImage.js';
import createCardBody from './createCardBody.js';

/**
 * @param {string} imageSource 
 * @param {string} title 
 */
function createCard(imageSource, title, categoryIds) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = createCardImage(imageSource, title);
  const cardBody = createCardBody(title, categoryIds);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  return card;
}

export default createCard;
