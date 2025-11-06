import { useEffect } from "react"
import styles from "./MainMenuScreen.module.css"
import cardSampleBG from "/src/assets/black-gold-cards/theFool.png"
import cardSamplePC from "/src/assets/purple-chrome-cards/theFool.png"

function MainMenuScreen({onStartGame, theme, onThemeChange, onDifficultyChange}) {
  const cardSample = theme === "blackGold" ? cardSampleBG : cardSamplePC;
  
  return (
    <div className={styles["main-menu"]}>
      <div className={styles["main-title"]}>Fortune Favors</div>
      <div className={styles["game-modes"]}>
        <button type="button" className={styles["easy-mode"]} onClick={() => onDifficultyChange("easy")}>Easy</button>
        <button type="button" className={styles["medium-mode"]} onClick={() => onDifficultyChange("medium")}>Medium</button>
        <button type="button" className={styles["hard-mode"]} onClick={() => onDifficultyChange("hard")}>Hard</button>
      </div>
      <button className={styles["start-btn"]} onClick={onStartGame}> start </button>
      <img src={cardSample} alt="cardSample" />
      <button className={styles["theme-btn"]} onClick={onThemeChange}> change theme </button>
    </div>
  )
}

export default MainMenuScreen;