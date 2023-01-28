import ItemPortfolio from "../../../components/layout/ItemPortfolio/itemPortfolio";
import styles from "./ListPort.module.css";
function ListPort() {
    return (
        <div className={styles.listPort}>
            <ItemPortfolio title="Wolfs Team" img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06895e118681605.608e410065b44.png" text="A Wolfs Team é uma empresa que buscar melhorar sua identidade visual no meio tecnológico." />

            <ItemPortfolio title="Edge Ecosystem" img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/58b0df134382973.61d4b2ef6f2ed.jpg" text="Ajudando a comunidade crypto a se desenvolver" />
            <ItemPortfolio title="RS IMPORTADOS" img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3b2dc8132458363.61a921c16716a.png" text="Empresa de importação de variados produtos" />
        </div>
    )
}

export default ListPort;