import React from 'react';

import getCategoryById from '../utils/getCategoryById';

function Card({ title, image, categoryIds }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {categoryIds.map((categoryId, categoryIndex) => (
            <span className="badge badge-secondary mr-1" key={categoryIndex}>
              {getCategoryById(categoryId).title}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
