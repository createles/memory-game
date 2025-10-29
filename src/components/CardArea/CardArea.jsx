import styles from "./CardArea.module.css"

function CardArea({children}) {
  return (
    <div className={styles["card-area"]}>
      {children}
      <p>cards go here</p>
    </div>
  )
}

export default CardArea;