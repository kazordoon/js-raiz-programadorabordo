import React, { useState } from 'react';
import Form from './components/Form.jsx';
import Cards from './components/Cards.jsx';

function App({ movies, categories }) {
  const [moviesList, setMoviesList] = useState(movies);

  function addMovie(movie) {
    setMoviesList([
      ...moviesList,
      movie,
    ]);
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-3">
        <h2>Cadastro de filme</h2>
        <Form categories={categories} addMovie={addMovie} />
      </div>
      <div className="col-sm-12 col-md-9">
        <div id="cards_container" className="card-columns">
          <Cards movies={moviesList} />
        </div>
      </div>
    </div>
  );
}

export default App;
