import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import App from './App';
import './index.css';
import { logger } from './middlewares/middleware';
import rootReducer from './redux/reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(
  rootReducer, 
  composedEnhancers
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

