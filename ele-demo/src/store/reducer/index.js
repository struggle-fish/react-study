import { combineReducers } from 'redux';
import test from './test';
import homeReducer from './home';
let reducer = combineReducers({
  test,
  homeReducer
});

export default reducer;