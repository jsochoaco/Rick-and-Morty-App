import { ADD_FAVORITES, DELETE_FAVORITES } from "./action-types"


const initialState = {
    myFavorites: [],
}


export const reducer = (state=initialState, action) => {
    switch (action.key) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites,action.payload] 
            }
        
        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}