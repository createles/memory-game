import styles from "./Card.module.css"

function Card({id, handleCardClick}) {
  return (
    <div id={id} className={styles["card"]} onClick={() => handleCardClick(id)}>This is a {id} card</div>
  )
}

export default Card;