import categories from '../static/categories.js';
import createSelectOption from '../factory/createSelectOption.js';

function OptionComponent() {
  const documentFragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const categoryOptions = createSelectOption(category.id, category.title);
    documentFragment.appendChild(categoryOptions);
  });

  return documentFragment;
}

export default OptionComponent;
