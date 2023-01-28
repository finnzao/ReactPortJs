import React from "react";
import TitleMedium from "../../../components/TextEdit/TitleLarge/TitleLarge";
import MenuItens from "../../../components/MenuItens/MenuItens";
import ContactAuthor from "../../../components/contactAuthor/contactAuthor"
import styles from "./Footer.module.css"
import DivisionGreen from "../../../components/divisionPage/DivisonPageGreen/Division";
function Footer() {
    return (
        <>
            <section >
                <div className={styles.footer} >
                    <div >
                        <div className='contactText'><p>Quer trabalhar com a melhor entregadora de resvista?Entre em contato e divulgue suas ideias</p></div>
                        <TitleMedium text="Entre em contato"></TitleMedium>
                    </div>

                    <div className={styles.boxContact}>
                        <ContactAuthor />
                        <MenuItens></MenuItens>
                    </div>


                </div>
                <DivisionGreen />
                <div className={styles.footerAuthor}>
                    <h3> &#169;Vogl Design,2023</h3>
                </div>

            </section>

        </>
    )
}

export default Footer;