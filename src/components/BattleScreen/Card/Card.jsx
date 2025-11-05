import styles from "./Card.module.css"
import cardBack from "/src/assets/tarot-cards/card-back/cardBack.png"

function Card({id, name, img, handleCardClick, isFlipping}) {

  const handleClick = () => {
    handleCardClick(id);
  };

  return (
    <div id={id} className={`${styles["card"]} ${isFlipping ? styles["isFlipped"] : ''}`} onClick={handleClick}>
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]}>
          <img src={`${img}`} alt={name}/>
        </div>
        <div className={styles["card-back"]}>
          <img src={cardBack} alt="card back"/>
        </div>
      </div>
    </div>
  )
}

export default Card;