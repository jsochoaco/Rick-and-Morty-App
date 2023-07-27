import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}


export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites , action.payload],
            }
        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character)=> character.id !== action.payload),
            }
        case FILTER:
            if (action.payload !== "All") {
                return {
                    ...state,
                    myFavorites: [...state.myFavorites].filter((character)=> character.gender === action.payload),
                }
            }
        case ORDER:
            if (action.payload === "A") {

                return {
                    ...state,
                    myFavorites: [...state.myFavorites].sort((a,b)=> a.id-b.id),
                }
            }
            if (action.payload === "D") {
                return {
                    ...state,
                    myFavorites: [...state.myFavorites].sort((a,b)=> b.id - a.id),
                }
            }
        default:
            return {
                ...state
            }
    }
}