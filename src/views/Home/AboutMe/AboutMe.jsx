import React from "react";
import TitleMedium from "../../../components/TextEdit/TitleMedium/TitleMedium";
import TextMedium from "../../../components/TextEdit/TextMedium/TextMedium";
import styles from "./AboutMe.module.css"
function AboutMe() {
    return (
        <section className={styles.aboutMe}>
            <div className={styles.aboutMeBox}>
                <TitleMedium text="Sobre"></TitleMedium>
                <TextMedium text="Deis de 2018 no ramo de Design. Com especialidade na entrega de identidade visual para mais de 10 empresas. Sempre adaptado para cada cenário e objeto individual da marca. "></TextMedium>
            </div>
        </section>
    )
}

export default AboutMe;