import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import style from "./details.module.css"

const CardDetails = () => {
    const {id} = useParams();
    const [character,setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
     }, [id]);
    return (
        <>
        {
            character ? (
                <div className={style.contenedor}>
                    <div className={style.datos}>
                        <h2 className={style.titulo} > {character.name} </h2>
                        <h4 className={style.info}> <strong>SPECIE | </strong>{character.species} </h4>
                        <h4 className={style.info}> <strong>GENDER | </strong>{character.gender} </h4>
                        <h4 className={style.info}> <strong>STATUS |</strong> {character.status} </h4>
                        <h4 className={style.info}> <strong>ORIGIN| </strong> {
                            character.origin ? (
                                character.origin.name
                            ): ("")
                        }</h4>
                    </div>
                    <div >
                        <img className={style.divimag} src={character.image} alt={character.name} />
                    </div>

                </div>
            )
            :
            ("")
        }
        </>
    )}


export default CardDetails