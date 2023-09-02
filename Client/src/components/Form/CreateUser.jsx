import { useState, useEffect } from "react"
import imagen from "../../Imagenes/inicioimg.png"
import style from "./form.module.css"
import imagen2 from "../../Imagenes/logotipo.png"
import * as actions from "../../redux/actions"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"



const CreateUser = (props) => {
    const [creado, setCreado] = useState(props.creado) //Perro creado o no
    useEffect(()=> {setCreado(props.creado)}, [props.creado])
    const dispatch = useDispatch()
    const [datos,setDatos] = useState({
        email: "",
        password:"",
    });
    const [error,setError] = useState({})
    //Funcion validadora
    const validate = (datos) => {
        const emailvaladation = new RegExp(/\S+@\S+\.\S+/)
        const passwordvalidation = new RegExp(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).+$/)
        let errors = {}
        if (!emailvaladation.test(datos.email)) {
                errors.email = "Invalid e-mail"
            }
        if (!passwordvalidation.test(datos.password)) {
                errors.password = "At least one number, one uppercase and one lowercase letter"
            }
        return errors
    }
    const handleChange = (evento) => {
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value,
        })
        setError(validate({...datos,
        [evento.target.name]:evento.target.value}))
    }
    const handleSubmit = (evento) => {
        evento.preventDefault()
        dispatch(actions.createUser(datos))
    }
    const handleClearAll = () => { //Limpieza
        setDatos({        email: "",password:"",});
        setError({});}
    const ok = ()=> { //Boton OK
        setCreado(null);
        handleClearAll()}
    return (
        <>
        <form onSubmit={handleSubmit} className={style.formelement} >
            <div className={style.contenedor}>
                <img className={style.logoinicio}src={imagen2} alt="titulo" />
                <img className={style.logoinicio} src={imagen} alt="inicio" />
                <div className={style.datos}>
                    <h1 className={style.titulo}>Create User</h1>
                    <label className={style.label + " " + style.formElement} >Email</label>
                    <input className={style.input + " " + style.formElement} type="text"
                    name="email" onChange={handleChange}/>
                    <br />
                    {error.email ? (<span className={style.alerta}>{error.email}</span>) : null}
                    <label className={style.label + " " + style.formElement}>Pasword</label>
                    <input className={style.input + " " + style.formElement} type="password"
                    name="password" onChange={handleChange}/>
                    <br />
                    {error.password ? (<span className={style.alerta}>{error.password}</span>) : null}
                </div>
                <input className={style.boton}
                type="submit"
                value="Create"
                disabled={ !datos.email || !datos.password || error.username || error.password }
                />
                <div>
                {creado === false ? (<div >
                    <span>This user already exists</span>
                    <button onClick={ok}>X</button>
                    </div>) 
                :creado === true ? (<div >
                    <span >User Created</span>
                    <NavLink to="/">
                        <button onClick={ok}>X</button>
                    </NavLink>
                    </div>):null}
                </div>
            </div>
        </form>
        </>
    )

}

export default CreateUser