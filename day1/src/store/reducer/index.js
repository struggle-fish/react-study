import {combineReducers} from 'redux';
import vote from './vote';
import personal from './personal';
let reducer = combineReducers({
  vote,
  personal
});
export default reducer;