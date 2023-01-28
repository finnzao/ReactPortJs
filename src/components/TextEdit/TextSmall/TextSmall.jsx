import styles from "./TextSmall.module.css"
function TextMedium(props) {
    return (
        <div className={styles.box}>
            <p>{props.text}</p>
        </div>
    )
}

export default TextMedium;