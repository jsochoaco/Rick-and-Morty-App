import SearchBar from "./SearchBar";
import logo from "../../Imagenes/logotipo.png"
import style from "./nav.module.css"
import { NavLink } from "react-router-dom";

export default function NavBar (props) {
    const random = Math.floor(Math.random() * (826 - 1)) + 1;
    return (
        <div className={style.navbarra}>
            <div className={style.contenedor}>
                <img className={style.imagen} src= {logo} alt="logotipo" />
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
                <button className={style.botonuevo2} onClick={()=>props.onSearch(random)}>Random character</button>
                <SearchBar className={style.barrasuperior} onSearch={props.onSearch} />
                
            </div>
        </div>
    )
}


