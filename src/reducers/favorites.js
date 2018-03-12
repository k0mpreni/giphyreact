import { TOGGLE_FAVS } from "../constants/actionTypes";

const favorites = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FAVS:
      const isFavorite = state.find(fav => fav.id === action.favorite.id);
      if (isFavorite) {
        // remove favorite
        return state.filter(fav => fav.id !== action.favorite.id);
      } else {
        // add favorite
        return [...state, action.favorite];
      }
    default:
      return state;
  }
};

export default favorites;
