export default function form() {
  const form = document.createElement('form');
  form.classList.add('form');

  const text = document.createElement('input');
  text.classList.add('text-input', 'btm-bdr');
  text.type = 'text';
  text.placeholder = 'Add to your list...';

  form.appendChild(text);

  return form;
}