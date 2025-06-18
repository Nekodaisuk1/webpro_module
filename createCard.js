export function createCard(content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = content;
    return card;
  }
  