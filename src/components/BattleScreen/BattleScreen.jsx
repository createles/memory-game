import styles from "./BattleScreen.module.css"

function BattleScreen({difficulty}) {

  // useBattleLogic is called on mount, and passes difficulty

  return (
    <div className={styles['battle-screen']}>
      <button>test cards display</button>
      <div className={styles['card-area-container']}>

      </div>
    </div>
  )
}

export default BattleScreen;