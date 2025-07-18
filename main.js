import { createCard } from './createCard.js';

const input = document.getElementById('inputText');
const button = document.getElementById('submitBtn');
const container = document.getElementById('cardContainer');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === "") return;

  const card = createCard(text);
  container.appendChild(card);
  input.value = "";
});
