import styles from "./Card.module.css"

function Card({id, name, img, handleCardClick}) {
  return (
    <div id={id} className={styles["card"]} onClick={() => handleCardClick(id)}>
      <img src={`${img}`} alt={name}/>
    </div>
  )
}

export default Card;