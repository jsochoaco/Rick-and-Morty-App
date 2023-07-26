import { connect } from "react-redux"
import style from "./favorites.module.css"
import Cards from "../Cards/Cards"


const Favorites = (props) => {
    return (
        <>
        <div className={style.contenedor}>
            <h2 className={style.h2}>My Favorites</h2>
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
