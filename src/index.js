import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';

import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';

import  thunkMiddleware   from 'redux-thunk';
import { requestRobots } from './reducers';
import { combineReducers } from 'redux';


const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots} );
const store  = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    <Provider  store = {store} >
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();