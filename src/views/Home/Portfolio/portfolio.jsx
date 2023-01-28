import Division from "../../../components/divisionPage/DivisonPageGreen/Division";
import styles from "./portfolio.module.css";
import Titllelarge from "../../../components/TextEdit/TitleLarge/TitleLarge";
import TextMedium from "../../../components/TextEdit/TextMedium/TextMedium";
function portfolio() {
    return (
        <section className='port'>
            <div className={styles.portItens}>
                <div className={styles.portItem}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/58b0df134382973.61d4b2ef6f2ed.jpg" alt="" /><div><p>Projeto um</p></div></div>
                <div className={styles.portDuoItens}>
                    <div className={styles.portItem}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ef09ec134382973.61e868ccdb6bf.jpg" alt=""></img><div><p>Projeto Dois</p></div></div>
                    <div className={styles.portItem}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/58b0df134382973.61d4b2ef6f2ed.jpg" alt=""></img><div><p>Projeto Três</p></div></div>
                </div>
            </div>
            <div className='portText'>
                <h2 className='portTitle'></h2>
                <div className='portDivision'> <div className='division'></div></div>
                <div className='portAbout'></div>
            </div>
            <Titllelarge text="Projetos entregue de forma dinámica e prática"></Titllelarge>
            <Division ></Division>
            <TextMedium></TextMedium>
        </section>
    )
}

export default portfolio;