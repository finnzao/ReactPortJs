import styles from "./ListItem.module.css";
function ListItem(props) {

    return (
        <ul className={styles.listItem} ><h3>{props.title}</h3><div><p>{props.text}</p></div></ul>
    )
}

export default ListItem