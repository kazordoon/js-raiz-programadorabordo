import React from 'react';

import Card from './Card';

function Cards({ movies }) {
  return movies.map(({ title, image, categories }, movieIndex) => {
    console.log(title, image, categories);
    return (
      <Card
        title={title}
        image={image}
        categoryIds={categories}
        key={movieIndex}
      />
    );
  });
}

export default Cards;
