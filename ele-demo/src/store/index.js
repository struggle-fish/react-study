import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';


import { home } from './moudules/home'

let reducer = combineReducers({
  home
});




let store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise, reduxLogger));
export default store;