import { Link } from "react-router-dom";
import styles from "./MenuItens.module.css"
function contactAuthor() {
    return (
        <div className={styles.contactAuthor}>
            <div className={styles.itemContact}><Link to="./">HOME</Link></div>
            <div className={styles.itemContact}><Link to="./portfolio">PORTFOLIO</Link></div>
            <div className={styles.itemContact}><Link to="./about">SOBRE</Link></div>
        </div >
    )
}

export default contactAuthor;