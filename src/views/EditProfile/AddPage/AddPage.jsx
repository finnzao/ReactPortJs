import styles from "./AddPage.module.css"
import { useEffect } from 'react';


function AddPage() {



    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const inputFile = document.querySelector("#picture_input");
        const pictureImage = document.querySelector(`.${styles.picture_imagem}`);
        const pictureImageText = "Chose image"
        pictureImage.innerHTML = pictureImageText

        inputFile.addEventListener('change', function (e) {
            const inputTarget = e.target;
            const file = inputTarget.files[0];
            if (file) {

                const reader = new FileReader();
                reader.addEventListener("load", function (e) {
                    const readerTarget = e.target;
                    pictureImage.innerHTML = "";
                    const img = document.createElement('img');
                    img.src = readerTarget.result;
                    img.classList.add(`${styles.picture_imagem}`);

                    pictureImage.appendChild(img);
                })
                reader.readAsDataURL(file);
            } else {
                pictureImage.innerHTML = pictureImageText;
            }

        })
    });
    return (
        <div className={styles.AddPage}>
            <div className={styles.painel}>
                <h1>Editor do portfolio </h1>
                <div className={`${styles.box} ${styles.omrs_input_underlined}`}>
                    <div className={styles.item} ><p>Título:<input type="text" required /></p></div>
                    <div className={styles.item}><p>Text:<input type="text" required /></p></div>
                    <input id="picture_input" className={styles.input_imagem} type="file" accept="image/png, image/jpeg" tabIndex="0" />
                    <label htmlFor="picture_input" className={styles.picture_input}>
                        <span className={styles.picture_imagem} >Chose image</span>
                    </label>
                </div>

            </div>

        </div>
    )


}
export default AddPage;