/**
 * Client entry point
 */
import React from 'react';
import { render ,ReactDOM} from 'react-dom';
import App from './App';

// Redux
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(thunk));


const mountApp =  document.getElementById('root');

render(
  <Provider  store={store}>
        <App />
  </Provider>
   ,
  mountApp
);



