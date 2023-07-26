import style from "./card.module.css";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux"
import { addFavorites, deleteFavorites } from "../../redux/actions"
import { useState, useEffect } from "react";


function Card({ id, name, species, gender, image, onClose, deleteFavorite, addFavorite, myFavorites}) {
   // const {name,species,gender,image,id, deleteFavorites, addFavorites, onClose, myFavorites} = props
   const [isFav, setIsFav] = useState(false)

   const { pathname } = useLocation()

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }
      else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   console.log(myFavorites)
   
   return (
      <div className={style.card}>
         {
         isFav ?(<button onClick={handleFavorite}>❤️</button>)
         : (<button onClick={handleFavorite}>🤍</button>)
         }
                  {
            !pathname.includes('/favorites') &&
               <button 
                  onClick={()=> {onClose(id)}} 
                  className={style.boton}>
                     X
               </button>
         }
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
      addFavorite: (character) => dispatch(addFavorites(character)),
      deleteFavorite: (id) => dispatch(deleteFavorites(id)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)