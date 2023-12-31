import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER, CREADO} from "./action-types" 
import axios from "axios"

export const addFavorites = (character) => {
   try {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      const {data} = await axios.post(endpoint, character)
         return dispatch({
             type: ADD_FAVORITES,
             payload: data,
          });
       };     
   } 
   catch (error) {
      return {error: error.message}
   }
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: ADD_FAVORITES,
   //           payload: data,
   //        });
   //     });
   //  };
 };

export const deleteFavorites= (id) => {
   try {
      const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
      return async (dispatch) => {
         const {data} = await axios.delete(endpoint)
            return dispatch({
                type: DELETE_FAVORITES,
                payload: data,
             });
          };     
      } 
      catch (error) {
         return {error: error.message}
      }
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//        axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//              type: DELETE_FAVORITES,
//              payload: data,
//        });
//        });
//     };
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


export const createUser = (datos) => {
   try {
       const endpoint = 'http://localhost:3001/rickandmorty/login/'
       return async (dispatch)=> {
           const response = await axios.post(endpoint, datos)
           const mensaje = response.data.existe
           dispatch({
            type: CREADO,
            payload: mensaje
        })    
       }
   } 
   catch (error) {
       return {error: error.message}
       // Status 500: Indica un error interno en el servidor 
   }
}