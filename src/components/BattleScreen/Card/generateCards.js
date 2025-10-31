function generateCards(difficulty) {
  const cards = [];
  let deckSize;

  switch (difficulty) {
    case "easy":
      deckSize = 6;
      break;
    case "medium":
      deckSize = 10;
      break;
    case "hard":
      deckSize = 12;
      break;
    default:
      deckSize = 6;
  }

  for (let i = 0; i < deckSize; i++) {
    cards.push({"id": crypto.randomUUID()})
  }

  return cards;
}

export default generateCards;