function generateCards(difficulty) {
  const cards = [];

  for (let i = 0; i < difficulty; i++) {
    cards.push({"id": crypto.randomUUID})
  }

  return cards;
}

export default generateCards;