/**
 * @param {string} title 
 */
function createCardBodyTitle(title) {
  const cardBodyTitle = document.createElement('h3');
  cardBodyTitle.classList.add('card-title');
  cardBodyTitle.textContent = title;

  return cardBodyTitle;
}

export default createCardBodyTitle;
