import styles from "./itemPortfolio.module.css"
function itemPortfolio(props) {
    return (
        <div className={styles.card}>
            <div className={styles.title}><h2>{props.title}</h2></div>
            <div className={styles.aboutProject}>
                <div className={styles.imgCard}><img src={props.img} alt="" /></div>
                <div className={styles.text}><p>{props.text}</p></div>
            </div>
        </div>
    )

}

export default itemPortfolio;