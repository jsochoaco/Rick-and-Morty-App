import imagen from "../Imagenes/404.png"
import style from "./error.module.css"

const Error = () => {
    return (
        <>
        <div className={style.contenedor}>
            <img className={style.imagen}src={imagen} alt="error" />
            <h1 className={style.titulo}>ERROR 404</h1>
            <h2 className={style.subtitulo}>Page not found</h2>
        </div>
        </>
    )

}

export default Error