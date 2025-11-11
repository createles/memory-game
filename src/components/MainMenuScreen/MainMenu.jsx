import { useEffect } from "react"
import styles from "./MainMenuScreen.module.css"
import cardSampleBG from "/src/assets/black-gold-cards/theFool.png"
import cardSamplePC from "/src/assets/purple-chrome-cards/theFool.png"
import formatTime from "../formatTime"

function MainMenuScreen({onStartGame, theme, onThemeChange, difficulty, onDifficultyChange, records}) {
  const cardSample = theme === "blackGold" ? cardSampleBG : cardSamplePC;

  return (
    <div className={styles["main-menu"]}>
      <div className={styles["main-title"]}>Fortune Favors</div>
      <div className={styles["instructions"]}>
        <p className={styles["instruction-txt"]}> Click on each card in a set to complete a round. Each card must only be clicked <span className={styles["under-txt"]}>once</span>.</p>
      </div>
      <div className={styles["game-modes"]}>
        <div className={styles["mode-items"]}>
          <button type="button" className={`${styles["easy-mode"]} ${difficulty === 'easy' ? styles["selected"] : ''}`} onClick={() => onDifficultyChange("easy")}>Easy</button>
          <p className={styles["menu-time"]}>{records["easy"] === null ? "0:00" : formatTime(records["easy"])}</p>
        </div>
        <div className={styles["mode-items"]}>
          <button type="button" className={`${styles["medium-mode"]} ${difficulty === 'medium' ? styles["selected"] : ''}`} onClick={() => onDifficultyChange("medium")}>Medium</button>
          <p className={styles["menu-time"]}>{records["medium"] === null ? "0:00" : formatTime(records["medium"])}</p>
          </div>
        <div className={styles["mode-items"]}>
          <button type="button" className={`${styles["hard-mode"]} ${difficulty === 'hard' ? styles["selected"] : ''}`} onClick={() => onDifficultyChange("hard")}>Hard</button>
          <p className={styles["menu-time"]}>{records["hard"] === null ? "0:00" : formatTime(records["hard"])}</p>
          </div>
      </div>
      <button className={styles["start-btn"]} onClick={onStartGame}> start </button>
      <div className={styles["card-container"]}>
        <img className={styles["card-sample"]} src={cardSample} alt="cardSample" />
      </div>
      <button className={styles["theme-btn"]} onClick={onThemeChange}> change theme </button>
    </div>
  )
}

export default MainMenuScreen;