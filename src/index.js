import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import { loadFavorites, saveFavorites } from "./Utilities/favoritesUtils";
import thunk from 'redux-thunk'
/*const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}*/

const initialState = {
  favorites: loadFavorites()
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let oldFavorites = initialState.favorites;

store.subscribe(() => {
  const { favorites } = store.getState();
  if (oldFavorites !== favorites) {
    saveFavorites(favorites);
    oldFavorites = favorites;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
