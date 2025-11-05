import { useEffect, useState } from "react";
import styles from "./Card.module.css"
import cardBack from "/src/assets/tarot-cards/card-back/cardBack.png"

function Card({id, name, img, handleCardClick, isFlipping, index}) {
  const [isDealt, setIsDealt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDealt(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    handleCardClick(id);
  };

  return (
    <div id={id} className={`${styles["card"]} ${isFlipping ? styles["isFlipped"] : ''} ${isDealt ? styles["isDealt"] : ''}`} style={{ '--deal-delay': `${index * 50}ms`}} onClick={handleClick}>
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