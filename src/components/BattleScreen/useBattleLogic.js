import { useEffect, useState } from "react";
import generateCards from "./Card/generateCards";
import shuffleCards from "./shuffleCards";

function useBattleLogic(difficulty, onCompletion, onGameOver) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  
  const [isHandFlipping, setIsHandFlipping] = useState(false);
  const ANIMATION_DURATION = 800;

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

    if (cards.length === 0 ) return;

    if (clickedCards.size === cards.length) {
      onCompletion();
    }
  }, [clickedCards, cards, onCompletion]);
  
  // game logic, behavior when card is clicked
  const handleCardClick = (cardId) => {
    if (isHandFlipping) return;

    if (!clickedCards.has(cardId)) {
      setScore(prevScore => prevScore + 1); // increment score
      setClickedCards(prevCards => {
        const newClickedCards = new Set(prevCards);
        newClickedCards.add(cardId);
        return newClickedCards;
      });

    } else {
      setScore(0);
      setClickedCards(new Set());
    }

    setIsHandFlipping(true);
    
    setTimeout(() => {
      setCards(prevCards => shuffleCards([...prevCards]));

      setTimeout(() => {
        setIsHandFlipping(false);
      }, 10);
    }, ANIMATION_DURATION);
  };

  return { score, highScore, cards, handleCardClick, isHandFlipping};
}

export default useBattleLogic;