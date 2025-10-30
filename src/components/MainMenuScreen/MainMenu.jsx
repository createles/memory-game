import styles from "./MainMenuScreen.module.css"

function MainMenuScreen({onStartGame, setDifficulty}) {

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    console.log(`difficulty set to: ${e.target.value}`);
  }

  return (
    <div className={styles["main-menu"]}>
      <div className={styles["main-title"]}>Game title</div>
      <div className={styles["game-modes"]}>
        <button type="button" className={styles["easy-mode"]} value={"easy"} onClick={handleDifficultyChange}>Easy</button>
        <button type="button" className={styles["medium-mode"]} value={"medium"} onClick={handleDifficultyChange}>Medium</button>
        <button type="button" className={styles["hard-mode"]} value={"hard"} onClick={handleDifficultyChange}>Hard</button>
      </div>
      <button className={styles["start-btn"]} onClick={onStartGame}> start </button>
    </div>
  )
}

export default MainMenuScreen;