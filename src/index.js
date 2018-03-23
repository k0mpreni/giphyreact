import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { loadFavorites, saveFavorites } from './Utilities/favoritesUtils';
import thunk from 'redux-thunk';

const initialState = {
  favorites: loadFavorites()
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, initialState, enhancer);

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
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
