import { useEffect, useState } from "react";
import generateCards from "./Card/generateCards";

function useBattleLogic(difficulty) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // runs on mounting; cards generated based on difficulty selected,
  // changes as difficulty increases
  useEffect(() => {
    const newCards = generateCards(difficulty);
    setCards(newCards);
  }, [difficulty]);

  useEffect(() => {
    console.log('Score updated: ', score);
  }, [score]);

  useEffect(() => {
    console.log('Clicked cards updated: ', clickedCards);
  }, [clickedCards]);
  
  // game logic, behavior when card is clicked
  const handleCardClick = (cardId) => {
    if (!clickedCards.has(cardId)) {
      setClickedCards(prevCards => {
        const newClickedCards = new Set(prevCards);
        newClickedCards.add(cardId);
        return newClickedCards;
      });

      setScore(prevScore => prevScore + 1);

    } else {
      setScore(0);
      setClickedCards(new Set());
    }
  }

  return { score, highScore, cards, handleCardClick};
}

export default useBattleLogic;