import React from 'react';

function SelectOptions({ categories }) {
  return categories.map((category) => (
    <option value={category.id} key={category.id}>
      {category.title}
    </option>
  ));
}

export default SelectOptions;
