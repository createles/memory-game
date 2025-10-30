import styles from "./BattleScreen.module.css"

function BattleScreen({cardArea}) {
  return (
    <div className={styles['battle-screen']}>
      <button>test cards display</button>
      <div className={styles['card-area-container']}>
        {cardArea}
      </div>
    </div>
  )
}

export default BattleScreen;