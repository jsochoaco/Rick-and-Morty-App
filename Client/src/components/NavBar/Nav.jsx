import SearchBar from "./SearchBar";
import logo from "../../Imagenes/logotipo.png"
import style from "./nav.module.css"
import { NavLink } from "react-router-dom";

export default function NavBar (props) {
    const random = Math.floor(Math.random() * (826 - 1)) + 1;
    return (
        <div className={style.navbarra}>
            <div className={style.contenedor}>
                <NavLink to="/home">
                    <img className={style.imagen} src= {logo} alt="logotipo" />
                </NavLink>
                <NavLink to="/home">
                    <button className={style.botonuevo}>Home</button>
                </NavLink>
                <NavLink to="/AboutApp">
                    <button className={style.botonuevo}>About App</button>
                </NavLink>
                <NavLink to="/AboutMe">
                    <button className={style.botonuevo}>About Me</button>
                </NavLink>
                <NavLink to="/favorites">
                    <button className={style.botonuevo}>Favorites</button>
                </NavLink>
                <NavLink to="/">
                    <button className={style.botonut}>Log out</button>
                </NavLink>
            </div>
            <div className={style.contenedor2}>
                <SearchBar className={style.barrasuperior} onSearch={props.onSearch} />
                <button className={style.botonuevo2} onClick={()=>props.onSearch(random)}>Random character</button>
            </div>
        </div>
    )
}


