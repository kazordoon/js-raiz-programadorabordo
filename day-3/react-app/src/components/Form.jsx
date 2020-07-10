import React, { useState } from 'react';
import SelectOptions from './SelectOptions';

function Form({ categories, addMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    categoryIds: [],
  });

  function handleSubmit(event) {
    event.preventDefault();
    addMovie({
      ...formData,
      categories: formData.categoryIds,
    });
  }

  function handleInputChange(key) {
    return function (event) {
      setFormData({
        ...formData,
        [key]: event.target.value,
      });
    };
  }

  function handleSelectChange(event) {
    const categoryIds = [...event.target.selectedOptions].map(
      (categoryId) => categoryId.value
    );

    setFormData({
      ...formData,
      categoryIds,
    });
  }

  return (
    <form className="movie_form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleInputChange('title')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Link da imagem</label>
        <input
          type="url"
          className="form-control"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleInputChange('image')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="categories">Categoria</label>
        <select
          name="categories"
          className="form-control"
          id="categories"
          value={formData.categoryIds}
          onChange={handleSelectChange}
          multiple
        >
          <SelectOptions categories={categories} />
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
}

export default Form;
