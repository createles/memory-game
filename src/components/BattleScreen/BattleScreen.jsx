import styles from "./BattleScreen.module.css"
import useBattleLogic from "./useBattleLogic";
import Card from "./Card/Card";

function BattleScreen({difficulty, onReturnToMenu, onCompletion, onGameOver}) {

  // useBattleLogic is called on mount, and passes difficulty
  const { score, highScore, cards, handleCardClick, isHandFlipping } = useBattleLogic(difficulty, onCompletion, onGameOver);

  return (
    <div className={styles['battle-screen']}>
      <button type="button" id="back-button" onClick={onReturnToMenu}>go back</button>
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
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default BattleScreen;