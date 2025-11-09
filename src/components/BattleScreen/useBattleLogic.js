import { useEffect, useState, useRef } from "react";
import generateCards from "./Card/generateCards";
import shuffleCards from "./shuffleCards";

function useBattleLogic(difficulty, theme, setLastSuccessId, handleGameCompletion) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  
  const [isHandFlipping, setIsHandFlipping] = useState(false);
  const ANIMATION_DURATION = 800;

  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const isInitialProgressMount = useRef(true);
  const isInitialClickedMount = useRef(true);

  // runs on mounting; cards generated based on difficulty selected,
  // changes as difficulty increases
  useEffect(() => {
    const newCards = generateCards(difficulty, theme);
    setCards(newCards);
    setMaxProgress(newCards.length);
  }, [difficulty, theme]);

  // starts timer on mount
  useEffect(() => {
    let intervalId = null;

    if(isTimerRunning) {
      intervalId = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    }

    // clean-up function on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTimerRunning]);

  useEffect(() => {
    if (isInitialProgressMount.current) {
      isInitialProgressMount.current = false;
    } else {
      console.log('Progress updated: ', progress);
    }
  }, [progress]);

  useEffect(() => {
    if (isInitialClickedMount.current) {
      isInitialClickedMount.current = false;
    } else {
      console.log('Clicked cards updated: ', clickedCards);
    }
  }, [clickedCards]);

  useEffect(() => {
    if (cards.length === 0 ) return;

    if (clickedCards.size === cards.length) {
      setIsTimerRunning(false);
      handleGameCompletion(timeElapsed);
    }
  }, [clickedCards, cards]);
  
  // game logic, behavior when card is clicked
  const handleCardClick = (cardId) => {
    if (isHandFlipping) return;

    if (!clickedCards.has(cardId)) {
      setProgress(prevProgress => prevProgress + 1); // increment progress
      setClickedCards(prevCards => {
        const newClickedCards = new Set(prevCards);
        newClickedCards.add(cardId);
        return newClickedCards;
      });

      // trigger glow
      setLastSuccessId(cardId);

      // wait for glow to finish
      setTimeout(() => {
        // reset state for glow
        setLastSuccessId(null);
      
        // start flip animation
        setIsHandFlipping(true);
        // start shuffle animation after a delay
        setTimeout(() => {
          setCards(prevCards => shuffleCards([...prevCards]));
          
          // reset flip state a short bit after shuffle
          setTimeout(() => {
            setIsHandFlipping(false);
          }, 10)
        }, ANIMATION_DURATION)
      }, 700);

    } else {
      setProgress(0);
      setClickedCards(new Set());

      setIsHandFlipping(true);

      setTimeout(() => {
        setCards(prevCards => shuffleCards([...prevCards]));
        
        setTimeout(() => {
          setIsHandFlipping(false);
        }, 10);
      }, ANIMATION_DURATION);
    }
  };

  return { progress, maxProgress, cards, handleCardClick, isHandFlipping, timeElapsed};
}

export default useBattleLogic;