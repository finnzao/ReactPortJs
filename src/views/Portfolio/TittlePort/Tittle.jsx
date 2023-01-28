import TitlePage from "../../../components/TextEdit/TitlePage/TitlePage";
import styles from "./Tittle.module.css"
import DivisionGreen from "../../../components/divisionPage/DivisionPageGreenFull/Division";
import TextMedium from "../../../components/TextEdit/TitleMedium/TitleMedium";
function TittlePort() {
    return (
        <div className={styles.titlePort}>
            <TitlePage text="Portfolio" />
            <TextMedium text="" />
            <DivisionGreen />
        </div>
    )

}

export default TittlePort;