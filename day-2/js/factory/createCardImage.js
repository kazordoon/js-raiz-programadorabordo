/**
 * @param {string} imageSource 
 */
function createCardImage(imageSource, altText) {
  const cardImage = document.createElement('img');
  cardImage.classList.add('card-img-top');
  cardImage.setAttribute('src', imageSource);
  cardImage.setAttribute('alt', altText);

  return cardImage;
}

export default createCardImage;
