import styles from "./MainMenuScreen.module.css"

function MainMenuScreen({onStartGame, onThemeChange, onDifficultyChange}) {
  return (
    <div className={styles["main-menu"]}>
      <div className={styles["main-title"]}>Game title</div>
      <div className={styles["game-modes"]}>
        <button type="button" className={styles["easy-mode"]} onClick={() => onDifficultyChange("easy")}>Easy</button>
        <button type="button" className={styles["medium-mode"]} onClick={() => onDifficultyChange("medium")}>Medium</button>
        <button type="button" className={styles["hard-mode"]} onClick={() => onDifficultyChange("hard")}>Hard</button>
      </div>
      <button className={styles["start-btn"]} onClick={onStartGame}> start </button>
      <button className={styles["theme-btn"]} onClick={onThemeChange}> change theme </button>
    </div>
  )
}

export default MainMenuScreen;