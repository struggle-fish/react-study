import counter from './counter';
import todo from './todo';

// import { combineReducers } from 'redux';



// 需要把每个reducer都执行，把结果放到一个新的对象上
function combineReducers(reducers) {
  return function(state = {}, action) {
    let obj = {

    };
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }
    return obj;
  }
}

// 合并reducer
export default combineReducers({
  counter,
  todo
});