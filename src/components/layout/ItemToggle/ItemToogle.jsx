import styles from "./ItemToogle.module.css"
import { useState } from "react";
function ItemToggle(props) {

    const [active = false, setMode] = useState(true);
    const ToggleMode = () => {
        setMode(!active)
    }


    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <div className={styles.boxTitle}>
                    <h3>{props.title}</h3><div className={styles.button} onClick={ToggleMode} >

                        <svg className={active ? `${styles.open}` : `${styles.close}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>

                        <svg className={active ? `${styles.close}` : `${styles.open}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                        </svg>
                    </div>
                </div>
                <div className={active ? `${styles.text} ${styles.close}` : `${styles.text} ${styles.open}`}>
                    <p>{props.text}</p>

                    <p>{props.text2}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemToggle;