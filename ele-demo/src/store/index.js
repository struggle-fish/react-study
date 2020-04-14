import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';


import { home } from './moudules/home';
import { globalState } from './moudules/global';

// 合并管理员
let reducer = combineReducers({
  home,
  globalState
});




let store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise, reduxLogger));
export default store;