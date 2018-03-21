import { makeFetchGifsUrl } from '../Utilities';
import {
  TOGGLE_FAVS,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  CHANGE_VALUE
} from '../constants/actionTypes';

export const toggleFavs = favorite => {
  return {
    type: TOGGLE_FAVS,
    favorite
  };
};

export const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    payload: value
  };
};

export const search_start = value => {
  return {
    type: SEARCH_START,
    payload: value
  };
};

export const search_success = payload => {
  return {
    type: SEARCH_SUCCESS,
    payload
  };
};

export const search_error = error => {
  return {
    type: SEARCH_ERROR,
    payload: error
  };
};

export const getGifs = value => {
  return dispatch => {
    return fetch(makeFetchGifsUrl(value))
      .then(response => {
        dispatch(search_start(value));
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject({ status: response.status });
      })
      .then(data => {
        const recievedData = data.data;
        dispatch(search_success(recievedData));
      })
      .catch(error => {
        dispatch(search_error(error));
      });
  };
};
