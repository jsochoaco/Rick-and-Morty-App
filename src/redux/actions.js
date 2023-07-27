import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER} from "./action-types" 


export const addFavorites =(character)=> {
    return {
        type: ADD_FAVORITES,
        payload: character
    }
}

export const deleteFavorites= (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

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


 