import movies from '../static/movies.js';
import CardComponent from './CardComponent.js';

function CardsComponent() {
  const documentFragment = document.createDocumentFragment();
  movies.forEach((movie) => {
    const component = CardComponent(movie);
    documentFragment.appendChild(component);
  });
  return documentFragment;
}

export default CardsComponent;
