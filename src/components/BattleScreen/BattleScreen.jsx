import styles from "./BattleScreen.module.css"
import useBattleLogic from "./useBattleLogic";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import CompletionModal from "./CompletionModal";

function BattleScreen({difficulty, onReturnToMenu, theme, records, updateRecord}) {
  const [lastSuccessId, setlastSuccessId] = useState(null);
  const [finalTime, setFinalTime] = useState(0);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const bestTime = records[difficulty];

  const handleGameCompletion = (time) => {
    updateRecord(difficulty, time);
    setFinalTime(time);
    setShowCompletionModal(true);
  };

  // useBattleLogic is called on mount, and passes difficulty
  const { progress, maxProgress, cards, handleCardClick, isHandFlipping, timeElapsed } = useBattleLogic(difficulty, theme, setlastSuccessId, handleGameCompletion);

  return (
    <div className={styles['battle-screen']}>
      <button type="button" id={styles["back-button"]} onClick={onReturnToMenu}>go back</button>
      <div className={styles["progress-bar-container"]}>
        <div className={styles["progress-bar"]}>
          <div className={styles["progress-fill"]} style={{width: `${(progress / maxProgress) * 100}%`}}></div>
        </div>
      </div>
      <div className={styles["timer-box"]}>
        <p className={styles["running-time"]}>{timeElapsed}</p>
        <p className={styles["best-time"]}>{bestTime}</p>
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
      <div className={`${styles["completion-screen-bg"]} ${showCompletionModal ? styles["show"] : ''}`}>
        <CompletionModal
          time={finalTime}
          record={bestTime}
          onClose={onReturnToMenu}
        />
      </div>
    </div>
  )
}

export default BattleScreen;