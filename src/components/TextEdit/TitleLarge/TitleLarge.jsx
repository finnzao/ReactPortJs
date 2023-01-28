import styles from "./TitleLarge.module.css"
function titllelarge(props) {
    let text = props.text
    return (
        <div className={styles.title}><h1>{text}</h1></div>
    )
}

export default titllelarge;