import { Link } from "react-router-dom";
import styles from "./MenuItens.module.css"
function contactAuthor() {
    const Displaytop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className={styles.contactAuthor}>
            <div className={styles.itemContact} onClick={Displaytop}><Link to="./">HOME</Link></div>
            <div className={styles.itemContact} onClick={Displaytop}><Link to="./portfolio">PORTFOLIO</Link></div>
            <div className={styles.itemContact} onClick={Displaytop}><Link to="./about">SOBRE</Link></div>
        </div >
    )
}

export default contactAuthor;