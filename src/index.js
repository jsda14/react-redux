import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { pokemonsReducer } from './redux/reducers/pokemons';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonsReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

