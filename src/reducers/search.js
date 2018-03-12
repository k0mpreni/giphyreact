import {
  SEARCH_START,
  SEARCH_ERROR,
  SEARCH_SUCCESS
} from "../constants/actionTypes";

const initialState = {
  value: "",
  loading: false,
  results: [],
  error: null
};

const search = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case SEARCH_START:
      newState.loading = true;
      newState.value = action.value;
      return newState;
    case SEARCH_SUCCESS:
      newState.loading = false;
      newState.results = action.payload;
      return newState;
    case SEARCH_ERROR:
      newState.error = action.error;
      newState.loading = false;
      return newState;
    default:
      return state;
  }
};

export default search;
