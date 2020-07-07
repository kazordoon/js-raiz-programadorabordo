/**
 * @param {string} value 
 * @param {string} content 
 */
function createSelectOption(value, content) {
  const option = document.createElement('option');
  option.setAttribute('value', value);
  option.textContent = content;

  return option;
}

export default createSelectOption;
