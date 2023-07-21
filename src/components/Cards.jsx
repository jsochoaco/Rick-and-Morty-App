import Card from './Card';
import style from "./cards.module.css";

export default function Cards(props) {
   const {characters} = props
   return (<div className={style.tarjetas}>
      {
         characters.map((character)=> {
            return (
               <Card
                  key = {character.id}
                  name = {character.name}
                  species = {character.species}
                  gender = {character.gender}
                  status = {character.status}
                  image = {character.image}
                  onClose = {() => props.onClose(character.id)}
                  id = {character.id}
               />
   
            )

         })
      }
   </div>);
}
