import styles from "./BattleScreen.module.css"
import useBattleLogic from "./useBattleLogic";
import Card from "./Card/Card";

function BattleScreen({difficulty, onReturnToMenu}) {

  // useBattleLogic is called on mount, and passes difficulty
  const { score, highScore, cards, handleCardClick } = useBattleLogic(difficulty);

  return (
    <div className={styles['battle-screen']}>
      <button type="button" onClick={onReturnToMenu}>go back</button>
      <div className={styles['card-area-container']}>
        {cards.map(card => (
          <Card key={card.id} id={card.id} handleCardClick={handleCardClick}></Card>
        ))}
      </div>
    </div>
  )
}

export default BattleScreen;