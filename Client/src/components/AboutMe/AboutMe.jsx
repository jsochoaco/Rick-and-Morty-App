import style from "./aboutme.module.css"
import foto from "../../Imagenes/OCHOA1.png"

const AboutMe = () => {
    return (
        <div className={style.contenedor}>
            <div className={style.conimg}>
                <img className={style.imagen} src={foto} alt="MiFoto" />
            </div>
            <div className={style.datos}>
                <h2 className={style.nombre}>Juan Sebastián Ochoa Cortés</h2>
                <p className={style.info}><strong>My history: </strong>I'm 24 years old, I'm from Colombia.
                I recently graduated as a Mechanical Engineer as my main profession, and a few months ago I started my
                way in the world of software development, training as a Full Stack Developer. It has been exciting 
                and enriching to study and learn at Henry and this app is part of my learning in the FrontEnd Module.</p>
                <h4 className={style.info}>Tech Skills applied</h4>
                <ul className={style.info}>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </ul>


            </div>
        </div>
    )

}

export default AboutMe