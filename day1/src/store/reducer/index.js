import {combineReducers} from 'redux';
import vote from './vote';
import personal from './personal';
import todo from './todo';

let reducer = combineReducers({
  vote,
  todo,
  personal
});
export default reducer;