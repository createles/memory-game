import styles from "./BattleScreen.module.css"
import useBattleLogic from "./useBattleLogic";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

function BattleScreen({difficulty, onReturnToMenu, onCompletion, onGameOver, theme}) {
  const [lastSuccessId, setlastSuccessId] = useState(null);
  const [gameTime, setGameTime] = useState(0);

  // useBattleLogic is called on mount, and passes difficulty
  const { progress, maxProgress, cards, handleCardClick, isHandFlipping } = useBattleLogic(difficulty, onCompletion, onGameOver, theme, setlastSuccessId);

  return (
    <div className={styles['battle-screen']}>
      <button type="button" id={styles["back-button"]} onClick={onReturnToMenu}>go back</button>
      <div className={styles["progress-bar-container"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress-fill"]} style={{width: `${(progress / maxProgress) * 100}%`}}></div>
        </div>
      </div>
      <div className={styles["timer-box"]}>
        <p className={styles["running-time"]}></p>
        <p className={styles["best-time"]}></p>
      </div>
      <div className={styles['card-area-container']}>
        {cards.map((card, index) => (
          <Card 
          key={card.id} 
          id={card.id}
          name={card.name}
          img={card.img} 
          handleCardClick={handleCardClick}
          isFlipping={isHandFlipping}
          index={index}
          theme={theme}
          lastSuccessId={lastSuccessId}
          ></Card>
        ))}
      </div>
      <div className={styles["completion-screen-bg"]}>
        <div className={styles["completion-modal"]}></div>
      </div>
    </div>
  )
}

export default BattleScreen;