import style from "./card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {addFavorites, deleteFavorites} from "../redux/actions"
import { useState, useEffect } from "react";


function Card(props) {
   const {name,species,gender,image,id, deleteFavorites, addFavorites, onClose, myFavorites} = props
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         deleteFavorites(id)

      }
      else {
         setIsFav(true)
         addFavorites(id,name,species,gender,image)
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div class={style.card}>
         {
         isFav ? 
         (<button onClick={handleFavorite}>❤️</button>)
         : 
         (<button onClick={handleFavorite}>🤍</button>)
         }
         <button className={style.boton} onClick={()=> onClose(id)}>X</button>
         <img className= {style.imagen} src={image} alt={name} />
         <Link to={`/details/${id}`}>
         <h2 className={style.nombre}> {name} </h2>
         </Link>
         <h4 className={style.datos}> {species} </h4>
         <h4 className={style.datos}> {gender} </h4>
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorites: (character) => dispatch(addFavorites(character)),
      deleteFavorites: (id) => dispatch(deleteFavorites(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)