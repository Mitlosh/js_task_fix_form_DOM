'use strict';

const input = document.querySelectorAll('.field-text');

input.forEach((element) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', element.id);
  label.textContent = element.name;

  element.parentNode.prepend(label);

  element.setAttribute(
    'placeholder',
    element.name[0].toUpperCase() + element.name.slice(1),
  );
});
