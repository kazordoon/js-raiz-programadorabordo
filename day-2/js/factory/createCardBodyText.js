/**
 * @param {HTMLAnchorElement[]} categoriesText 
 */
function createCardBodyText(categoriesText) {
  const cardBodyText = document.createElement('p');
  cardBodyText.classList.add('card-text');
  categoriesText.forEach((categoryText) => {
    cardBodyText.appendChild(categoryText);
  });

  return cardBodyText;
}

export default createCardBodyText;
