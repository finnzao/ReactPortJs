import Titllelarge from "../../../components/TextEdit/TitleLarge/TitleLarge";
import ListItem from "../../../components/ListItem/ListItem";
import styles from "./About.module.css"
function About() {

    return (
        <section className={styles.about}>
            <Titllelarge text="Por que você precisa de nosso serviço?"></Titllelarge>


            <h1 className='aboutTitle'></h1>
            <div className='aboutDivision'> <div className='division'></div></div>
            <div className='aboutItens'>
                <ul className={styles.aboutList}>
                    <ListItem title="MOTIVO 1" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia iure eius voluptatem iste nemo corrupti. Ad sed iure quam?"></ListItem>
                    <ListItem title="MOTIVO 2" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia iure eius voluptatem iste nemo corrupti. Ad sed iure quam?"></ListItem>
                    <ListItem title="MOTIVO 3" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia iure eius voluptatem iste nemo corrupti. Ad sed iure quam?"></ListItem>
                </ul>
            </div>
        </section>

    )
}

export default About;