import { connect } from "react-redux"
import Cards from "../Cards/Cards"


const Favorites = (props) => {
    return (
        <>
        <h2>My Favorites</h2>
            <Cards characters = { props.myFavorites } />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
