import styles from "/src/components/BattleScreen/CompletionModal.module.css"

function CompletionModal({time, record, onClose}) {
    return (
        <div className={styles["completion-modal"]}>
            <p className={styles["final-time"]}>{time}</p>
            <p className={styles["best-time"]}>{record}</p>
            <button type="button" className={styles["return-btn"]} onClick={onClose}> return to menu </button>
        </div>
    )
}

export default CompletionModal;