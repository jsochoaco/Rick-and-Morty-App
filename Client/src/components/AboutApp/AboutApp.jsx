import style from "./aboutapp.module.css"
import foto from "../../Imagenes/AppAbout.png"
//Funcon about me
const AboutMe = () => {
    return (
        <div className={style.contenedor}>
            <div className={style.datos}>
                <h2 className={style.nombre}>About Rick and Morty App</h2>
                <p className={style.info}>With this application you can access the
                 826 characters of the Rick and Morty series and know their main information. 
                 This application was created for educational purposes of SoyHenry's Full Stack Developer
                program. The entire Back-end and Front-end of the app was developed. </p>
                <p className={style.info}> The information was obtained from the API: <a className={style.link}href="https://rickandmortyapi.com">https://rickandmortyapi.com</a>
                </p>
            </div>
            <div className={style.conimg}>
                <img className={style.imagen} src={foto} alt="MiFoto" />
            </div>
        </div>
    )

}

export default AboutMe