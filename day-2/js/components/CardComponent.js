import createCard from '../factory/createCard.js';

/**
 * @param {{title: string, image: string, categories: string[]}} props
 */
function CardComponent(props) {
  let { title, image, categories: categoryIds } = props;

  const documentFragment = document.createDocumentFragment();
  const card = createCard(image, title, categoryIds);
  documentFragment.appendChild(card);

  return documentFragment;
}

export default CardComponent;
