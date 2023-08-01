import { ADD_FAVORITES, DELETE_FAVORITES, ORDER, FILTER } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    filterGender: null
}


export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload };
        case DELETE_FAVORITES:
            return { ...state, 
                myFavorites: action.payload };
        case FILTER:
            const filterCharacter = action.payload === "All" ? 
            state.allCharacters : state.allCharacters.filter((character) => character.gender === action.payload)
        return {
          ...state,
          myFavorites: filterCharacter,
          filterGender: action.payload // género filtrado en el estado
        };
        case ORDER:
            const characterOrder = state.filterGender === "All" ? 
                [...state.allCharacters] : 
                [...state.myFavorites]
            

            const sortCharacter = characterOrder.sort((a, b) => {
              if (action.payload === "A") {
                if (a.id < b.id) return -1
                if (b.id < a.id) return 1 // b viene antes que a
                return 0
              } 
              else {
                if (a.id < b.id) return 1
                if (b.id < a.id) return -1
                return 0
              }
            });
            return {
              ...state,
              myFavorites: sortCharacter, 
            };
        default:
            return {
                ...state
            }
    }
}