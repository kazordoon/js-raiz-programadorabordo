import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import movies from './static/movies';
import categories from './static/categories';

ReactDOM.render(
  <React.StrictMode>
    <App movies={movies} categories={categories} />
  </React.StrictMode>,
  document.getElementById('root')
);
