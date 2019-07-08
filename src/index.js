import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadState, saveState} from './components/LocalStorage';


//if you've never used them before, these functions preserve the state of the redux store between page reloads
//the functions themselves are in LocalStorage.js in /components
const persistedStore = loadState();
const store = createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(thunk, logger),
    
  );

store.subscribe(() => {
    saveState(store.getState())
  })


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path='/' component={App} />
    </Router>
  </Provider>,  
  document.getElementById('root')
);
