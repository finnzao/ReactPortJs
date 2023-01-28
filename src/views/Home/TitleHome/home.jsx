import styles from "./home.module.css";
import Division from "../../../components/divisionPage/DivisonPageGreen/Division";
function Home() {
    return (
        <>
            <section className={styles.pre}>
                <div className={styles.preCity}><p>Rio de Janeiro,Brasil</p></div>
                <div className='preText'><h1>Criatividade e Praticidade em um só lugar </h1></div>
                <Division></Division>
            </section>
        </>
    )
}

export default Home;