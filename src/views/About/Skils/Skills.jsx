import ItemToggle from "../../../components/layout/ItemToggle/ItemToogle.jsx"
import styles from "./Skills.module.css"
function Skills() {
    return (
        <>
            <div className={styles.skills}>
                <ItemToggle title="IMERSÃO" text="A primeira etapa do processo é a fase de descobrimento e contato inicial com a marca."
                    text2="Leitura do briefing, entendimento da empresa, mapa mental, palavras-chave, pesquisa aprofundada, investigação e geração de possíveis caminhos para o projeto."
                />
                <ItemToggle title="IDEAÇÃO" text="A segunda etapa conta com a formulação de estratégias e protótipos da nova identidade."
                    text2="
Análise e junção das descobertas para a geração de ideias e rascunhos do projeto, desenvolvimento de alternativas e protótipos que melhor se adequam à proposta do projeto e testes para verificar a funcionalidade."/>

                <ItemToggle title="IMPLEMENTAÇÃO" text="A terceira e última etapa temos o resultado do projeto e a apresentação do mesmo."
                    text2="Fechamento da ideia, refinamento, aprovações, aplicação nos pontos de contato propostos, entrega da projeto final para o cliente com todos os estudos feitos e fechamento de arquivos." />
            </div>
        </>

    )

}

export default Skills