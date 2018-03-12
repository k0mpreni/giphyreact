import { TOGGLE_FAVS, SEARCH_START, SEARCH_SUCCESS, SEARCH_ERROR } from "../constants/actionTypes";

export const toggleFavs = favorite => {
  return {
    type: TOGGLE_FAVS,
    favorite
  };
};

export const search_start = value => {
  return {
    type: SEARCH_START,
    value
  };
};

export const search_success = payload => {
  return {
    type: SEARCH_SUCCESS,
    payload
  }
}

export const search_error = error => {
  return {
    type: SEARCH_ERROR,
    error
  }
}