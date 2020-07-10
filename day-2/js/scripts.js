import movies from './static/movies.js';
import CardsComponent from './components/CardsComponent.js';
import getSelectedCategories from './utils/getSelectedCategories.js';
import OptionComponent from './components/OptionComponent.js';

const movieForm = document.forms['movie-form'];
const cardsContainer = document.querySelector('#cards_container');
const selectContainer = document.querySelector('#categories');

movieForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const categoryOptions = event.target.categories.options;

  const title = event.target.title.value;
  const imageSource = event.target.imageSource.value;
  const categories = getSelectedCategories(categoryOptions);

  const movie = { title, image: imageSource, categories };
  movies.push(movie);

  cardsContainer.innerHTML = '';
  cardsContainer.appendChild(CardsComponent());
});

cardsContainer.appendChild(CardsComponent());
selectContainer.appendChild(OptionComponent());
