import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  CHANGE_VALUE
} from "../constants/actionTypes";

const initialState = {
  value: "",
  loading: false,
  results: [],
  error: null
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SEARCH_START:
      return {
        ...state, 
        loading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default search;
