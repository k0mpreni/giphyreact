import { combineReducers } from "redux";
import favorites from "./favorites";
import search from "./search";

const gifApp = combineReducers({
  favorites,
  search
});

export default gifApp;
