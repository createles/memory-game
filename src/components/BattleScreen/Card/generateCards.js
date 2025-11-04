import { allCards } from "./cardData";
import shuffleCards from "../shuffleCards";

function generateCards(difficulty) {
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

  const shuffledDeck = shuffleCards([...allCards]);
  const newCards = shuffledDeck.slice(0, deckSize);

  return newCards;
}

export default generateCards;