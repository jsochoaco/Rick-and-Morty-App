import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER} from "./action-types" 
import axios from "axios"

export const addFavorites = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAVORITES,
             payload: data,
          });
       });
    };
 };

export const deleteFavorites= (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETE_FAVORITES,
             payload: data,
       });
       });
    };
 };

export const order= (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const filter= (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}


 