import { connect } from "react-redux"
import style from "./favorites.module.css"
import Cards from "../Cards/Cards"
import { useDispatch } from "react-redux"
import * as actions from "../../redux/actions"
import { useState } from "react"


const Favorites = (props) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()
    const handleOrder = (evento) => {
        dispatch(actions.order(evento.target.value))
        setAux(true)
    }

    const handleFilter = (evento) => {
        dispatch(actions.filter(evento.target.value))
    }
    return (
        <>
        <div className={style.contenedor}>
            <h2 className={style.h2}>My Favorites</h2>
            <div>
                <select onChange={handleOrder}>
                    <option value="W">Unsorted</option>
                    <option value="A">Ascending</option>
                    <option value="D">Descending</option>
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <option value="All">All</option>                
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option> 
                </select>
            </div>
            <Cards characters = { props.myFavorites } />
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
