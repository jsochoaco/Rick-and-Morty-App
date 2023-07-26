import { useState } from "react"
import imagen from "../../Imagenes/inicioimg.png"
import style from "./form.module.css"



const Form = (props) => {
    const [datos,setDatos] = useState({
        email: "",
        password:"",
    });

    const [error,setError] = useState({})
    //Funcion validadora
    const validate = (datos) => {
        const emailvaladation = new RegExp(/\S+@\S+\.\S+/)
        const passwordvalidation = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
        let errors = {}
        if (!emailvaladation.test(datos.email)) {
                errors.email = "Invalid e-mail"
            }
        if (!passwordvalidation.test(datos.password)) {
                errors.password = "At least one number"
            }
        return errors
        }
    
    const handleChange = (evento) => {
        setDatos({
            ...datos,
            //Hace dinamica la propiedad
            // prop: value
            [evento.target.name]: evento.target.value,
        })
        setError(validate({...datos,
        [evento.target.name]:evento.target.value}))
        }
    const handleSubmit = (evento) => {
        evento.preventDefault()
        return props.onLogin(datos)
    }
    return (
        <>
        <form onSubmit={handleSubmit} className={style.formelement} >
            <div className={style.contenedor}>
                <img className={style.logoinicio} src={imagen} alt="inicio" />
                <div className={style.datos}>
                    <h1 className={style.titulo}>Welcome to the Rick and Morty App</h1>
                    <label className={style.label + " " + style.formElement} >Email</label>
                    <input className={style.input + " " + style.formElement} type="text"
                    name="email" onChange={handleChange}/>
                    <br />
                    {
                    error.email ? (
                        <span className={style.alerta}>{error.email}</span>
                    ) : null
                    }
                    <label className={style.label + " " + style.formElement}>Pasword</label>
                    <input className={style.input + " " + style.formElement} type="password"
                    name="password" onChange={handleChange}/>
                    <br />
                    {
                    error.password ? (
                        <span className={style.alerta}>{error.password}</span>
                    ) : null
                    }
                </div>
                <input className={style.boton}
                type="submit"
                value="Log in"
                disabled={ !datos.email || !datos.password || error.username || error.password }
            />
            </div>
        </form>
        </>
    )

}

export default Form